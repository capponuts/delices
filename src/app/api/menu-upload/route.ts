import { NextResponse } from "next/server";
import { writeFile, stat } from "fs/promises";
import path from "path";

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

    const publicDir = path.join(process.cwd(), "public");

    const results: Record<string, string> = {};

    for (const { targetName, file } of filesToWrite) {
      const bytes = Buffer.from(await file.arrayBuffer());
      const targetPath = path.join(publicDir, targetName);

      // Optional: ensure public dir exists (it does in this app, but keep a safe check)
      try {
        await stat(publicDir);
      } catch {
        // ignore; Next apps include public/
      }

      await writeFile(targetPath, bytes);
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

