export function Footer() {
  return (
    <footer className="py-8 border-t border-black/10">
      <div className="container mx-auto px-6 sm:px-8 grid gap-3 text-sm text-black/70">
        <div>
          Eurl D&S Littoral, Siret : 80467225100019 — RCS : La Roche-sur-Yon B 799 094 206
        </div>
        <div>
          Téléphone : <a href="tel:+33251900116" className="underline">02 51 90 01 16</a> —
          Courriel : <a href="mailto:contact@delices-et-services.fr" className="underline">contact@delices-et-services.fr</a>
        </div>
        <div>
          Copyright © {new Date().getFullYear()} - Tous droits réservés - Site Web réalisé par la société Kapinfo.
        </div>
      </div>
    </footer>
  );
}


