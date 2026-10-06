import { Eye, Scale, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const pillars = [
  { title: 'Prevenção', description: 'Identificar riscos antes que eles se transformem em conflitos, processos ou prejuízos.', icon: ShieldCheck },
  { title: 'Conhecimento técnico', description: 'Analisar a questão jurídica considerando as particularidades da atividade em saúde.', icon: Eye },
  { title: 'Estratégia', description: 'Construir a resposta adequada para cada situação, com atuação objetiva e responsável.', icon: Scale },
]

export function PositioningSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Por que Direito Médico?"
          title="A saúde possui uma complexidade jurídica própria"
          description="Decisões clínicas, relações profissionais, regulação e responsabilidade civil se cruzam todos os dias. A atuação jurídica precisa compreender esse contexto."
        />
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.06}>
              <div className="group relative border-t border-gold/20 pt-6"><span aria-hidden className="absolute -top-px left-0 h-px w-12 bg-gold transition-all duration-700 group-hover:w-full" />
                <Icon className="size-5 text-gold transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110" />
                <h3 className="mt-5 font-serif text-2xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
