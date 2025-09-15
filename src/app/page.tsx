import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Menus } from "@/components/Menus";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { About } from "@/components/About";
import { MenuCards } from "@/components/MenuCards";

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Hero />
      <Features />
      <Menus />
      <About />
      <MenuCards />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
