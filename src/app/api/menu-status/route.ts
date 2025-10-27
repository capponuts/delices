import { NextResponse } from "next/server";
import { getUploadedFileUrl } from "@/lib/uploaded-files";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const equilibreUrl = searchParams.get("equilibre_url");
    const traiteurUrl = searchParams.get("traiteur_url");
    
    // Si des URLs sont fournies en paramètres, les utiliser
    if (equilibreUrl || traiteurUrl) {
      const uploadedFiles = {
        "menu-equilibre.pdf": equilibreUrl,
        "menu-traiteur.pdf": traiteurUrl,
      };
      
      return NextResponse.json({ 
        ok: true, 
        files: uploadedFiles 
      });
    }
    
    // Sinon, utiliser le stockage en mémoire
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
