import { MapPin } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { JusticeScale } from '@/components/justice-scale'
import { HeroPhoto } from '@/components/hero-photo'
import { advogado } from '@/lib/site'
import { cn } from '@/lib/utils'

export function HeroSection() {
  return (
    <section className="relative min-h-[640px] overflow-hidden md:min-h-[760px] lg:min-h-[840px]">
      {/* Foto como capa — homem ancorado à direita, mantendo tamanho e posição */}
      <div className="absolute inset-0">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(140% 120% at 74% 40%, oklch(0.42 0 0) 0%, oklch(0.34 0 0) 30%, oklch(0.26 0 0) 55%, oklch(0.18 0 0) 100%)',
          }}
        />
        {/* Balança dourada decorativa — parcialmente encoberta pela foto */}
        <JusticeScale
          className="pointer-events-none absolute right-[33%] top-1/2 h-[300px] w-[242px] -translate-y-1/2 -rotate-[14deg] text-gold opacity-[0.22] md:right-[33%] md:h-[380px] md:w-[307px] lg:right-[33%] lg:h-[440px] lg:w-[355px]"
        />

        <HeroPhoto alt={`${advogado.nome}, advogado (${advogado.oab}), com atuação em direito médico e hospitalar`} />
        {/* Extensão do fundo do estúdio sobre a borda esquerda da foto */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, oklch(0.31 0 0) 0%, oklch(0.31 0 0 / 0.95) 34%, oklch(0.31 0 0 / 0.6) 50%, oklch(0.31 0 0 / 0.25) 62%, transparent 74%)',
          }}
        />
        {/* Escurecimento geral da capa */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-black/35"
        />
        {/* Fusão suave com a próxima seção */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background"
        />
      </div>

      {/* Texto — sobreposto ao fundo, flutuando em relevo */}
      <div className="relative mx-auto flex min-h-[640px] max-w-6xl items-start px-6 pt-16 pb-20 md:min-h-[760px] md:pt-24 lg:min-h-[840px] lg:pt-28">
        <div className="relative flex max-w-lg flex-col gap-6 [&_*]:[text-shadow:0_2px_28px_oklch(0_0_0/0.75)]">
          <Reveal>
            <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
              Advocacia em Direito Médico e Hospitalar
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif text-5xl leading-[1.05] text-balance text-foreground drop-shadow-2xl sm:text-6xl lg:text-7xl">
              {advogado.nome}
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-serif text-xl text-silver italic">
              Direito Sanitário — Direito médico e hospitalar
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="shine inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/5 px-4 py-1.5 text-xs tracking-wide text-gold backdrop-blur-sm">
              {advogado.oab}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-md text-pretty leading-relaxed text-foreground/85">
              Atuação nacional para médicos, clínicas e hospitais, com foco em prevenção,
              estratégia e segurança jurídica para quem atua na saúde.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="font-serif text-2xl text-foreground/90 italic">Cuidando de quem cuida.</p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contato"
                className={cn(buttonVariants({ variant: 'gold', size: 'lg' }), 'h-11 px-6 backdrop-blur-sm')}
              >
                Entrar em contato
              </a>
              <span className="inline-flex items-center gap-1.5 text-sm text-foreground/75">
                <MapPin className="size-4 text-silver" />
                Itajaí/SC — atuação nacional
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
