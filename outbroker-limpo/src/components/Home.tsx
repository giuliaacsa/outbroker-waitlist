'use client'

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Check, 
  Building2, 
  Users, 
  FileText, 
  Wallet, 
  Shield, 
  MessageSquare,
  Search,
  AlertCircle,
  TrendingUp
} from "lucide-react";
import { motion } from "framer-motion";
import WaitlistModal from "@/components/WaitlistModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden font-sans">
      <nav className="fixed top-0 w-full z-50 bg-primary shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center">
            <Image 
              src="/images/IMG-20250813-WA0287(6).JPG" 
              alt="OutBroker Logo" 
              width={200}
              height={60}
              className="h-14 w-auto object-contain"
              priority
            />
          </div>
         <div className="hidden md:flex items-center gap-8 font-medium text-sm text-white">
  <a href="#problema" className="hover:text-white/80 transition-colors">O PROBLEMA</a>
  <a href="#vsl" className="hover:text-white/80 transition-colors">VÍDEO</a> {/* NOVO */}
  <a href="#solucao" className="hover:text-white/80 transition-colors">A SOLUÇÃO</a>
  <a href="#ecossistema" className="hover:text-white/80 transition-colors">ECOSSISTEMA</a>
</div>
          <Button 
            onClick={openModal}
            className="bg-white text-primary hover:bg-white/90 font-bold rounded-full px-6 h-11 shadow-lg"
          >
            LISTA DE ESPERA
          </Button>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-primary text-sm font-bold tracking-wide mb-4 border border-orange-200">
              🚀 ACESSO ANTECIPADO
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-secondary leading-[1.1]">
              O mercado imobiliário <br/>
              <span className="text-primary">vai mudar. De novo.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto leading-relaxed font-light">
              Dessa vez, de verdade. A revolução silenciosa começou.
            </p>
            <div className="pt-8 flex justify-center">
              <Button 
  onClick={openModal}
  className="h-14 px-12 rounded-xl font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all"
>
  ENTRAR NA LISTA DE ESPERA
</Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-30">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-orange-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-100 rounded-full blur-3xl"></div>
        </div>
      </section>

      <section id="problema" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                Durante anos, a mesma cena se repetiu.
              </h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-2xl">✕</span>
                  <span><strong>Quem procura imóvel</strong> perde tempo.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-2xl">✕</span>
                  <span><strong>Quem vende imóvel</strong> perde oportunidades.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-red-500 font-bold text-2xl">✕</span>
                  <span>E <strong>o negócio</strong> se perde no caminho.</span>
                </p>
              </div>
              <div className="text-lg font-medium text-secondary pt-6 border-l-4 border-primary pl-6 bg-orange-50 py-4 rounded-r-xl">
                Sites demais. Conversas demais. Processos fora do lugar.
                <span className="text-gray-600 font-normal text-base mt-2 block">
                  Ninguém percebeu que o problema nunca foi o imóvel. <strong>Foi a forma como as pessoas se conectam.</strong>
                </span>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-white shadow-2xl p-10 flex flex-col justify-center items-center text-center space-y-6 border border-gray-100 relative z-10">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center text-red-500 mb-4">
                  <AlertCircle className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">O Caos Atual</h3>
                <p className="text-gray-600 leading-relaxed">
                  Dezenas de abas abertas, mensagens não respondidas e visitas frustradas. 
                  <strong className="block mt-2 text-secondary">O modelo atual está quebrado.</strong>
                </p>
              </div>
              <div className="absolute -z-0 top-8 -right-8 w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VSL Section */}
<section id="vsl" className="py-24 bg-gradient-to-b from-white to-orange-50">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center max-w-3xl mx-auto mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
        Assista ao vídeo exclusivo
      </h2>
      <p className="text-xl text-gray-600">
        Entenda em 3 minutos como o OutBroker vai revolucionar o mercado imobiliário
      </p>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      {/* Container do vídeo */}
      <div className="aspect-video bg-gradient-to-br from-secondary to-primary rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* Placeholder para o vídeo */}
        <div className="w-full h-full flex flex-col items-center justify-center p-8 text-white">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 border-4 border-white/30 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Vídeo Exclusivo</h3>
              <p className="text-white/80 max-w-md mx-auto">
                Em breve: o vídeo que vai mostrar como o OutBroker transforma a busca por imóveis
              </p>
            </div>
          </div>
        </div>

        {/* Texto de overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
          <p className="text-white text-sm font-medium">
            ⏱️ 3 minutos • 🎯 Entenda a revolução
          </p>
        </div>
      </div>

      {/* Botão abaixo do vídeo */}
      <div className="mt-8 text-center">
        <Button 
          onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white font-bold px-8 h-12 rounded-full shadow-lg"
        >
          QUERO FAZER PARTE DA REVOLUÇÃO
        </Button>
        <p className="mt-4 text-gray-600 text-sm">
          Assista o vídeo e entenda por que você precisa estar na lista de espera
        </p>
      </div>
    </motion.div>

    {/* Estatísticas abaixo do vídeo */}
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
    >
      {[
        { number: "90%", label: "Menos tempo procurando imóveis" },
        { number: "3x", label: "Mais conexões relevantes" },
        { number: "100%", label: "Processo simplificado" }
      ].map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
          <div className="text-gray-700">{stat.label}</div>
        </div>
      ))}
    </motion.div>
  </div>
