import { Building2, HeartPulse, Stethoscope, UsersRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const audiences = [
  { title: 'Médicos', description: 'Proteção jurídica para a prática profissional e para as decisões do dia a dia.', icon: Stethoscope },
  { title: 'Clínicas', description: 'Estruturação, prevenção de riscos e segurança nas relações com pacientes e profissionais.', icon: HeartPulse },
  { title: 'Hospitais', description: 'Assessoria jurídica para operações, relações assistenciais, contratos e gestão de riscos.', icon: Building2 },
  { title: 'Profissionais da saúde', description: 'Orientação para situações jurídicas ligadas ao exercício e à gestão da atividade em saúde.', icon: UsersRound },
]

export function AudienceSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <Reveal>
        <SectionHeading
          eyebrow="Quem eu assessoro"
          title="Direito para quem dedica o trabalho a cuidar de outras pessoas"
          description="Atuação voltada a profissionais e instituições que precisam tomar decisões na área da saúde com segurança jurídica."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audiences.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className="group h-full rounded-xl border border-border bg-card/30 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-card/60">
                <Icon className="mb-5 size-6 text-gold transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110" />
                <h3 className="font-serif text-xl text-foreground">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
