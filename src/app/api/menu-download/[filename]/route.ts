import { NextResponse } from "next/server";
import { getUploadedFileUrl } from "@/lib/uploaded-files";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    
    // Vérifier si le fichier a été uploadé
    const blobUrl = getUploadedFileUrl(filename);
    
    if (blobUrl) {
      // Rediriger vers l'URL Blob
      return NextResponse.redirect(blobUrl);
    }
    
    // Si aucun fichier uploadé, essayer de servir le fichier par défaut
    const defaultUrl = `/${filename}`;
    return NextResponse.redirect(new URL(defaultUrl, request.url));
  } catch (error) {
    console.error("Erreur lors du téléchargement:", error);
    return new NextResponse("Erreur lors du téléchargement", { status: 500 });
  }
}
