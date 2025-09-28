# CLAUDE.md - Instruções para IA

## Visão Geral do Projeto

Este é o site profissional de Julio Sousa, focado em serviços de CTO as a Service. É uma landing page minimalista em preto e branco que destaca expertise em Tecnologia, Produto, Marketing e Inteligência Artificial.

## Estrutura do Projeto

```
juliosousa.tec/
├── app/                    # App Router do Next.js
│   ├── page.tsx           # Página principal (única página)
│   ├── layout.tsx         # Layout root
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── ui/               # Componentes UI do shadcn
│   ├── NeuralNetwork.tsx # Animação de rede neural
│   ├── FloatingOrbs.tsx  # Animação de orbes flutuantes
│   └── WhatsAppButton.tsx # Botão flutuante do WhatsApp
├── lib/                   # Utilitários
├── public/               # Assets públicos
│   └── images/          # Imagens
└── images/              # Imagens de desenvolvimento
```

## Stack Tecnológico

- **Framework**: Next.js 14 com App Router
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Componentes UI**: shadcn/ui (customizados)
- **Animações**: Framer Motion
- **Deploy**: Vercel (recomendado)

## Diretrizes de Design

### Paleta de Cores
- **APENAS** preto (#000000) e branco (#FFFFFF)
- Tons de cinza apenas para bordas e elementos sutis
- **NÃO** usar cores (sem verde do WhatsApp, sem azul do LinkedIn, etc.)

### Tipografia
- Font-family: Inter (importada do Google Fonts)
- Títulos: font-light com variações de tamanho
- Destaques: font-normal (peso 400)
- Texto: font-light com opacity para criar hierarquia

### Estilo Visual
- **Minimalista**: Espaçamentos generosos, elementos limpos
- **Profissional**: Sem elementos infantis ou casuais
- **Elegante**: Animações sutis, transições suaves
- **Monocromático**: Preto e branco estrito

## Seções da Página

1. **Hero**: Proposta de valor principal com animações de fundo
2. **Conceito**: Quando contratar CTO as a Service
3. **Público-Alvo**: Startups, PMEs, Transformação Digital
4. **Benefícios**: Disponibilidade imediata, expertise, economia
5. **Escopo**: Áreas de atuação detalhadas
6. **Resultados**: Números sem mencionar empresas específicas
7. **Modelos**: Part Time, Interino, Advisor
8. **Perfil**: Julio Sousa com foto e qualificações
9. **CTA**: Chamada para ação final
10. **Footer**: Informações de contato

## Informações de Contato

- **Email**: juliosousajr@gmail.com
- **WhatsApp**: +55 62 99313-9371
- **LinkedIn**: https://www.linkedin.com/in/juliosousajr/

## Regras de Desenvolvimento

### Commits
- Usar o comando `/commit` para padronização
- **NUNCA** adicionar "Co-Authored-By: Claude" nos commits
- Seguir conventional commits (feat, fix, chore, etc.)

### Copy e Conteúdo
- Foco em redução de custos (até 70%) com IA
- Enfatizar expertise multidisciplinar
- Não mencionar nomes de empresas específicas
- Usar linguagem profissional e direta

### Componentes e Animações
- Animações devem ser sutis e profissionais
- Performance é prioridade (lazy loading, otimização)
- Responsividade completa (mobile-first)

### Manutenção
- Manter design system consistente
- Não adicionar novas cores
- Preservar minimalismo
- Testar em múltiplos dispositivos

## Comandos Úteis

```bash
npm run dev      # Desenvolvimento local
npm run build    # Build de produção
npm run start    # Servir build de produção
npm run lint     # Verificar código
```

## Deploy

O projeto está configurado para deploy automático na Vercel:
1. Push para `main` triggera deploy de produção
2. Pull requests criam preview deployments

## Otimizações Implementadas

- Imagens otimizadas com Next.js Image
- Lazy loading de componentes pesados
- Animações com GPU acceleration
- Font loading otimizado
- Meta tags para SEO

## Observações Importantes

1. **Não adicionar cores**: O design é estritamente preto e branco
2. **Manter simplicidade**: Não adicionar features desnecessárias
3. **Performance primeiro**: Otimizar antes de adicionar
4. **Copy focada**: IA e redução de custos são os principais argumentos
5. **Sem logos de empresas**: Apenas descrições genéricas nos resultados

## Melhorias Futuras Sugeridas

- [ ] Adicionar blog com artigos sobre tecnologia e IA
- [ ] Implementar sistema de agendamento integrado
- [ ] Criar seção de cases detalhados (sem nomes de empresas)
- [ ] Adicionar versão em inglês
- [ ] Implementar analytics
- [ ] Otimizar para Core Web Vitals perfeito
- [ ] Adicionar testimonials genéricos

## Contexto de Negócio

Julio Sousa é um profissional com 15+ anos de experiência que oferece serviços de CTO as a Service, combinando conhecimentos de:
- Tecnologia e Arquitetura
- Produto e UX
- Marketing e Growth
- Inteligência Artificial

O foco principal é ajudar empresas a reduzir custos operacionais através da implementação estratégica de tecnologia e IA, com modelos flexíveis de contratação.