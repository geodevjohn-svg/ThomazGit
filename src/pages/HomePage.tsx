import React, { useState } from 'react';
import { PageType, Product } from '../types';
import { PRODUCTS, FARM_STATS, FARM_IMAGES, SUSTAINABILITY_PILLARS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import {
  Sun,
  ShieldCheck,
  Heart,
  Phone,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Maximize2,
  X,
  Truck,
  Leaf,
  Award,
  Users
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageType) => void;
  onAddToCart: (product: Product) => void;
  onQuickWhatsApp: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onAddToCart,
  onQuickWhatsApp,
}) => {
  const [selectedPhoto, setSelectedPhoto] = useState<{
    src: string;
    title: string;
    description: string;
  } | null>(null);

  const farmGallery = [
    {
      src: FARM_IMAGES.hensPasture,
      title: 'Vida Livre no Pasto Verde',
      subtitle: 'Comportamento Natural & Sol Pleno',
      description:
        'Nossas galinhas passam o dia ciscando sob o sol da manhã em piquetes rotacionados de capim e trevo. Sem cercados minúsculos, sem superlotação, respirando ar puro.',
    },
    {
      src: FARM_IMAGES.eggsNest,
      title: 'Ninhos Limpos com Palha Fresca',
      subtitle: 'Colheita Manual Cuidadosa',
      description:
        'Ambiente escuro, calmo e acolhedor onde cada ave escolhe seu ninho para botar com serenidade. Os ovos são recolhidos manualmente todos os dias com carinho.',
    },
    {
      src: FARM_IMAGES.singleHen,
      title: 'Saúde & Vitalidade das Aves',
      subtitle: 'Zero Antibióticos ou Agrotóxicos',
      description:
        'Cristas vermelhas radiantes, penas limpas e olhar atento: reflexo de uma alimentação orgânica rica, banhos de terra diários e respeito absoluto ao ciclo de vida da ave.',
    },
    {
      src: FARM_IMAGES.farmLandscape,
      title: 'Manejo Sustentável & Regenerativo',
      subtitle: 'Harmonia com a Natureza',
      description:
        'Preservação de matas nativas, água de nascente tratada, esterco transformado em adubo orgânico rico e embalagens de papelão reciclado 100% biodegradáveis.',
    },
  ];

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-stone-900 text-white">
        {/* Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0">
          <img
            src={FARM_IMAGES.farmLandscape}
            alt="Fazenda de ovos orgânicos Thomaz Prado"
            className="w-full h-full object-cover object-center opacity-35 scale-105 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl space-y-6">
            {/* Tagline kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/70 px-3.5 py-1.5 rounded-md backdrop-blur-sm">
              <Leaf className="w-3.5 h-3.5 text-amber-400" />
              <span>Ovos Caipiras Orgânicos · Criação Humanizada em Pasto</span>
            </div>

            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Galinhas livres de verdade. <br />
              <span className="text-amber-400">Nutrição pura</span> na sua mesa.
            </h1>

            <p className="text-base sm:text-lg text-stone-300 leading-relaxed">
              Na <strong>Thomaz Prado</strong>, criamos nossas aves soltas em pastagens verdes, com alimentação 100% orgânica, banho de terra e sol natural. Sem gaiolas, sem hormônios e com compromisso sustentável do pasto à sua casa.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#catalogo"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-xl font-bold text-sm shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2"
              >
                <span>Ver Nossos Ovos & Preços</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 bg-emerald-800/90 hover:bg-emerald-700 text-white rounded-xl font-semibold text-sm border border-emerald-600/40 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-emerald-300" />
                <span>Pedir no WhatsApp (19 95331-2503)</span>
              </a>
            </div>

            {/* Micro proof row */}
            <div className="pt-6 flex flex-wrap items-center gap-4 text-xs text-stone-400 border-t border-stone-800/80">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>100% Certificado Livre de Gaiolas</span>
              </div>
              <span className="text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-amber-400" />
                <span>Entrega semanal no interior de SP</span>
              </div>
              <span className="text-stone-700">·</span>
              <div className="flex items-center gap-1.5">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Bem-estar animal autêntico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-2xl border border-stone-200 shadow-md p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FARM_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1 text-center md:text-left border-r last:border-r-0 border-stone-100 pr-2">
              <div className="font-serif-brand text-2xl lg:text-3xl font-bold text-emerald-950">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-stone-800">
                {stat.label}
              </div>
              <div className="text-[11px] text-stone-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Galeria Real da Criação Responsável Solta */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Transparência & Bem-Estar Animal
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            Como nossas galinhas vivem: limpas, soltas e respeitadas
          </h2>
          <p className="text-sm text-stone-600 mt-2 leading-relaxed">
            Não temos nada a esconder. Acreditamos que a qualidade e a densidade nutricional do ovo começam na felicidade e na saúde da ave. Veja como é o dia a dia na Fazenda Thomaz Prado.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {farmGallery.map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer"
              onClick={() => setSelectedPhoto(item)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-stone-900/70 hover:bg-stone-900 text-white p-2 rounded-lg backdrop-blur-sm transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
                <div className="absolute bottom-3 left-3 bg-amber-500 text-stone-950 text-xs font-bold px-2.5 py-1 rounded">
                  {item.subtitle}
                </div>
              </div>
              <div className="p-5 sm:p-6 space-y-2">
                <h3 className="font-serif-brand text-xl font-bold text-stone-900 group-hover:text-emerald-900 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-2 text-xs font-semibold text-emerald-800 flex items-center gap-1 group-hover:underline">
                  <span>Ampliar foto e ver detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal for Photo inspection */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-stone-900 border border-stone-800 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl relative">
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-stone-800/80 hover:bg-stone-700 text-white rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="max-h-[65vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>
            <div className="p-6 bg-stone-900 text-white space-y-2">
              <h3 className="font-serif-brand text-2xl font-bold text-amber-400">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-stone-300 leading-relaxed">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Sustentabilidade & Pilares */}
      <section className="bg-emerald-950 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Agricultura Regenerativa
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold">
              Tudo feito de forma 100% sustentável
            </h2>
            <p className="text-sm text-emerald-200/80 leading-relaxed">
              Cuidar do solo, da água e do bem-estar dos animais é o nosso compromisso inegociável na produção dos ovos Thomaz Prado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SUSTAINABILITY_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="bg-emerald-900/60 border border-emerald-800/60 rounded-2xl p-6 space-y-3 hover:bg-emerald-900/90 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center font-bold">
                  0{idx + 1}
                </div>
                <h3 className="font-serif-brand text-lg font-bold text-white">
                  {p.title}
                </h3>
                <p className="text-xs text-emerald-100/70 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-900/90 border border-emerald-700/60 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <h3 className="font-serif-brand text-xl font-bold text-amber-300">
                Deseja visitar nossa fazenda e conhecer a criação?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/80">
                Recebemos clientes, famílias e parceiros para visitas guiadas agendadas. Venha ver as galinhas no pasto de perto!
              </p>
            </div>
            <a
              href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20à%20Fazenda%20Thomaz%20Prado!"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all"
            >
              Agendar Visita no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Seção Loja & Catálogo de Ovos */}
      <section id="catalogo" className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-xl">
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Nossa Colheita Fresca
            </div>
            <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
              Escolha seus Ovos Orgânicos Thomaz Prado
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              Embalagens ecológicas, colheita diária e entrega direta com frescor imbatível. Faça seu pedido avulso ou assine nosso plano semanal.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-600 bg-stone-100 p-2.5 rounded-lg border border-stone-200">
            <Truck className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>Frete <strong>GRÁTIS</strong> para pedidos acima de R$ 70 na região!</span>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod) => (
            <ProductCard
              key={prod.id}
              product={prod}
              onAddToCart={onAddToCart}
              onQuickWhatsApp={onQuickWhatsApp}
            />
          ))}
        </div>
      </section>

      {/* Teaser Nutrição Superalimento */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-br from-amber-50 to-stone-100 border border-amber-200/80 rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-200/60 px-3 py-1 rounded">
                <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                <span>Riqueza Nutricional Incomparável</span>
              </div>
              <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-stone-900 leading-tight">
                Você sabe por que o ovo caipira de pasto é o <span className="text-amber-700">segundo alimento mais completo do mundo</span>?
              </h2>
              <p className="text-sm text-stone-700 leading-relaxed">
                Perdendo apenas para o leite materno, o ovo caipira orgânico fornece <strong>todos os 9 aminoácidos essenciais</strong>, alta dose de <strong>Colina</strong> para a memória e <strong>Luteína</strong> para a visão. Como nossas galinhas tomam sol livre no pasto o dia todo, os ovos têm <strong>até 4x a 6x mais Vitamina D natural</strong>.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => {
                    onNavigate('nutrition');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-5 py-3 bg-emerald-900 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
                >
                  <span>Ver Tabela Nutricional & Calculadora</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    onNavigate('nutrition');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-4 py-3 text-xs font-bold text-stone-700 hover:text-stone-950 underline underline-offset-4"
                >
                  Comparar: Pasto vs Ovo Convencional
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center space-y-1">
                <div className="font-serif-brand text-2xl font-bold text-emerald-900">13g</div>
                <div className="text-xs font-bold text-stone-800">Proteína Completa</div>
                <div className="text-[11px] text-stone-500">2 ovos / PDCAAS 1.0</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center space-y-1">
                <div className="font-serif-brand text-2xl font-bold text-amber-700">294mg</div>
                <div className="text-xs font-bold text-stone-800">Colina Pura</div>
                <div className="text-[11px] text-stone-500">55% da dose diária</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center space-y-1">
                <div className="font-serif-brand text-2xl font-bold text-emerald-900">4x a 6x</div>
                <div className="text-xs font-bold text-stone-800">Mais Vitamina D</div>
                <div className="text-[11px] text-stone-500">Galinhas no sol livre</div>
              </div>
              <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-sm text-center space-y-1">
                <div className="font-serif-brand text-2xl font-bold text-amber-700">3x Mais</div>
                <div className="text-xs font-bold text-stone-800">Ômega-3 Ativo</div>
                <div className="text-[11px] text-stone-500">Pastejo de trevo e grama</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos de Clientes */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Quem Experimenta Não Troca
          </div>
          <h2 className="font-serif-brand text-3xl font-bold text-stone-900">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Dra. Camila Sampaio',
              role: 'Nutricionista Funcional - Campinas',
              comment:
                'Indico os ovos Thomaz Prado para todos os meus pacientes. A diferença na coloração da gema e na densidade proteica é visível. Saber que as galinhas vivem soltas no pasto faz toda a diferença biológica.',
            },
            {
              name: 'Chef Marcelo Bianchi',
              role: 'Restaurante & Confeitaria Artesanal',
              comment:
                'Na confeitaria fina e nos preparos de massas frescas, o ovo da Thomaz Prado dá uma coloração dourada espetacular sem precisar de nenhum truque. É puro frescor e qualidade.',
            },
            {
              name: 'Renata Albuquerque',
              role: 'Mãe e Praticante de Corrida - Piracicaba',
              comment:
                'Assinei a bandeja família semanal e virou nosso ritual matinal. As crianças adoram o sabor e eu fico em paz sabendo que não tem hormônio nem sofrimento animal envolvido.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex text-amber-500 gap-1 text-sm">
                  ★★★★★
                </div>
                <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed">
                  "{item.comment}"
                </p>
              </div>
              <div className="pt-3 border-t border-stone-100">
                <div className="text-xs font-bold text-stone-900">{item.name}</div>
                <div className="text-[11px] text-stone-500">{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Big Direct Call to Action */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-stone-800">
          <div className="space-y-3 max-w-xl text-center md:text-left">
            <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold">
              Leve saúde e respeito à mesa da sua família hoje mesmo
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Fale diretamente com nossa fazenda pelo WhatsApp ou siga nosso cotidiano com as galinhas no Instagram oficial.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20fazer%20um%20pedido%20de%20ovos%20orgânicos%20Thomaz%20Prado"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all text-center"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp: (19) 95331-2503</span>
            </a>
            <a
              href="https://www.instagram.com/thomazpradoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-stone-800 hover:bg-stone-700 text-amber-300 rounded-xl font-bold text-xs flex items-center justify-center gap-2 border border-stone-700 transition-all text-center"
            >
              <span>Instagram: @thomazpradoo</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
