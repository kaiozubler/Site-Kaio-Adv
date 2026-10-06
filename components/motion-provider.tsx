'use client'

import { MotionConfig } from 'motion/react'
import type { ReactNode } from 'react'

// Respeita a preferência do sistema por menos movimento
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
