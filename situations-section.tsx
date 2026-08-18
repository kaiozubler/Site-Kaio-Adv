import { AlertCircle, FileSignature, Scale, ShieldAlert, Building2, ClipboardList } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/ui/section-heading'

const situations = [
  { title: 'Recebi uma notificação ou processo no CRM/CFM', description: 'Análise do caso e definição da estratégia de defesa.', icon: AlertCircle },
  { title: 'Estou enfrentando uma ação judicial', description: 'Orientação e atuação em demandas relacionadas à responsabilidade profissional e à atividade em saúde.', icon: Scale },
  { title: 'Quero abrir ou estruturar uma clínica', description: 'Prevenção de riscos e organização jurídica da atividade desde o início.', icon: Building2 },
  { title: 'Preciso revisar contratos', description: 'Análise e elaboração de contratos para relações entre profissionais, clínicas, hospitais e parceiros.', icon: FileSignature },
  { title: 'Minha instituição passou por fiscalização', description: 'Orientação diante de exigências, notificações e procedimentos administrativos.', icon: ShieldAlert },
  { title: 'Tenho uma dúvida jurídica sobre a prática médica', description: 'Resposta objetiva para decisões do cotidiano que envolvem risco jurídico.', icon: ClipboardList },
]

export function SituationsSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Quando procurar orientação"
          title="Seu problema pode começar antes de um processo"
          description="A orientação jurídica pode atuar tanto na prevenção quanto na resposta a situações que já exigem uma decisão."
        />
      </Reveal>
      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {situations.map((item, index) => {
          const Icon = item.icon
          return (
            <Reveal key={item.title} delay={index * 0.04}>
              <article className="group flex h-full gap-4 rounded-xl border border-border bg-background p-6 transition-colors duration-300 hover:border-gold/40 hover:bg-card/50">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-silver group-hover:border-gold/40 group-hover:text-gold">
                  <Icon className="size-4" />
                </span>
                <div>
                  <h3 className="font-serif text-lg leading-snug text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </article>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
