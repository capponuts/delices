import { Phone } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="py-12">
      <div className="container mx-auto px-6 sm:px-8">
        <div className="rounded-2xl bg-gradient-to-tr from-black to-zinc-800 text-white p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold">Prêt à commander ?</h3>
              <p className="mt-2 text-white/80">Appelez‑nous pour connaître les menus du jour.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+33251900116"
                className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90"
              >
                <Phone className="mr-2 h-5 w-5" /> 02 51 90 01 16
              </a>
              <a
                href="mailto:contact@delices-et-services.fr"
                className="inline-flex items-center rounded-md bg-transparent border border-white/30 text-white px-5 py-3 font-medium hover:bg-white/10"
              >
                Nous écrire
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
