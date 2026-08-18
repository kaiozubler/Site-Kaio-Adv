import Image from 'next/image'
import { MapPin } from 'lucide-react'

import { buttonVariants } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
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
        <Image
          src="/images/kaio-zubler.png"
          alt="Dr. Kaio Zubler, advogado em direito médico e hospitalar"
          width={1046}
          height={1568}
          priority
          className="absolute inset-y-0 right-0 h-full w-auto object-contain object-right"
        />
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
        <div className="flex max-w-lg flex-col gap-6 [&_*]:[text-shadow:0_2px_28px_oklch(0_0_0/0.75)]">
          <Reveal>
            <span className="text-xs font-medium tracking-[0.25em] text-gold uppercase">
              Advocacia em Direito Médico e Hospitalar
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="font-serif text-5xl leading-[1.05] text-balance text-foreground drop-shadow-2xl sm:text-6xl lg:text-7xl">
              Kaio Zubler
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="font-serif text-xl text-silver italic">
              Direito Sanitário — Direito médico e hospitalar
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/50 bg-gold/5 px-4 py-1.5 text-xs tracking-wide text-gold backdrop-blur-sm">
              OAB/SC nº 000.000
              <span className="text-gold/60">(placeholder)</span>
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
                Fale com o advogado
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
