import { Cpu } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-10">
    <div className="container flex flex-col items-center justify-between gap-6 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary">
          <Cpu className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold">SoccaTech</span>
      </div>
      
      <div className="flex flex-col items-center md:items-end gap-1">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SoccaTech · Electrónica Automotriz · Argentina
        </p>
        <p className="text-[11px] text-muted-foreground">
          Diseño y Estrategia Digital por{" "}
          <a 
            href="https://www.marketingonlinecordoba.com.ar" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ color: '#00AEEF' }}
            className="font-bold hover:underline transition-all"
          >
            Marketing on Line Córdoba
          </a>
        </p>
      </div>
    </div>
  </footer>
);
