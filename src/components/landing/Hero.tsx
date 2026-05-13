import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck } from "lucide-react";
import heroImage from "@/assets/hero-ecu.jpg";

export const Hero = () => (
  <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-16">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Reparación de ECU automotriz" className="h-full w-full object-cover" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
    </div>

    <div className="container relative z-10 py-20">
      <div className="max-w-3xl animate-fade-up">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-2 w-2 animate-glow-pulse rounded-full bg-primary" />
          Especialistas en electrónica automotriz
        </div>

        <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Ingeniería electrónica aplicada al{" "}
          <span className="text-gradient">rubro automotriz</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
          Reparación y diagnóstico de módulos de control — ECU, BSI, BSM, UCH y Airbag. 
          Pruebas en banco de sistemas Nafta y Diesel. Recibimos módulos de todo el país.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">
              Solicitar diagnóstico
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#services">Ver servicios</a>
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            Garantía en todas las reparaciones
          </div>
          <div className="flex items-center gap-2">
            <Truck className="h-5 w-5 text-primary" />
            Envíos a todo el país
          </div>
        </div>
      </div>
    </div>
  </section>
);
