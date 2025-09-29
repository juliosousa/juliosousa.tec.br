"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Code2,
  LineChart,
  Rocket,
  Users,
  Target,
  Brain,
  Briefcase,
  Award,
  TrendingUp,
  Zap,
  Shield,
  Mail,
  Linkedin,
  Phone,
  ChevronRight,
  Clock,
  DollarSign,
  Sparkles,
  BarChart3,
  Bot,
  Layers
} from "lucide-react"
import NeuralNetwork from "@/components/NeuralNetwork"
import FloatingOrbs from "@/components/FloatingOrbs"
import WhatsAppButton from "@/components/WhatsAppButton"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WhatsAppButton />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <FloatingOrbs />
        <NeuralNetwork />

        <div className="relative container mx-auto px-4 py-24 z-10">
          <motion.div
            className="max-w-5xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-8 opacity-70">
                CTO AS A SERVICE
              </div>
            </motion.div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light leading-tight mb-6">
              Reduza até <span className="font-normal">70% dos custos</span> com tecnologia<br />
              otimizando processos com <span className="font-normal">Inteligência Artificial</span>
            </h1>

            <p className="text-lg sm:text-xl font-light opacity-80 mb-12 max-w-3xl mx-auto">
              A expertise de um Chief Technology Officer de maneira flexível e sob demanda.
              Transformo tecnologia, produto e marketing em vantagem competitiva para sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <motion.button
                className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Agendar Conversa
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                className="px-8 py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm uppercase tracking-wider"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Escopo de Atuação
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="text-3xl font-light mb-1">15+</div>
                <div className="text-xs opacity-60 uppercase tracking-wider">Anos Experiência</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-3xl font-light mb-1">500K+</div>
                <div className="text-xs opacity-60 uppercase tracking-wider">Usuários Impactados</div>
              </motion.div>
              <motion.div
                className="text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="text-3xl font-light mb-1">87%</div>
                <div className="text-xs opacity-60 uppercase tracking-wider">Redução de Custos</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* When You Need Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                O Conceito
              </div>
              <h2 className="text-4xl sm:text-5xl font-light mb-6">
                Quando você precisa de um<br />
                <span className="font-normal">CTO as a Service?</span>
              </h2>
            </div>

            <div className="space-y-6">
              <motion.div
                className="flex gap-6 items-start p-6 border border-gray-800 hover:border-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-light opacity-50">01</div>
                <div>
                  <h3 className="text-lg mb-2 font-normal">Roadmap Tecnológico Estratégico</h3>
                  <p className="font-light opacity-70">
                    Desenvolvimento de roadmap tecnológico alinhado com os objetivos de negócios,
                    integrando IA e automação para máxima eficiência.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6 items-start p-6 border border-gray-800 hover:border-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-light opacity-50">02</div>
                <div>
                  <h3 className="text-lg mb-2 font-normal">Arquitetura Desatualizada</h3>
                  <p className="font-light opacity-70">
                    Seu produto atual não escala ou a arquitetura técnica está impedindo
                    o crescimento e aumentando custos operacionais.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6 items-start p-6 border border-gray-800 hover:border-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-light opacity-50">03</div>
                <div>
                  <h3 className="text-lg mb-2 font-normal">Liderança Técnica Senior</h3>
                  <p className="font-light opacity-70">
                    Necessidade de um profissional experiente para dialogar com investidores,
                    avaliar fornecedores e liderar transformação digital com IA.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6 items-start p-6 border border-gray-800 hover:border-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-light opacity-50">04</div>
                <div>
                  <h3 className="text-lg mb-2 font-normal">Flexibilidade e Economia</h3>
                  <p className="font-light opacity-70">
                    Sua empresa não precisa de um CTO full-time, mas requer expertise
                    de alto nível pagando apenas pelo que necessita.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex gap-6 items-start p-6 border border-gray-800 hover:border-white transition-colors"
                whileHover={{ x: 10 }}
              >
                <div className="text-2xl font-light opacity-50">05</div>
                <div>
                  <h3 className="text-lg mb-2 font-normal">Integração de IA e Automação</h3>
                  <p className="font-light opacity-70">
                    Implementação de inteligência artificial para automatizar processos,
                    reduzir custos e aumentar a eficiência operacional.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-light mb-6">
                Quem precisa de um <span className="font-normal">CTO as a Service?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-gray-800">
              <motion.div
                className="bg-black p-12 hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Rocket className="h-10 w-10 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Startups
                </h3>
                <p className="font-light opacity-70">
                  Startups em estágios iniciais que precisam criar seu MVP ou
                  empresas em fase de pivot e escala do produto com inteligência artificial.
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12 hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Building2 className="h-10 w-10 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  PMEs
                </h3>
                <p className="font-light opacity-70">
                  Para governança, visão estratégica, aumento de produtividade com IA,
                  ganho de escala na operação e crescimento sustentável.
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12 hover:bg-gray-900 transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <Sparkles className="h-10 w-10 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Transformação Digital
                </h3>
                <p className="font-light opacity-70">
                  Empresas tradicionais buscando criar produtos digitais e
                  implementar IA para se tornarem mais competitivas e inovadoras.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                Benefícios
              </div>
              <h2 className="text-4xl sm:text-5xl font-light">
                Por que contratar um <span className="font-normal">CTO as a Service?</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
              >
                <Clock className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-normal">Disponibilidade Imediata</h3>
                <p className="font-light opacity-70">
                  Evite processos de recrutamento de 6-9 meses. Tenha um CTO experiente
                  liderando suas iniciativas em apenas uma semana.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
              >
                <Brain className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-normal">Expertise Multidisciplinar</h3>
                <p className="font-light opacity-70">
                  Combinação única de tecnologia, produto, marketing e IA.
                  Visão 360° para transformar seu negócio digitalmente.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
              >
                <DollarSign className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-normal">Eficiência de Custos</h3>
                <p className="font-light opacity-70">
                  Sem custos de contratação CLT, bônus ou benefícios.
                  Contrato simples e flexível, pagando apenas pelo que precisa.
                </p>
              </motion.div>

              <motion.div
                className="space-y-4"
                whileHover={{ scale: 1.02 }}
              >
                <Target className="h-8 w-8 mb-4" />
                <h3 className="text-2xl font-normal">Mentalidade de Founder</h3>
                <p className="font-light opacity-70">
                  Executivo com experiência real como empreendedor, familiarizado
                  com desafios de crescimento e cultura de startups.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                Escopo
              </div>
              <h2 className="text-4xl sm:text-5xl font-light">
                Escopo de Atuação do <span className="font-normal">CTO as a Service</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-gray-800">
              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <Bot className="h-8 w-8 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Startups & MVP com IA
                </h3>
                <p className="font-light opacity-70">
                  Desenvolvimento de protótipos inteligentes e produtos com IA integrada.
                  Atuação desde o dia zero até a formação e capacitação da equipe técnica.
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <Users className="h-8 w-8 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Gestão de Times
                </h3>
                <p className="font-light opacity-70">
                  Liderança de equipes técnicas, implementação de metodologias ágeis
                  e criação de cultura focada em resultados e inovação.
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <Layers className="h-8 w-8 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Estratégia & Inovação
                </h3>
                <p className="font-light opacity-70">
                  Arquitetura de soluções escaláveis, integração de IA, automação de processos
                  e transformação digital alinhada aos objetivos de negócio.
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <BarChart3 className="h-8 w-8 mb-6" />
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Board Member & Advisor
                </h3>
                <p className="font-light opacity-70">
                  Participação em conselhos, apoio em captação de recursos,
                  due diligence técnica e governança corporativa.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                Resultados
              </div>
              <h2 className="text-4xl sm:text-5xl font-light">
                Números que <span className="font-normal">Falam por Si</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-gray-800">
              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm opacity-60 mb-4 uppercase tracking-wider">EdTech Nacional</div>
                <div className="text-6xl font-light mb-4">2</div>
                <div className="text-lg mb-2">meses de payback</div>
                <p className="font-light opacity-70 text-sm">
                  Desenvolvimento de produto com IA para cálculo automatizado,
                  gerando retorno do investimento em tempo recorde
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm opacity-60 mb-4 uppercase tracking-wider">Scale-up de Educação</div>
                <div className="text-6xl font-light mb-4">35%</div>
                <div className="text-lg mb-2">crescimento na receita</div>
                <p className="font-light opacity-70 text-sm">
                  Implementação de OKRs e gestão estratégica, aumentando
                  receita mesmo em modelo 100% remoto
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm opacity-60 mb-4 uppercase tracking-wider">Plataforma de Correção</div>
                <div className="text-6xl font-light mb-4">87%</div>
                <div className="text-lg mb-2">redução de erros</div>
                <p className="font-light opacity-70 text-sm">
                  Projeto de IA para otimização de qualidade, reduzindo
                  drasticamente taxa de retrabalho
                </p>
              </motion.div>

              <motion.div
                className="bg-black p-12"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-sm opacity-60 mb-4 uppercase tracking-wider">Startup EdTech</div>
                <div className="text-6xl font-light mb-4">500K</div>
                <div className="text-lg mb-2">usuários impactados</div>
                <p className="font-light opacity-70 text-sm">
                  Plataforma escalável que atingiu meio milhão de usuários
                  e foi adquirida após atingir 1M+ de transações
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Models Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                Contratação
              </div>
              <h2 className="text-4xl sm:text-5xl font-light">
                Modelos Flexíveis de <span className="font-normal">Contratação</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                className="border border-gray-800 p-8 hover:border-white transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Part Time
                </h3>
                <p className="font-light opacity-70 mb-6">
                  Contratação por horas semanais com envolvimento profundo
                  em estratégia e execução técnica.
                </p>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Mínimo 8h/semanais
                </div>
              </motion.div>

              <motion.div
                className="border border-gray-800 p-8 hover:border-white transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Interino
                </h3>
                <p className="font-light opacity-70 mb-6">
                  Período específico para preencher lacuna temporária de liderança
                  com estabilidade e continuidade.
                </p>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Mínimo 3 meses
                </div>
              </motion.div>

              <motion.div
                className="border border-gray-800 p-8 hover:border-white transition-colors"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="text-xl font-normal mb-4 uppercase tracking-wider">
                  Advisor
                </h3>
                <p className="font-light opacity-70 mb-6">
                  Orientação estratégica e consultoria pontual para
                  liderança em tecnologia e produto.
                </p>
                <div className="text-sm opacity-60 uppercase tracking-wider">
                  Mínimo 8h/mensais
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-sm font-light opacity-60">
                * Modelo de trabalho híbrido • Flexibilidade total de horários
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-16">
              <div className="text-sm font-light tracking-[0.3em] uppercase mb-4 opacity-70">
                O Profissional
              </div>
              <h2 className="text-4xl sm:text-5xl font-light">
                Quem está com você nesta <span className="font-normal">jornada</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                className="relative mx-auto lg:mx-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Background decorative elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black rounded-full opacity-50 blur-2xl" />

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-gray-800">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                    <Image
                      src="/images/julio.png"
                      alt="Julio Sousa"
                      fill
                      className="object-cover object-center"
                      priority
                    />
                  </div>

                  {/* Decorative ring */}
                  <motion.div
                    className="absolute -inset-4 border border-gray-800 rounded-full"
                    animate={{
                      rotate: 360
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </div>
              </motion.div>

              <div>
                <h3 className="text-3xl font-light mb-6">
                  Julio Sousa
                </h3>
                <p className="text-lg font-light opacity-80 mb-6">
                  Líder em tecnologia com experiência única combinando Tecnologia,
                  Produto, Marketing e Inteligência Artificial.
                </p>
                <p className="font-light opacity-70 mb-8">
                  Fundador de startups, diretor de tecnologia e consultor com track record
                  comprovado em transformação digital e implementação de IA.
                  Experiência prática liderando equipes de alta performance e
                  desenvolvendo produtos que impactaram mais de 500.000 usuários.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="font-light">15+ anos construindo produtos digitais</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="font-light">Expertise em IA e automação</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="font-light">Formação em Sistemas de Informação e MBA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0" />
                    <span className="font-light">Certificações em IA e Product Management</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-light mb-1">80+</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">Colaboradores Liderados</div>
                  </div>
                  <div>
                    <div className="text-3xl font-light mb-1">10+</div>
                    <div className="text-xs opacity-60 uppercase tracking-wider">Produtos Lançados</div>
                  </div>
                </div>

                <motion.a
                  href="https://www.linkedin.com/in/juliosousajr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-sm uppercase tracking-wider"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-4 w-4" />
                  Conectar no LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm font-light tracking-[0.3em] uppercase mb-6 opacity-70">
              Disponível para novos projetos
            </div>
            <h2 className="text-4xl sm:text-5xl font-light mb-8">
              Vamos transformar sua empresa<br />
              com <span className="font-normal">Inteligência Artificial?</span>
            </h2>
            <p className="text-xl font-light opacity-80 mb-12">
              Reduza custos, aumente eficiência e escale seu negócio
            </p>
            <motion.button
              className="px-12 py-5 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-lg uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Agendar Consultoria Gratuita
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-light mb-4">CTO as a Service</h3>
                <p className="font-light opacity-70">Transformação Digital com IA</p>
                <p className="font-light opacity-70">Consultoria em Tecnologia e Produto</p>
              </div>
              <div className="md:text-right">
                <h4 className="text-lg font-light mb-4 uppercase tracking-wider">Contato</h4>
                <div className="space-y-2">
                  <a
                    href="mailto:contato@juliosousa.tec.br"
                    className="block font-light opacity-70 hover:opacity-100 transition-opacity"
                  >
                    contato@juliosousa.tec.br
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juliosousajr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block font-light opacity-70 hover:opacity-100 transition-opacity"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="tel:+5562993139371"
                    className="block font-light opacity-70 hover:opacity-100 transition-opacity"
                  >
                    +55 62 99313-9371
                  </a>
                </div>
              </div>
            </div>

            <div className="h-px bg-gray-800 mb-8" />

            <div className="text-center">
              <p className="font-light opacity-50 text-sm">
                © 2024 Julio Sousa. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}