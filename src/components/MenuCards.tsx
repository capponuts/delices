import { Download } from "lucide-react";

export function MenuCards() {
  const menus = [
    {
      title: "Menu Équilibre",
      desc:
        "Des repas équilibrés, préparés avec des ingrédients frais, pour une alimentation saine et variée au quotidien. Idéal pour prendre soin de votre santé.",
      href: "mailto:contact@delices-et-services.fr?subject=Demande%20Menu%20%C3%89quilibre",
      cta: "Télécharger le menu Équilibre",
    },
    {
      title: "Menu Traiteur",
      desc:
        "Laissez-vous tenter par nos créations culinaires ! Des plats savoureux et raffinés, comme si vous étiez au restaurant, livrés chez vous.",
      href: "mailto:contact@delices-et-services.fr?subject=Demande%20Menu%20Traiteur",
      cta: "Télécharger le menu Traiteur",
    },
  ];

  return (
    <section className="container mx-auto px-6 sm:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Nos Menus</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {menus.map((m) => (
          <div key={m.title} className="rounded-2xl border border-black/10 p-6 bg-white">
            <h3 className="text-xl font-semibold">{m.title}</h3>
            <p className="mt-2 text-sm text-black/70">{m.desc}</p>
            <a
              href={m.href}
              className="mt-4 inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
            >
              <Download className="h-4 w-4 mr-2" /> {m.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}


