const brands = [
  "Audi", "BMW", "Chevrolet", "Citroën", "Fiat", "Ford", "Honda", "Hyundai",
  "Jeep", "Kia", "Mercedes", "Nissan", "Peugeot", "Renault", "Suzuki", "Toyota", "VW", "Alfa Romeo",
];

export const Brands = () => (
  <section id="marcas" className="border-y border-border bg-card/30 py-20">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Compatibilidad total</p>
        <h2 className="text-3xl font-bold sm:text-4xl">Trabajamos con todas las marcas</h2>
        <p className="mt-4 text-muted-foreground">Reset de airbag y reparación de módulos disponibles para más de 25 marcas.</p>
      </div>

      <div className="mt-12 grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9">
        {brands.map((b) => (
          <div
            key={b}
            className="flex h-16 items-center justify-center rounded-xl border border-border bg-background text-sm font-semibold text-muted-foreground transition-smooth hover:border-primary/50 hover:text-foreground"
          >
            {b}
          </div>
        ))}
      </div>
    </div>
  </section>
);
