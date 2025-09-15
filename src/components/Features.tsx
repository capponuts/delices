"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Truck } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Features() {
  const items = [
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
  ];

  return (
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
        {items.map((f, i) => (
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
  );
}
