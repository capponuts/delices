export function Process() {
  const steps = [
    {
      step: "01",
      title: "Choisissez",
      desc: "Sélectionnez vos plats préférés ou laissez‑nous vous guider.",
    },
    {
      step: "02",
      title: "Nous cuisinons",
      desc: "Des ingrédients de saison préparés avec soin.",
    },
    {
      step: "03",
      title: "Nous livrons",
      desc: "À l’heure, avec le sourire, chez vous ou au bureau.",
    },
  ];
  return (
    <section className="container mx-auto px-6 sm:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Comment ça marche</h2>
      <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((s, i) => (
          <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            <div className="text-sm text-black/60 dark:text-white/60">{s.step}</div>
            <div className="mt-2 text-lg font-semibold">{s.title}</div>
            <p className="mt-1 text-sm text-black/70 dark:text-white/70">{s.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
