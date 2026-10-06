'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'motion/react'

export function HeroPhoto({ alt }: { alt: string }) {
  const { scrollY } = useScroll()
  // Parallax leve: a foto desce mais devagar que a página
  const y = useTransform(scrollY, [0, 800], [0, 90])

  return (
    <motion.div
      className="absolute inset-y-0 right-0 h-full"
      style={{ y }}
      initial={{ opacity: 0, scale: 1.04 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src="/images/kaio-zubler.png"
        alt={alt}
        width={1023}
        height={1537}
        priority
        className="h-full w-auto object-contain object-right"
      />
    </motion.div>
  )
}
