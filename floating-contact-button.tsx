'use client'

import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'

export function FloatingContactButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToContact() {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <button
      type="button"
      onClick={scrollToContact}
      aria-label="Ir para o formulário de contato"
      data-visible={visible}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full border border-gold/60 bg-card text-gold shadow-lg shadow-black/40 transition-all duration-300 hover:bg-gold hover:text-gold-foreground data-[visible=false]:pointer-events-none data-[visible=false]:translate-y-4 data-[visible=false]:opacity-0"
    >
      <MessageCircle className="size-6" />
    </button>
  )
}
