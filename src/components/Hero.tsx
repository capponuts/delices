"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, UtensilsCrossed } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <video
        className="w-full h-[70vh] object-cover"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero.jpg"
      >
        <source src="/videosables.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="container mx-auto max-w-5xl px-6 sm:px-8">
          <div className="mb-6 flex justify-center">
            <Image
              src="/Delices-et-services0.png"
              alt="Logo Délices & Services"
              width={420}
              height={126}
              className="w-auto h-16 sm:h-20 md:h-24 lg:h-28"
            />
          </div>
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center text-white backdrop-blur-[2px] sm:backdrop-blur-0 sm:bg-transparent bg-black/30 p-4 sm:p-0 rounded-lg"
          >
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">
              Délices & Services, portage de repas à domicile
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-white">N°1 sur le Pays des Olonnes</p>
            <p className="mt-2 text-white/90">100% Sablaise • Qualité traiteur • Sans engagement • Depuis 2014</p>
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
  );
}
