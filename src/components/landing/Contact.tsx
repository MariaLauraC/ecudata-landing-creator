import { Button } from "@/components/ui/button";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

export const Contact = () => (
  <section id="contacto" className="relative overflow-hidden py-24 md:py-32">
    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
    <div className="container relative">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-card/80 p-8 shadow-card backdrop-blur md:p-14">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">Contacto</p>
            <h2 className="text-3xl font-bold sm:text-4xl">¿Listo para reparar tu módulo?</h2>
            <p className="mt-4 text-muted-foreground">
              Estamos en WhatsApp todos los días. Respuesta inmediata, presupuesto sin cargo.
            </p>

            <div className="mt-8 space-y-4">
              <a href="https://wa.me/5493512153577" className="flex items-center gap-3 text-sm transition-smooth hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><MessageCircle className="h-5 w-5 text-primary" /></span>
                +54 9 351 215 3577
              </a>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Phone className="h-5 w-5 text-primary" /></span>
                351 215 3577
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><Mail className="h-5 w-5 text-primary" /></span>
                contacto@soccatech.com.ar
              </div>
              <div className="flex items-center gap-3 text-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary"><MapPin className="h-5 w-5 text-primary" /></span>
                Córdoba, Chaco
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 to-transparent p-6 md:p-8">
            <h3 className="text-2xl font-bold">Escribinos por WhatsApp</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              La forma más rápida de obtener un presupuesto. Mandanos foto del módulo y los datos del vehículo.
            </p>
            <Button variant="hero" size="lg" className="mt-6 w-full" asChild>
              <a href="https://wa.me/5493512153577" target="_blank" rel="noreferrer">
                <MessageCircle className="mr-1 h-5 w-5" />
                Iniciar chat
              </a>
            </Button>
            <p className="mt-4 text-center text-xs text-muted-foreground">Respondemos en minutos · Lun a Sáb</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
