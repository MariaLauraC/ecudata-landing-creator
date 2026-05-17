import React from 'react';

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

      {/* Redes Sociales con Logos Naranjas */}
      <div className="flex items-center gap-8 my-3">
        {/* Logo Facebook */}
        <a 
          href="https://web.facebook.com/SoccaTech" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Seguinos en Facebook"
          className="transition-transform hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>

        {/* Logo Instagram */}
        <a 
          href="https://www.instagram.com/soccatech" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Seguinos en Instagram"
          className="transition-transform hover:scale-110"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#F97316" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
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
