import { Menu, X } from "lucide-react";
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
        {/* Logo con ruta directa para evitar errores de compilación */}
        <div 
          className="flex items-center cursor-pointer" 
          onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
        >
          <img 
            src="/src/assets/logo-soccatech.jpeg" 
            alt="SoccaTech" 
            className="h-10 w-auto object-contain md:h-12"
            onError={(e) => {
              // Si la imagen falla, muestra el texto para que no quede en blanco
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.innerHTML = '<span class="text-lg font-bold">SoccaTech</span>';
            }}
          />
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollToSection('servicios')} className="text-sm font-medium hover:text-primary transition-colors">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-sm font-medium hover:text-primary transition-colors">Marcas</button>
          <button onClick={() => scrollToSection('proceso')} className="text-sm font-medium hover:text-primary transition-colors">Proceso</button>
          <a 
            href="https://soccatech-ecu.blogspot.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Blog
          </a>
          <button onClick={() => scrollToSection('contacto')} className="text-sm font-medium hover:text-primary transition-colors">Contacto</button>
        </nav>

        <div className="hidden md:block">
          <Button onClick={() => scrollToSection('contacto')}>Consulta ahora</Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="p-4 bg-background border-b md:hidden flex flex-col gap-4">
          <button onClick={() => scrollToSection('servicios')} className="text-left py-2 border-b border-border/40">Servicios</button>
          <button onClick={() => scrollToSection('marcas')} className="text-left py-2 border-b border-border/40">Marcas</button>
          <a href="https://soccatech-ecu.blogspot.com/" target="_blank" rel="noopener noreferrer" className="text-left py-2 border-b border-border/40 font-medium text-primary">Blog Especializado</a>
          <button onClick={() => scrollToSection('contacto')} className="text-left py-2 font-bold">Contacto</button>
        </div>
      )}
    </header>
  );
};
