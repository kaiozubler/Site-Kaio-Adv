export type BlogPost = {
  title: string
  excerpt: string
  image: string
}

export const blogPosts: BlogPost[] = [
  {
    title: 'Defesa em processos éticos: o que os médicos precisam saber',
    excerpt:
      'Como se preparar e agir diante de uma representação ética perante os conselhos profissionais.',
    image: '/images/blog-defesa-etica.png',
  },
  {
    title: 'Prontuário eletrônico: riscos jurídicos e boas práticas',
    excerpt:
      'O prontuário como principal prova de defesa e os cuidados no ambiente digital.',
    image: '/images/blog-prontuario.png',
  },
  {
    title: 'Contratos entre médicos e hospitais: pontos de atenção',
    excerpt:
      'Cláusulas essenciais e armadilhas comuns nas relações contratuais da área da saúde.',
    image: '/images/blog-contratos.png',
  },
  {
    title: 'CFM, CRM e CRO: como funciona a representação em processos disciplinares',
    excerpt:
      'Entenda o rito dos processos disciplinares e o papel da defesa técnica em cada etapa.',
    image: '/images/blog-conselhos.png',
  },
]
