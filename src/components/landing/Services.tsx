import { ArrowUpRight } from "lucide-react";
import airbag from "@/assets/airbag.jpg";
import repair from "@/assets/repair.jpg";
import software from "@/assets/software.jpg";

const services = [
  {
    title: "Reparaciones",
    desc: "Diagnóstico y reparación de ECU, BSI, BSM, UCH. Pruebas en banco de sistemas Nafta y Diesel.",
    img: repair,
    tags: ["ECU", "BSI", "Banco de pruebas"],
  },
  {
    title: "Airbag Crash Reset",
    desc: "Reseteo de módulos de airbag tras un crash. Trabajamos con todas las marcas y modelos.",
    img: airbag,
    tags: ["Crash data", "Multimarca", "Reset"],
  },
  {
    title: "Software & Tuning",
    desc: "Reprogramación de ECU, Immo-off, DPF-off, EGR-off, DTC-off y chip-tuning profesional.",
    img: software,
    tags: ["Reprogramación", "Chip-tuning", "Immo-off"],
  },
];

export const Services = () => (
  <section id="servicios" className="py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Nuestros servicios</p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
          Soluciones completas en <span className="text-gradient">electrónica automotriz</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Servicios de calidad tanto para talleres mecánicos como para particulares.
        </p>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-smooth group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold">{s.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-primary transition-smooth group-hover:rotate-45" />
              </div>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full border border-border bg-secondary px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);
