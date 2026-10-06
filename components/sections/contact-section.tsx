import Image from 'next/image'
import { Mail, MapPin, Phone } from 'lucide-react'

import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/sections/contact-form'
import { advogado } from '@/lib/site'

const contactDetails = [
  {
    icon: MapPin,
    label: 'Base de atuação',
    value: 'Itajaí/SC — atuação em todo o Brasil',
  },
  {
    icon: Phone,
    label: 'Telefone',
    value: '(47) 0000-0000',
    placeholder: true,
  },
  {
    icon: Mail,
    label: 'E-mail',
    value: 'contato@kaiozubler.adv.br',
    placeholder: true,
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid gap-12 md:grid-cols-2 md:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Contato"
              title="Conte o que está acontecendo"
              description="Atendimento em todo o Brasil, com foco no Vale do Itajaí/SC. Conte brevemente o que está acontecendo e retornaremos o contato."
            />
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-card/30 p-4">
              <Image
                src="/images/kaio-zubler-close.jpg"
                alt=""
                width={64}
                height={64}
                className="size-16 rounded-full border border-gold/40 object-cover"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg text-foreground">{advogado.nome}</span>
                <span className="text-xs tracking-wide text-gold">{advogado.oab}</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="flex flex-col gap-5">
              {contactDetails.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border text-silver">
                      <Icon className="size-4" />
                    </span>
                    <div className="flex flex-col">
                      <span className="text-xs tracking-wide text-muted-foreground uppercase">
                        {item.label}
                      </span>
                      <span className="text-foreground">
                        {item.value}
                        {item.placeholder ? (
                          <span className="ml-2 text-xs text-gold/70">(placeholder)</span>
                        ) : null}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
