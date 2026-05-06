import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { Brands } from "@/components/landing/Brands";
import { Process } from "@/components/landing/Process";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <Hero />
      <Services />
      <Brands />
      <Process />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
