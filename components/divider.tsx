'use client'

import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

export function Divider({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn('divider-gradient', className)}
      role="presentation"
      aria-hidden="true"
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true, amount: 1 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    />
  )
}