</section>

      <section id="solucao" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-secondary mb-6 leading-tight">
              Uma nova ponte entre <br/>
              <span className="text-primary">quem vende e quem procura</span>
            </h2>
            <p className="text-xl text-gray-600">
              Sem ruído. Sem desencontro. Sem etapas fora do caminho.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {icon: Search, title: "Busca Única", description: "Quem procura diz uma vez o que quer. Não precisa mais garimpar em dezenas de sites.", color: "blue"},
              {icon: Check, title: "Conexão Real", description: "Quem vende fala apenas com quem realmente quer comprar. Adeus curiosos.", color: "orange"},
              {icon: Building2, title: "Tudo em Um Lugar", description: "Todo o processo acontece aqui. Do match até a entrega das chaves.", color: "blue"}
            ].map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex">
                <Card className={`border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-${feature.color}-50/50 hover:scale-105 flex-1 flex flex-col`}>
                  <CardContent className="p-8 space-y-4 flex flex-col flex-1">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 flex-shrink-0">
                      <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-secondary flex-shrink-0">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed flex-1">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20 text-center bg-secondary text-white rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <h3 className="text-3xl md:text-5xl font-bold leading-tight">
                Você não vai mais procurar imóveis.
              </h3>
              <p className="text-xl md:text-2xl text-orange-100">
                Os imóveis certos vão encontrar você.
              </p>
              <div className="w-20 h-1 bg-primary mx-auto rounded-full my-6"></div>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                Através do nosso <strong>algoritmo inteligente</strong> (sem I.A. genérica), 
                conectamos perfis compatíveis com <strong>precisão cirúrgica</strong>.
              </p>
            </div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-20"></div>
          </motion.div>
        </div>
      </section>

      <section id="ecossistema" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 md:order-1 grid grid-cols-2 gap-4"
            >
              {[
                { icon: Users, label: "Conexão" },
                { icon: MessageSquare, label: "Negociação" },
                { icon: FileText, label: "Documentos" },
                { icon: Wallet, label: "Financiamento" }
              ].map((item, index) => (
                <motion.div key={item.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
                  <item.icon className="w-8 h-8 text-primary" />
                  <span className="font-bold text-secondary">{item.label}</span>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }} className="col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md transition-shadow">
                <Shield className="w-8 h-8 text-primary" />
                <span className="font-bold text-secondary">Seguro</span>
              </motion.div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 md:order-2 space-y-8"
            >
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-secondary leading-tight">
                O mercado imobiliário inteiro dentro do mesmo lugar.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Isso não é mais um portal imobiliário. É um <strong>novo fluxo de negócios</strong>. E ele começa agora.
              </p>
              <div className="bg-orange-50 border-l-4 border-primary p-6 rounded-r-xl shadow-sm">
                <h4 className="font-bold text-secondary mb-3 flex items-center gap-2 text-lg">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Aumente sua Receita
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Receba <strong className="text-primary">CASHBACK</strong> sobre financiamentos e seguros 
                  realizados dentro da plataforma. Transforme serviços burocráticos em novas fontes de renda.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-6xl font-heading font-bold text-secondary leading-tight">
                Estamos abrindo o <br/>
                <span className="text-primary">acesso antecipado</span>
              </h2>
            </motion.div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              As primeiras pessoas a entrar vão participar do início dessa mudança.
              <strong className="block mt-2 text-secondary">Corretores, imobiliárias e compradores que querem estar na frente.</strong>
            </p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 md:p-12 rounded-3xl border border-orange-100 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-secondary mb-8">
                Entre para a lista de espera do OutBroker
              </h3>
              <div className="flex justify-center">
               <Button 
  onClick={openModal}
  className="h-14 px-12 font-bold text-base bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl"
>
  QUERO ENTRAR NA LISTA
</Button>
              </div>
              <p className="mt-6 text-sm text-gray-600 leading-relaxed max-w-lg mx-auto">
                Seja um dos primeiros a usar a plataforma que vai mudar a forma como imóveis são 
                encontrados, vendidos e fechados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary text-white py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-heading font-bold">Out<span className="text-primary">Broker</span></span>
            </div>
            <div className="text-sm text-white/80 text-center md:text-right">
              <p>© 2024 OutBroker. Todos os direitos reservados.</p>
              <p className="mt-1">A revolução silenciosa do mercado imobiliário.</p>
            </div>
          </div>
        </div>
      </footer>

      <WaitlistModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}