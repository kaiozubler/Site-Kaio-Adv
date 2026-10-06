'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Loader2, Send } from 'lucide-react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { contactSchema, type ContactInput } from '@/lib/contact-schema'

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { nome: '', telefone: '', email: '', observacao: '' },
  })

  async function onSubmit(values: ContactInput) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        throw new Error(data?.error ?? 'Não foi possível enviar sua mensagem.')
      }

      toast.success('Mensagem enviada. O contato será retornado assim que possível.')
      reset()
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-xl border border-border bg-card/40 p-6 sm:p-8"
    >
      <div className="flex flex-col gap-2">
        <Label htmlFor="nome">Nome</Label>
        <Input
          id="nome"
          placeholder="Seu nome completo"
          autoComplete="name"
          aria-invalid={!!errors.nome}
          {...register('nome')}
        />
        {errors.nome ? (
          <p className="text-xs text-destructive">{errors.nome.message}</p>
        ) : null}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="telefone">Telefone</Label>
          <Input
            id="telefone"
            type="tel"
            placeholder="(47) 90000-0000"
            autoComplete="tel"
            aria-invalid={!!errors.telefone}
            {...register('telefone')}
          />
          {errors.telefone ? (
            <p className="text-xs text-destructive">{errors.telefone.message}</p>
          ) : null}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="voce@email.com"
            autoComplete="email"
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email ? (
            <p className="text-xs text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="observacao">Observação</Label>
        <Textarea
          id="observacao"
          placeholder="Descreva sua dúvida, instrução ou objetivo do atendimento."
          aria-invalid={!!errors.observacao}
          {...register('observacao')}
        />
        {errors.observacao ? (
          <p className="text-xs text-destructive">{errors.observacao.message}</p>
        ) : null}
      </div>

      <Button
        type="submit"
        variant="gold"
        disabled={isSubmitting}
        className="mt-1 h-11 w-full px-6"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            <Send className="size-4" />
            Enviar mensagem
          </>
        )}
      </Button>

      <p className="text-pretty text-xs leading-relaxed text-muted-foreground">
        Seus dados são usados apenas para retornar este contato e tratados com sigilo profissional,
        conforme a LGPD. Veja a{' '}
        <a href="/privacidade" className="text-gold underline-offset-4 hover:underline">
          política de privacidade
        </a>
        .
      </p>
    </form>
  )
}
