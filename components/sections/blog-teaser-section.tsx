'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { SectionHeading } from '@/components/ui/section-heading'
import { Reveal } from '@/components/reveal'
import { blogPosts } from '@/lib/data/blog-posts'

export function BlogTeaserSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    dragFree: true,
  })
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <section id="blog" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            align="left"
            eyebrow="Conhecimento"
            title="Blog (em breve)"
            description="Conteúdos sobre direito médico e hospitalar para orientar profissionais e instituições de saúde."
          />
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              aria-label="Anterior"
              disabled={!canPrev}
              onClick={() => emblaApi?.scrollPrev()}
            >
              <ArrowLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              aria-label="Próximo"
              disabled={!canNext}
              onClick={() => emblaApi?.scrollNext()}
            >
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.title}
                className="min-w-0 shrink-0 basis-[85%] sm:basis-[48%] lg:basis-[32%]"
              >
                <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card/40">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={post.image || '/placeholder.svg'}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 32vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full border border-gold/50 bg-background/80 px-3 py-1 text-xs tracking-wide text-gold backdrop-blur-sm">
                      Em breve
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-3 p-6">
                    <h3 className="font-serif text-lg leading-snug text-balance text-foreground">
                      {post.title}
                    </h3>
                    <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
