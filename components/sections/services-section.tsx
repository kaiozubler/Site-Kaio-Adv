import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/reveal'
import { services } from '@/lib/data/services'

export function ServicesSection() {
  return (
    <section id="servicos" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Áreas de Atuação"
          title="Como posso ajudar"
          description="Atuação preventiva, consultiva e contenciosa para profissionais e instituições da área da saúde."
        />
      </Reveal>

      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Reveal key={service.title} delay={index * 0.05}>
              <article className="group flex h-full flex-col gap-4 bg-background p-8 transition-colors duration-300 hover:bg-card">
                <span className="flex size-11 items-center justify-center rounded-lg border border-border text-silver transition-colors duration-300 group-hover:border-gold/60 group-hover:text-gold">
                  <Icon className="size-5" />
                </span>
                <h3 className="font-serif text-xl leading-snug text-foreground">
                  {service.title}
                </h3>
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
