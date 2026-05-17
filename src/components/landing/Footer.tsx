export const Footer = () => (
  <footer className="border-t border-border bg-card/30 py-12">
    <div className="container flex flex-col items-center justify-center gap-6">
      {/* Nombre de la marca con colores divididos */}
      <div className="flex items-center gap-2">
        <span className="text-base font-bold tracking-tight">
          <span className="text-[#F97316]">Socca</span>
          <span className="text-white">Tech</span>
        </span>
      </div>

      {/* Redes Sociales Agregadas */}
      <div className="flex items-center gap-6 my-2">
        <a 
          href="https://web.facebook.com/SoccaTech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-[#F97316] transition-colors font-medium"
        >
          Facebook
        </a>
        <a 
          href="https://www.instagram.com/soccatech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-sm text-muted-foreground hover:text-[#F97316] transition-colors font-medium"
        >
          Instagram
        </a>
      </div>
      
      <div className="flex flex-col items-center gap-2 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SoccaTech · Electrónica Automotriz · Argentina
        </p>
        
        {/* Tu firma destacada en celeste */}
        <p className="text-[11px] text-muted-foreground tracking-wide mt-2">
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
