import { NextResponse } from "next/server";
import { head } from "@vercel/blob";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // Vérifier si le fichier existe dans Vercel Blob
    try {
      const blobInfo = await head(filename);
      if (blobInfo) {
        // Le fichier existe dans Blob, rediriger vers l'URL Blob
        return NextResponse.redirect(blobInfo.url);
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
