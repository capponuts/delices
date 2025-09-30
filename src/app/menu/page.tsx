export default function MenuUploadPage({ searchParams }: { searchParams: { success?: string; error?: string } }) {
  const success = searchParams?.success === "1";
  const error = searchParams?.error;

  return (
    <section className="container mx-auto px-6 sm:px-8 py-12">
      <h1 className="text-2xl sm:text-3xl font-semibold">Mettre à jour les menus (PDF)</h1>
      <p className="mt-2 text-sm text-black/70">
        Importez les nouveaux fichiers. Ils remplaceront `public/menu-equilibre.pdf` et `public/menu-traiteur.pdf`.
      </p>

      <form action="/api/menu-upload?redirect=1" method="post" encType="multipart/form-data" className="mt-6 grid gap-6 max-w-xl">
        <div>
          <label className="block text-sm font-medium">Menu Équilibre (PDF)</label>
          <input
            type="file"
            name="menuEquilibre"
            accept="application/pdf"
            className="mt-2 block w-full border rounded-md p-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Menu Traiteur (PDF)</label>
          <input
            type="file"
            name="menuTraiteur"
            accept="application/pdf"
            className="mt-2 block w-full border rounded-md p-2"
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
        >
          Mettre à jour
        </button>

        {success && <p className="text-green-600 text-sm">Menus mis à jour avec succès.</p>}
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </section>
  );
}

