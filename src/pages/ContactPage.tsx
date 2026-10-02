import React, { useState } from 'react';
import { PageType } from '../types';
import {
  Phone,
  Instagram,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Truck,
  Sparkles
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageType) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    subject: 'pedido',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Por favor, preencha pelo menos seu nome e WhatsApp.');
      return;
    }

    setSubmitted(true);

    const subjectMap: Record<string, string> = {
      pedido: 'Fazer Pedido de Ovos',
      assinatura: 'Dúvidas sobre Clube de Assinatura',
      comercial: 'Parceria / Fornecimento para Restaurantes',
      visita: 'Agendamento de Visita à Fazenda',
      outro: 'Dúvida Geral',
    };

    const formattedMessage =
      `🌿 *MENSAGEM DE CONTATO - SITE THOMAZ PRADO* 🌿\n\n` +
      `Olá Thomaz! Envio uma mensagem através do formulário do site:\n\n` +
      `• *Nome:* ${formData.name}\n` +
      `• *WhatsApp:* ${formData.phone}\n` +
      `• *Cidade:* ${formData.city || 'Não informada'}\n` +
      `• *Assunto:* ${subjectMap[formData.subject] || formData.subject}\n` +
      `• *Mensagem:* ${formData.message || 'Gostaria de mais detalhes sobre os ovos orgânicos.'}\n\n` +
      `Aguardo seu contato!`;

    const encoded = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://wa.me/5519953312503?text=${encoded}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  const faqs = [
    {
      q: 'Como funciona a entrega dos ovos orgânicos?',
      a: 'Organizamos rotas semanais de entrega em Campinas, Piracicaba, Limeira, Rio Claro, Americana e cidades vizinhas no DDD 19. Nossos ovos são colhidos até 24h a 48h antes da entrega, garantindo frescor absoluto na sua porta.',
    },
    {
      q: 'Qual o valor do frete e existe pedido mínimo?',
      a: 'Para pedidos acima de R$ 70,00 na região atendida, o frete é 100% GRÁTIS! Para pedidos menores, a taxa fixa é de apenas R$ 8,00 para cobrir o transporte refrigerado.',
    },
    {
      q: 'Como funciona a Assinatura Semanal ou Quinzenal?',
      a: 'No nosso Clube de Assinatura, você escolhe a quantidade de dúzias ou bandejas que sua casa consome e recebe automaticamente em dias fixos. Você não precisa se lembrar de pedir, o frete tem prioridade e você pode pausar ou cancelar a qualquer momento sem taxas.',
    },
    {
      q: 'Por que os ovos de vocês não vêm lavados?',
      a: 'Os ovos possuem uma película biológica natural chamada "cutícula" que fecha os poros da casca e impede a entrada de bactérias. Ao lavar os ovos na indústria, essa barreira se perde. Nós mantemos os ninhos limpíssimos com palha fresca para que os ovos saiam limpos naturalmente da postura, durando muito mais tempo.',
    },
    {
      q: 'Vocês atendem restaurantes, empórios e cafeterias?',
      a: 'Sim! Fornecemos no atacado para confeitarias artesanais, restaurantes naturais, academias e empórios orgânicos da região. Entre em contato pelo WhatsApp (19 95331-2503) para receber nossa tabela corporativa com condições diferenciadas.',
    },
    {
      q: 'Posso agendar uma visita para ver as galinhas soltas no pasto?',
      a: 'Com certeza! Adoramos receber famílias, crianças e entusiastas da agricultura sustentável. As visitas são agendadas aos fins de semana via WhatsApp para mantermos a tranquilidade e a rotina natural das aves.',
    },
  ];

  return (
    <div className="space-y-16 pb-20">
      {/* Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/80 px-3 py-1 rounded-md">
              <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
              <span>Canais Diretos de Atendimento</span>
            </div>
            <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Fale com a Fazenda <br />
              <span className="text-amber-400">Thomaz Prado</span>
            </h1>
            <p className="text-base text-stone-300 leading-relaxed">
              Atendimento atencioso e humanizado direto com quem cuida das aves e da colheita. Tire suas dúvidas, peça sua entrega ou venha nos visitar.
            </p>
          </div>
        </div>
      </section>

      {/* Primary Contact Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 -mt-10 relative z-20">
          {/* Card WhatsApp */}
          <div className="bg-white rounded-2xl border-2 border-emerald-700/60 p-6 sm:p-7 shadow-lg flex flex-col justify-between space-y-4 group">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Phone className="w-6 h-6 text-emerald-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
                  Canal Mais Rápido
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-stone-900">
                  WhatsApp Oficial
                </h3>
              </div>
              <div className="text-lg font-bold text-emerald-950">
                (19) 95331-2503
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Envie uma mensagem para fazer pedidos de ovos, consultar rotas de entrega no seu bairro ou assinar nosso clube.
              </p>
            </div>
            <a
              href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Abrir Conversa no WhatsApp</span>
            </a>
          </div>

          {/* Card Instagram */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center">
                <Instagram className="w-6 h-6 text-pink-600" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-pink-800">
                  Rotina no Pasto
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-stone-900">
                  Instagram Oficial
                </h3>
              </div>
              <div className="text-lg font-bold text-stone-900">
                @thomazpradoo
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Acompanhe o dia a dia das nossas galinhas soltas, vídeos do manejo sustentável, dicas de nutrição e receitas deliciosas.
              </p>
            </div>
            <a
              href="https://www.instagram.com/thomazpradoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 bg-stone-900 hover:bg-stone-800 text-amber-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <Instagram className="w-4 h-4 text-pink-400" />
              <span>Seguir @thomazpradoo</span>
            </a>
          </div>

          {/* Card Região de Atendimento */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-amber-700" />
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                  Rotas Semanais
                </span>
                <h3 className="font-serif-brand text-2xl font-bold text-stone-900">
                  Região Atendida
                </h3>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Entregas programadas nas cidades do <strong>interior paulista (DDD 19)</strong>:
              </p>
              <div className="flex flex-wrap gap-1.5 text-xs text-stone-700">
                {['Campinas', 'Piracicaba', 'Limeira', 'Rio Claro', 'Americana', 'Paulínia', 'Sumaré', 'Nova Odessa'].map(
                  (city, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-stone-100 rounded text-[11px] font-medium"
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>
            <div className="pt-2 border-t border-stone-100 text-xs text-stone-500 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
              <span>Consulte o dia da rota do seu bairro pelo WhatsApp!</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Form & Info Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200 p-6 sm:p-10 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                Formulário Rápido
              </div>
              <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900">
                Envie sua Mensagem ou Pedido
              </h2>
              <p className="text-xs sm:text-sm text-stone-500">
                Preencha os campos abaixo. Ao clicar em enviar, geramos sua solicitação e você pode dar continuidade diretamente no WhatsApp.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-700 mx-auto" />
                <h3 className="font-serif-brand text-xl font-bold text-emerald-950">
                  Mensagem Pronta para Envio!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                  Abrimos uma janela para falar com a Fazenda Thomaz Prado no WhatsApp <strong>(19) 95331-2503</strong>. Se a janela não abriu automaticamente, clique no botão abaixo:
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-800 text-white rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Abrir WhatsApp (19 95331-2503)</span>
                  </a>
                </div>
                <button
                  onClick={() => setSubmitted(false)}
                  className="block mx-auto text-xs text-stone-500 underline pt-2"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João da Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Seu WhatsApp / Telefone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(19) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Cidade / Bairro
                    </label>
                    <input
                      type="text"
                      placeholder="Ex: Campinas - Guanabara"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      Assunto Principal
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                    >
                      <option value="pedido">Fazer Pedido de Ovos Frescos</option>
                      <option value="assinatura">Clube de Assinatura Semanal</option>
                      <option value="comercial">Atacado para Restaurantes / Lojas</option>
                      <option value="visita">Agendar Visita à Fazenda</option>
                      <option value="outro">Outras Dúvidas</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    Como Podemos Ajudar? (Mensagem)
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Conte o que você gostaria de pedir, quantidade de ovos ou dúvidas sobre nossa produção sustentável..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-700 active:bg-emerald-900 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar & Abrir Conversa no WhatsApp (19 95331-2503)</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Horários & Informações */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-stone-100 rounded-3xl p-6 sm:p-8 border border-stone-200 space-y-5">
              <h3 className="font-serif-brand text-xl font-bold text-stone-900">
                Horários de Atendimento & Rotinas
              </h3>

              <div className="space-y-4 text-xs text-stone-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Atendimento WhatsApp:</span>
                    <span>Segunda a Sábado, das 07h às 19h.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Truck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Dias de Colheita e Entrega:</span>
                    <span>Colheita diária matinal. Entregas domiciliares às terças, quintas e sábados na região de Campinas e cidades do DDD 19.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-stone-900 block">Garantia de Quebra no Transporte:</span>
                    <span>Se qualquer ovo trincar ou quebrar no trajeto, nós repomos sem nenhum custo adicional.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Instagram Callout Widget */}
            <div className="bg-gradient-to-br from-amber-50 to-stone-100 rounded-3xl p-6 sm:p-8 border border-amber-200/80 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif-brand text-lg font-bold text-stone-900">
                    Siga no Instagram
                  </h4>
                  <a
                    href="https://www.instagram.com/thomazpradoo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-pink-700 hover:underline"
                  >
                    @thomazpradoo
                  </a>
                </div>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                Fotos diárias dos piquetes, vídeos das galinhas ciscando livres no capim e novidades da fazenda. Junte-se à nossa comunidade de alimentação consciente!
              </p>
              <a
                href="https://www.instagram.com/thomazpradoo/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-900 hover:text-emerald-700"
              >
                <span>Acessar perfil instagram.com/thomazpradoo</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Perguntas Frequentes (FAQ) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Tire Suas Dúvidas
          </div>
          <h2 className="font-serif-brand text-3xl font-bold text-stone-900">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-serif-brand text-base font-bold text-stone-900 hover:text-emerald-900 transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-stone-500 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-stone-500 shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100 mt-1">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
