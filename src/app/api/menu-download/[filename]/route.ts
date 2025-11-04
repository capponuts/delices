import { NextResponse } from "next/server";
import { head } from "@vercel/blob";
import { getUploadedFileUrl } from "@/lib/uploaded-files";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // D'abord, vérifier si une URL est stockée lors de l'upload (plus récente)
    const storedUrl = getUploadedFileUrl(filename);
    if (storedUrl) {
      // Ajouter un paramètre de cache-busting pour forcer le téléchargement de la nouvelle version
      const url = new URL(storedUrl);
      url.searchParams.set('t', Date.now().toString());
      // Rediriger avec des en-têtes anti-cache
      const response = NextResponse.redirect(url.toString());
      response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
      response.headers.set('Pragma', 'no-cache');
      response.headers.set('Expires', '0');
      return response;
    }
    
    // Sinon, vérifier si le fichier existe dans Vercel Blob
    try {
      const blobInfo = await head(filename);
      if (blobInfo) {
        // Le fichier existe dans Blob, rediriger vers l'URL Blob avec cache-busting
        const url = new URL(blobInfo.url);
        url.searchParams.set('t', Date.now().toString());
        // Rediriger avec des en-têtes anti-cache
        const response = NextResponse.redirect(url.toString());
        response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, max-age=0');
        response.headers.set('Pragma', 'no-cache');
        response.headers.set('Expires', '0');
        return response;
      }
    } catch (error) {
      // Le fichier n'existe pas dans Blob, continuer avec le fichier par défaut
      console.log(`Fichier ${filename} non trouvé dans Blob, utilisation du fichier par défaut`);
    }
    
    // Si aucun fichier uploadé, essayer de servir le fichier par défaut
    const defaultUrl = `/${filename}`;
    return NextResponse.redirect(new URL(defaultUrl, request.url));
  } catch (error) {
    console.error("Erreur lors du téléchargement:", error);
    return new NextResponse("Erreur lors du téléchargement", { status: 500 });
  }
}
