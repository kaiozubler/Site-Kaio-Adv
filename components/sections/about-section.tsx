import { Reveal } from '@/components/reveal'
import { AboutPortrait } from '@/components/about-portrait'
import { advogado } from '@/lib/site'

export function AboutSection() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr] md:gap-16">
        <Reveal>
          <AboutPortrait />
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">Sobre o advogado</span>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-foreground md:text-5xl">Conhecimento jurídico aplicado à realidade da saúde.</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A atuação em Direito Médico, Hospitalar e Sanitário exige mais do que conhecimento jurídico: exige compreender a rotina, os riscos e as responsabilidades de quem trabalha na área da saúde.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              O trabalho é desenvolvido com foco em prevenção, estratégia e atuação técnica, buscando oferecer segurança para que profissionais e instituições possam exercer suas atividades com maior tranquilidade.
            </p>
            <div className="mt-8 border-l border-gold/60 pl-5">
              <p className="font-serif text-2xl italic text-foreground">“Cuidando de quem cuida.”</p>
              <p className="mt-2 text-xs tracking-[0.18em] text-silver uppercase">Direito Médico, Hospitalar e Sanitário</p>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              <span className="text-foreground">{advogado.nome}</span> · Advogado inscrito na {advogado.oab}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
