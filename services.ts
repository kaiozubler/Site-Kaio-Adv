import {
  Gavel,
  ShieldCheck,
  Stethoscope,
  FileText,
  ClipboardCheck,
  HelpCircle,
  type LucideIcon,
} from 'lucide-react'

export type Service = {
  title: string
  description: string
  icon: LucideIcon
}

export const services: Service[] = [
  {
    title: 'Defesa Administrativa e Judicial',
    description:
      'Atuação estratégica em processos administrativos e ações judiciais que envolvem médicos, clínicas e hospitais.',
    icon: Gavel,
  },
  {
    title: 'Consultoria Preventiva',
    description:
      'Análise de riscos e orientação jurídica contínua para evitar litígios e proteger a atividade em saúde.',
    icon: ShieldCheck,
  },
  {
    title: 'Representação em Conselhos',
    description:
      'Defesa em processos éticos e disciplinares perante o CFM, CRM, CRO e demais conselhos de saúde.',
    icon: Stethoscope,
  },
  {
    title: 'Contratos e Planejamento Jurídico',
    description:
      'Elaboração e revisão de contratos entre profissionais, clínicas, hospitais e operadoras de saúde.',
    icon: FileText,
  },
  {
    title: 'Auditoria e Compliance em Saúde',
    description:
      'Implantação de rotinas de conformidade, auditoria jurídica e adequação regulatória para instituições de saúde.',
    icon: ClipboardCheck,
  },
  {
    title: 'Atendimento a Dúvidas Jurídicas',
    description:
      'Esclarecimento de questões pontuais do dia a dia da prática médica e da gestão hospitalar.',
    icon: HelpCircle,
  },
]
