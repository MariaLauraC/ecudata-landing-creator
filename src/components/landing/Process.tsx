import { MessageCircle, Package, Wrench, Send } from "lucide-react";

const steps = [
  { icon: MessageCircle, title: "Consultanos", desc: "Escribinos por WhatsApp con los datos del módulo y el síntoma." },
  { icon: Package, title: "Enviá el módulo", desc: "Coordinamos retiro o recibimos envíos desde todo el país." },
  { icon: Wrench, title: "Diagnóstico y reparación", desc: "Pruebas en banco y reparación con repuestos originales." },
  { icon: Send, title: "Devolución express", desc: "Te lo devolvemos listo para instalar, con garantía." },
];

export const Process = () => (
  <section id="proceso" className="py-24 md:py-32">
    <div className="container">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Cómo trabajamos</p>
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Un proceso simple y transparente</h2>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <div key={s.title} className="relative rounded-2xl border border-border bg-card p-6 transition-smooth hover:border-primary/50">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
              <s.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="mb-2 text-xs font-bold text-primary">PASO 0{i + 1}</div>
            <h3 className="mb-2 text-lg font-bold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
