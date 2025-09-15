"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, Phone, Clock, Truck, UtensilsCrossed } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Plateaux de repas équilibrés"
          width={1920}
          height={1080}
          className="w-full h-[70vh] object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-6 sm:px-8">
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeIn}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
                Livraison de repas à domicile, simple et savoureuse
              </h1>
              <p className="mt-4 text-white/90">
                Des menus équilibrés, flexibles et prêts à déguster. Pour vous, vos
                proches et vos équipes.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90"
                >
                  <Phone className="mr-2 h-5 w-5" /> Nous appeler
                </a>
                <a
                  href="#menus"
                  className="inline-flex items-center justify-center rounded-md bg-black/60 text-white border border-white/20 px-5 py-3 font-medium backdrop-blur hover:bg-black/50"
                >
                  <UtensilsCrossed className="mr-2 h-5 w-5" /> Découvrir nos menus
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Atouts */}
      <section className="container mx-auto px-6 sm:px-8 py-12" id="services">
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-2xl sm:text-3xl font-semibold"
        >
          Pourquoi nous choisir
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: <Clock className="h-6 w-6" />,
              title: "Ponctualité",
              desc: "Des créneaux fiables adaptés à votre quotidien.",
            },
            {
              icon: <Truck className="h-6 w-6" />,
              title: "Livraison locale",
              desc: "Des tournées optimisées et respectueuses de l’environnement.",
            },
            {
              icon: <CheckCircle className="h-6 w-6" />,
              title: "Menus équilibrés",
              desc: "Des plats variés, de saison et nutritionnellement complets.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-white dark:bg-black"
            >
              <div className="text-black dark:text-white">{f.icon}</div>
              <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-black/70 dark:text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Menus */}
      <section className="bg-black/[0.02] dark:bg-white/[0.03] py-12" id="menus">
        <div className="container mx-auto px-6 sm:px-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">Des plats qui donnent envie</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {["/images/meal1.jpg", "/images/meal2.jpg", "/images/hero.jpg"].map(
              (src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="overflow-hidden rounded-xl"
                >
                  <Image
                    src={src}
                    alt="Plat appétissant"
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform"
                  />
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="container mx-auto px-6 sm:px-8 py-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">Comment ça marche</h2>
        <ol className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
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
          ].map((s, i) => (
            <li key={i} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
              <div className="text-sm text-black/60 dark:text-white/60">{s.step}</div>
              <div className="mt-2 text-lg font-semibold">{s.title}</div>
              <p className="mt-1 text-sm text-black/70 dark:text-white/70">{s.desc}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* CTA */}
      <section id="contact" className="py-12">
        <div className="container mx-auto px-6 sm:px-8">
          <div className="rounded-2xl bg-gradient-to-tr from-black to-zinc-800 text-white p-8">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl font-semibold">Prêt à commander ?</h3>
                <p className="mt-2 text-white/80">Appelez‑nous pour connaître les menus du jour.</p>
              </div>
              <a
                href="tel:+33000000000"
                className="inline-flex items-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90"
              >
                <Phone className="mr-2 h-5 w-5" /> 00 00 00 00 00
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-black/10 dark:border-white/10">
        <div className="container mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-black/60 dark:text-white/60">© {new Date().getFullYear()} Délices & Services</div>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#services" className="hover:underline">Services</a>
            <a href="#menus" className="hover:underline">Menus</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
