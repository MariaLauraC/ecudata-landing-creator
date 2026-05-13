import { Cpu, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary shadow-glow">
            <Cpu className="h-5 w-5 text-white" />
          </div>
          <span className="text-lg font-bold">
            Socca<span className="text-primary">Tech</span>
          </span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollToSection('servicios')} className="text-sm font-medium hover:text-primary transition-colors">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-sm font-medium hover:text-primary transition-colors">Marcas</button>
          <button onClick={() => scrollToSection('proceso')} className="text-sm font-medium hover:text-primary transition-colors">Proceso</button>
          <a 
            href="https://soccatech-ecu.blogspot.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </a>
          <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-primary transition-colors">Contacto</button>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contacto')}>Consultar ahora</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Menú Móvil */}
      {open && (
        <div className="p-4 bg-background border-b md:hidden flex flex-col gap-4 animate-in fade-in slide-in-from-top-4">
          <button onClick={() => scrollToSection('servicios')} className="text-left py-2 border-b border-border/40">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-left py-2 border-b border-border/40">Marcas</button>
          <a 
            href="https://soccatech-ecu.blogspot.com/" 
            target="_blank" 
            rel="noreferrer" 
            className="text-left py-2 border-b border-border/40 font-medium text-primary"
          >
            Blog Especializado
          </a>
          <button onClick={() => scrollToSection('contacto')} className="text-left py-2">Contacto</button>
        </div>
      )}
    </header>
  );
};
