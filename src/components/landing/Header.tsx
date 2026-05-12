import { Cpu, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#marcas", label: "Marcas" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary shadow-glow">
            <Cpu className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-bold">
            Socca<span className="text-gradient">Tech</span>
          </span>
        </a>

        {/* Navegación Desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a 
              key={l.href} 
              href={l.href} 
              className="text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="hero" size="sm" asChild>
            <a href="#contacto">Consultar ahora</a>
          </Button>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Menú Móvil */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container flex flex-col gap-4 py-6">
            {links.map((l) => (
              <a 
                key={l.href} 
                href={l.href} 
                onClick={() => setOpen(false)} 
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contacto">Consultar ahora</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};
