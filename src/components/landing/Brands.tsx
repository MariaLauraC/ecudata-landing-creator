import React from "react";

const brands = [
  "Audi", "BMW", "Chevrolet", "Citroën", "Fiat", "Ford", "Honda", "Hyundai", "Jeep", 
  "Kia", "Mercedes", "Nissan", "Peugeot", "Renault", "Suzuki", "Toyota", "VW", "Alfa Romeo"
];

export const Brands = () => {
  return (
    <section id="marcas" className="border-y border-border bg-card/50 py-20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#f97316]">Compatibilidad total</p>
          <h2 className="text-4xl font-bold sm:text-5xl">Trabajamos con todas las marcas</h2>
          <p className="mt-4 text-muted-foreground">Reset de airbag y reparación de módulos disponibles para más de 25 marcas.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
          {brands.map((b) => (
            <div 
              key={b} 
              className="flex h-12 items-center justify-center rounded-xl bg-[#f97316] text-black font-bold text-[10px] uppercase tracking-wider shadow-lg transform transition-transform hover:scale-105"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
