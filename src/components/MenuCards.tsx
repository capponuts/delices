"use client";
import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import Image from "next/image";

interface MenuData {
  title: string;
  desc: string;
  defaultHref: string;
  cta: string;
  img: string;
}

export function MenuCards() {
  const [uploadedUrls, setUploadedUrls] = useState<Record<string, string | null>>({});
  
  const menus: MenuData[] = [
    {
      title: "Menu Équilibre",
      desc: "Des repas équilibrés, préparés avec des ingrédients frais, pour une alimentation saine et variée au quotidien. Idéal pour prendre soin de votre santé.",
      defaultHref: "/menu-equilibre.pdf",
      cta: "Télécharger le menu Équilibre (PDF)",
      img: "/menu-equilibre.jpg",
    },
    {
      title: "Menu Traiteur",
      desc: "Laissez-vous tenter par nos créations culinaires ! Des plats savoureux et raffinés, comme si vous étiez au restaurant, livrés chez vous.",
      defaultHref: "/menu-traiteur.pdf",
      cta: "Télécharger le menu Traiteur (PDF)",
      img: "/menu-traiteur.jpg",
    },
  ];

  useEffect(() => {
    // Récupérer les URLs depuis localStorage
    const equilibreUrl = localStorage.getItem("uploaded_menu_equilibre_url");
    const traiteurUrl = localStorage.getItem("uploaded_menu_traiteur_url");
    
    setUploadedUrls({
      "menu-equilibre.pdf": equilibreUrl,
      "menu-traiteur.pdf": traiteurUrl,
    });
  }, []);

  const getFileHref = (menu: MenuData): string => {
    const filename = menu.defaultHref.replace("/", "");
    const uploadedUrl = uploadedUrls[filename];
    
    if (uploadedUrl) {
      return uploadedUrl;
    }
    
    return menu.defaultHref;
  };

  return (
    <section className="container mx-auto px-6 sm:px-8 py-12">
      <h2 className="text-2xl sm:text-3xl font-semibold">Nos Menus</h2>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {menus.map((menu) => (
          <div key={menu.title} className="rounded-2xl border border-black/10 p-6 bg-white text-black shadow-sm">
            <Image
              src={menu.img}
              alt={menu.title}
              width={800}
              height={600}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold">{menu.title}</h3>
            <p className="mt-2 text-sm text-black/70">{menu.desc}</p>
            <a
              href={getFileHref(menu)}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90"
            >
              <Download className="h-4 w-4 mr-2" /> {menu.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}