import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import logoImg from "../../assets/logo-soccatech.jpeg";

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
      <div className="container flex h-20 items-center justify-between">
        {/* Contenedor del Logo con más tamaño */}
        <div 
          className="flex items-center cursor-pointer py-2" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src={logoImg} 
            alt="SoccaTech" 
            className="h-16 w-auto object-contain md:h-20 scale-125" 
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollToSection('servicios')} className="text-sm font-medium hover:text-primary transition-colors text-white">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-sm font-medium hover:text-primary transition-colors text-white">Marcas</button>
          <button onClick={() => scrollToSection('proceso')} className="text-sm font-medium hover:text-primary transition-colors text-white">Proceso</button>
          <a 
            href="https://soccatech-ecu.blogspot.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium hover:text-primary transition-colors text-white"
          >
            Blog
          </a>
          <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-primary transition-colors text-white">Contacto</button>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contacto')}>Consulta ahora</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="p-4 bg-background border-b md:hidden flex flex-col gap-4">
          <button onClick={() => scrollToSection('servicios')} className="text-left py-2 border-b border-border/40 text-white">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-left py-2 border-b border-border/40 text-white">Marcas</button>
          <a href="https://soccatech-ecu.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-left py-2 border-b border-border/40 font-medium text-primary">Blog Especializado</a>
          <button onClick={() => scrollToSection('contacto')} className="text-left py-2 font-bold text-white">Contacto</button>
        </div>
      )}
    </header>
  );
};
