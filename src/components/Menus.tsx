"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export function Menus() {
  const sources = ["/images/meal1.jpg", "/images/meal2.jpg", "/images/hero.jpg"];
  return (
    <section className="bg-black/[0.02] dark:bg-white/[0.03] py-12" id="menus">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold">Des plats qui donnent envie</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {sources.map((src, i) => (
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
          ))}
        </div>
      </div>
    </section>
  );
}
