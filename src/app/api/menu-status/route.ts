import { NextResponse } from "next/server";
import { getUploadedFileUrl } from "@/lib/uploaded-files";

export async function GET() {
  try {
    const uploadedFiles = {
      "menu-equilibre.pdf": getUploadedFileUrl("menu-equilibre.pdf"),
      "menu-traiteur.pdf": getUploadedFileUrl("menu-traiteur.pdf"),
    };
    
    return NextResponse.json({ 
      ok: true, 
      files: uploadedFiles 
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des fichiers:", error);
    return NextResponse.json({ 
      ok: false, 
      error: "Erreur lors de la récupération des fichiers" 
    }, { status: 500 });
  }
}
