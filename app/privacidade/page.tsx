import type { Metadata } from 'next'
import { advogado } from '@/lib/site'

export const metadata: Metadata = {
  title: `Política de privacidade | ${advogado.nome}`,
}

const secoes = [
  {
    titulo: 'Quais dados são coletados',
    texto:
      'Pelo formulário de contato são coletados nome, telefone, e-mail e a mensagem que você escrever. O site também registra métricas anônimas de acesso (páginas visitadas, tipo de dispositivo), sem identificar o visitante.',
  },
  {
    titulo: 'Para que os dados são usados',
    texto:
      'Os dados do formulário são usados exclusivamente para responder ao seu contato. Não são vendidos, compartilhados para fins comerciais nem usados para envio de publicidade.',
  },
  {
    titulo: 'Sigilo profissional',
    texto:
      'As informações enviadas são tratadas com o sigilo profissional previsto no Estatuto da Advocacia (Lei nº 8.906/1994) e no Código de Ética e Disciplina da OAB.',
  },
  {
    titulo: 'Base legal e armazenamento',
    texto:
      'O tratamento se baseia no seu consentimento ao enviar o formulário e nos procedimentos preliminares a uma eventual contratação (art. 7º, I e V, da LGPD). A mensagem é entregue por e-mail por meio de um provedor de envio e mantida apenas pelo tempo necessário ao atendimento ou ao cumprimento de obrigações legais.',
  },
  {
    titulo: 'Seus direitos',
    texto:
      'Você pode pedir a confirmação, correção ou exclusão dos seus dados a qualquer momento, pelos canais de contato informados neste site (art. 18 da LGPD).',
  },
]

export default function PrivacidadePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
      <a href="/" className="text-sm text-gold underline-offset-4 hover:underline">
        ← Voltar ao site
      </a>
      <h1 className="mt-8 font-serif text-4xl text-foreground md:text-5xl">Política de privacidade</h1>
      <p className="mt-4 text-sm text-muted-foreground">
        Responsável pelo tratamento: {advogado.nome}, advogado inscrito na {advogado.oab}.
      </p>
      <div className="mt-12 flex flex-col gap-10">
        {secoes.map((secao) => (
          <section key={secao.titulo}>
            <h2 className="font-serif text-2xl text-foreground">{secao.titulo}</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">{secao.texto}</p>
          </section>
        ))}
      </div>
    </main>
  )
}
