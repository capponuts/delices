import { NextResponse } from "next/server";
import { tempStorage } from "@/lib/temp-storage";

export async function GET(
  request: Request,
  { params }: { params: { filename: string } }
) {
  try {
    const filename = params.filename;
    
    // Vérifier que le fichier existe dans le stockage temporaire
    const fileBuffer = tempStorage.get(filename);
    
    if (!fileBuffer) {
      return new NextResponse("Fichier non trouvé", { status: 404 });
    }
    
    // Retourner le fichier PDF
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${filename}"`,
        "Cache-Control": "public, max-age=3600", // Cache pour 1 heure
      },
    });
  } catch (error) {
    console.error("Erreur lors du téléchargement:", error);
    return new NextResponse("Erreur lors du téléchargement", { status: 500 });
  }
}
