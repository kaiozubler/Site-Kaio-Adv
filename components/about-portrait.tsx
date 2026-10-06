'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

// Retrato em P&B que ganha cor ao entrar na tela
export function AboutPortrait() {
  return (
    <motion.div
      className="group relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-card"
      initial="pb"
      whileInView="cor"
      viewport={{ once: true, amount: 0.5 }}
    >
      <Image
        src="/images/kaio-zubler-pb.jpg"
        alt=""
        fill
        sizes="(max-width: 768px) 90vw, 384px"
        className="object-cover"
      />
      <motion.div
        className="absolute inset-0"
        // O gatilho fica no contêiner: um elemento todo recortado não é detectado na tela
        variants={{ pb: { clipPath: 'inset(100% 0 0 0)' }, cor: { clipPath: 'inset(0% 0 0 0)' } }}
        transition={{ duration: 1.6, delay: 0.3, ease: [0.65, 0, 0.35, 1] }}
      >
        <Image
          src="/images/kaio-zubler-retrato.jpg"
          alt="Kaio Zubler, advogado"
          fill
          sizes="(max-width: 768px) 90vw, 384px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-gold/0 ring-inset transition-[box-shadow] duration-500 group-hover:ring-gold/40"
      />
    </motion.div>
  )
}
