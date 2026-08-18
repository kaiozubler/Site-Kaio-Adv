import { Divider } from '@/components/divider'

const quickLinks = [
  { label: 'Início', href: '#topo' },
  { label: 'Atuação', href: '#servicos' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
  { label: 'Blog', href: '#blog' },
]

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="mx-auto max-w-6xl px-6 pt-4 pb-12">
      <Divider className="mb-12" />

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col gap-3">
          <span className="font-serif text-2xl text-foreground">Kaio Zubler</span>
          <p className="max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
            Direito Médico, Hospitalar e Sanitário.
            Cuidando de quem cuida.
          </p>
          <span className="text-xs tracking-wide text-gold/80">
            OAB/SC nº 000.000 (placeholder)
          </span>
        </div>

        <nav aria-label="Links rápidos" className="flex flex-col gap-3">
          <span className="text-xs tracking-[0.2em] text-silver uppercase">
            Navegação
          </span>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-col gap-3">
          <span className="text-xs tracking-[0.2em] text-silver uppercase">
            Contato
          </span>
          <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
            <li>Itajaí/SC — atuação nacional</li>
            <li>
              (47) 0000-0000{' '}
              <span className="text-xs text-gold/70">(placeholder)</span>
            </li>
            <li>
              contato@kaiozubler.adv.br{' '}
              <span className="text-xs text-gold/70">(placeholder)</span>
            </li>
          </ul>
        </div>
      </div>

      <p className="mt-12 text-xs text-muted-foreground">
        © {year} Kaio Zubler. Todos os direitos reservados.
      </p>
    </footer>
  )
}
