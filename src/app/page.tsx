import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Menus } from "@/components/Menus";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Features />
      <Menus />
      <Process />
      <CTA />
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
