import { NextResponse } from "next/server";
import { tempStorage } from "@/lib/temp-storage";

export const runtime = "nodejs";

function isPdf(file: File | null): file is File {
  if (!file) return false;
  
  // Vérifier l'extension du fichier (plus fiable)
  const fileName = file.name.toLowerCase();
  if (fileName.endsWith(".pdf")) {
    return true;
  }
  
  // Vérifier le type MIME comme fallback
  const mimeType = file.type.toLowerCase();
  return mimeType === "application/pdf" || mimeType === "application/x-pdf";
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const { searchParams } = new URL(request.url);
    const wantsRedirect = searchParams.get("redirect") === "1";
    const menuEquilibre = formData.get("menuEquilibre");
    const menuTraiteur = formData.get("menuTraiteur");

    const filesToWrite: Array<{ targetName: string; file: File }> = [];

    if (menuEquilibre instanceof File && menuEquilibre.size > 0) {
      if (!isPdf(menuEquilibre)) {
        return NextResponse.json({ ok: false, error: "Le fichier Équilibre doit être un PDF." }, { status: 400 });
      }
      filesToWrite.push({ targetName: "menu-equilibre.pdf", file: menuEquilibre });
    }

    if (menuTraiteur instanceof File && menuTraiteur.size > 0) {
      if (!isPdf(menuTraiteur)) {
        return NextResponse.json({ ok: false, error: "Le fichier Traiteur doit être un PDF." }, { status: 400 });
      }
      filesToWrite.push({ targetName: "menu-traiteur.pdf", file: menuTraiteur });
    }

    if (filesToWrite.length === 0) {
      if (wantsRedirect) {
        return NextResponse.redirect(new URL("/menu?error=Aucun%20fichier%20re%C3%A7u.", request.url));
      }
      return NextResponse.json({ ok: false, error: "Aucun fichier reçu." }, { status: 400 });
    }

    const results: Record<string, string> = {};

    for (const { targetName, file } of filesToWrite) {
      const bytes = Buffer.from(await file.arrayBuffer());
      
      // Stocker en mémoire temporairement
      tempStorage.set(targetName, bytes);
      results[targetName] = "updated";
    }

    if (wantsRedirect) {
      return NextResponse.redirect(new URL("/menu?success=1", request.url));
    }
    return NextResponse.json({ ok: true, updated: results });
  } catch (error) {
    console.error("Erreur lors du téléversement:", error);
    const message = error instanceof Error ? error.message : "Erreur lors du téléversement.";
    try {
      const { searchParams } = new URL(request.url);
      const wantsRedirect = searchParams.get("redirect") === "1";
      if (wantsRedirect) {
        return NextResponse.redirect(new URL(`/menu?error=${encodeURIComponent(message)}`, request.url));
      }
    } catch {}
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}

