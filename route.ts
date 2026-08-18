import { NextResponse } from 'next/server'
import { Resend } from 'resend'

import { contactSchema } from '@/lib/contact-schema'

const DESTINATION = 'kaiogalane30@gmail.com'

export async function POST(request: Request) {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Requisição inválida.' }, { status: 400 })
  }

  const parsed = contactSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Dados inválidos. Verifique os campos e tente novamente.' },
      { status: 422 },
    )
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.log('[v0] RESEND_API_KEY ausente — não foi possível enviar o e-mail.')
    return NextResponse.json(
      { error: 'Serviço de e-mail não configurado. Tente novamente mais tarde.' },
      { status: 503 },
    )
  }

  const { nome, telefone, email, observacao } = parsed.data
  const resend = new Resend(apiKey)

  try {
    const { error } = await resend.emails.send({
      // Ajuste "from" para um domínio verificado no Resend antes de publicar.
      from: 'Site Kaio Zubler <onboarding@resend.dev>',
      to: [DESTINATION],
      replyTo: email,
      subject: `Novo contato pelo site — ${nome}`,
      text: [
        'Novo contato recebido pelo site.',
        '',
        `Nome: ${nome}`,
        `Telefone: ${telefone}`,
        `E-mail: ${email}`,
        '',
        'Observação:',
        observacao,
      ].join('\n'),
    })

    if (error) {
      console.log('[v0] Erro ao enviar e-mail:', error)
      return NextResponse.json(
        { error: 'Não foi possível enviar sua mensagem. Tente novamente.' },
        { status: 502 },
      )
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.log('[v0] Falha inesperada ao enviar e-mail:', err)
    return NextResponse.json(
      { error: 'Erro interno ao enviar a mensagem.' },
      { status: 500 },
    )
  }
}
