import { Cpu } from "lucide-react";

export const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-10">
    <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-gradient-primary">
          <Cpu className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="text-sm font-semibold">EcuTech</span>
      </div>
      <p className="text-xs text-muted-foreground">
        © {new Date().getFullYear()} EcuTech · Electrónica Automotriz · Avellaneda, Buenos Aires
      </p>
    </div>
  </footer>
);
