import React, { useState } from 'react';
import { PageType } from '../types';
import { NUTRIENTS_LIST, COMPARISON_DATA, MYTHS_AND_FACTS } from '../data/nutrition';
import {
  Sparkles,
  Brain,
  Eye,
  ShieldCheck,
  Flame,
  Zap,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Phone,
  Scale,
  Award,
  Sun,
  Activity
} from 'lucide-react';

interface NutritionPageProps {
  onNavigate: (page: PageType) => void;
}

export const NutritionPage: React.FC<NutritionPageProps> = ({ onNavigate }) => {
  const [eggsPerDay, setEggsPerDay] = useState<number>(3);
  const [goal, setGoal] = useState<'hipertrofia' | 'cerebro' | 'emagrecimento' | 'longevidade'>(
    'hipertrofia'
  );
  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  // Nutrition formulas based on USDA & Brazilian Nutritional Table for pasture-raised organic eggs
  // ~6.5g protein, ~147mg choline, ~75 kcal, ~80-120 UI Vitamin D, ~280mcg Lutein per pasture egg (~50g)
  const calcProtein = (eggsPerDay * 6.5).toFixed(1);
  const calcCholine = eggsPerDay * 147;
  const calcCholinePercent = Math.min(100, Math.round((calcCholine / 550) * 100));
  const calcCalories = eggsPerDay * 75;
  const calcVitD = eggsPerDay * 90;
  const calcLutein = eggsPerDay * 280;

  const goalTips = {
    hipertrofia: {
      title: 'Meta: Construção Muscular & Recuperação Rápida',
      text: 'O ovo possui o mais alto valor biológico entre todas as proteínas naturais (PDCAAS 1.0). Comer ovos inteiros após o treino gera 42% mais síntese proteica miofibrilar do que consumir apenas as claras, graças ao perfil lipídico e micronutrientes da gema!',
    },
    cerebro: {
      title: 'Meta: Foco, Memória & Produtividade Cognitiva',
      text: 'A colina da gema é a precursora direta da acetilcolina, o neurotransmissor que comanda a velocidade de raciocínio e a consolidação de memórias. Ideal para estudantes, profissionais intelectuais e idosos.',
    },
    emagrecimento: {
      title: 'Meta: Saciedade & Queima de Gordura',
      text: 'Estudos clínicos demonstram que começar o dia com ovos em vez de carboidratos refinados reduz a ingestão calórica espontânea nas próximas 36 horas em até 400 calorias, mantendo os níveis de insulina estáveis.',
    },
    longevidade: {
      title: 'Meta: Saúde Ocular, Imunidade & Longevidade',
      text: 'A luteína e zeaxantina protegem sua visão contra a degeneração macular causada por luz azul de telas, enquanto a Vitamina D3 e o selênio reforçam a defesa imune celular e combatem o envelhecimento precoce.',
    },
  };

  const categories = ['Todos', 'Proteínas', 'Vitaminas', 'Antioxidantes', 'Gorduras Boas', 'Minerais'];

  const filteredNutrients =
    activeCategory === 'Todos'
      ? NUTRIENTS_LIST
      : NUTRIENTS_LIST.filter((n) => n.category === activeCategory);

  return (
    <div className="space-y-16 pb-20">
      {/* Hero Header */}
      <section className="bg-stone-900 text-white py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-950/70 border border-amber-800/80 px-3 py-1 rounded-md">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Dossiê Científico e Nutricional</span>
            </div>
            <h1 className="font-serif-brand text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              O Poder Nutricional do Ovo Orgânico: <br />
              <span className="text-amber-400">O Superalimento da Vida Real</span>
            </h1>
            <p className="text-base text-stone-300 leading-relaxed">
              Considerado por nutrólogos e cientistas o segundo alimento mais completo da natureza (atrás apenas do leite materno), o ovo de galinhas criadas soltas no pasto verde carrega uma densidade biológica incomparável.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Super Pillars of Pasture Egg */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Brain className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-stone-900">
              Colina para o Cérebro
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              2 ovos fornecem mais de 50% da necessidade diária de colina. Essencial para o desenvolvimento cerebral, foco, cognição e saúde do fígado.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Zap className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-stone-900">
              Proteína Pura 100% Biodisponível
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Gabarito internacional de proteína (PDCAAS 1.0). Todos os 9 aminoácidos essenciais em proporções perfeitas para regeneração e massa muscular.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
              <Eye className="w-6 h-6 text-amber-700" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-stone-900">
              Luteína & Zeaxantina
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Carotenoides antioxidantes que se concentram na mácula ocular. Protegem os olhos contra a luz azul de telas de celulares e computadores.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Sun className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-stone-900">
              Vitamina D do Sol
            </h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Como nossas galinhas passam o dia expostas aos raios solares naturais no pasto, seus ovos têm de 4x a 6x mais vitamina D ativa do que galinhas de granja.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Nutrition Calculator */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl space-y-8">
          <div className="max-w-2xl space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
              Calculadora Interativa Thomaz Prado
            </div>
            <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold">
              Calcule seu Aporte Nutricional Diário com Nossos Ovos
            </h2>
            <p className="text-xs sm:text-sm text-stone-400">
              Selecione quantos ovos você come por dia e sua meta de saúde para visualizar a entrega exata de nutrientes no seu organismo.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <label className="block text-xs font-bold text-stone-300 mb-2">
                  1. Quantos ovos você consome (ou pretende consumir) por dia?
                </label>
                <div className="grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setEggsPerDay(num)}
                      className={`py-2 rounded-lg text-sm font-bold transition-all ${
                        eggsPerDay === num
                          ? 'bg-amber-500 text-stone-950 shadow-md scale-105'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
                      }`}
                    >
                      {num}
                    </button>
                  ))}
                </div>
                <span className="text-[11px] text-stone-400 block mt-1.5">
                  Consumo selecionado: <strong>{eggsPerDay} {eggsPerDay === 1 ? 'ovo' : 'ovos'}</strong> por dia (~{eggsPerDay * 50}g).
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-300 mb-2">
                  2. Qual o seu principal objetivo?
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'hipertrofia', label: '💪 Ganho de Massa' },
                    { id: 'cerebro', label: '🧠 Foco & Memória' },
                    { id: 'emagrecimento', label: '🔥 Saciedade & Dieta' },
                    { id: 'longevidade', label: '🌱 Longevidade & Imune' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setGoal(item.id as any)}
                      className={`p-2.5 rounded-lg text-xs font-bold text-left transition-all ${
                        goal === item.id
                          ? 'bg-emerald-800 text-white border border-emerald-500 shadow-sm'
                          : 'bg-stone-800 text-stone-300 hover:bg-stone-700 border border-transparent'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Goal Tip Box */}
              <div className="bg-stone-800/80 border border-stone-700/60 p-4 rounded-xl space-y-1.5">
                <div className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5" />
                  <span>{goalTips[goal].title}</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {goalTips[goal].text}
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-7 bg-stone-950/60 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between space-y-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Proteína de Alta Absorção</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                    {calcProtein}g
                  </div>
                  <span className="text-[10px] text-stone-500">100% aminoácidos essenciais</span>
                </div>

                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Colina Cerebral</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                    {calcCholine}mg
                  </div>
                  <span className="text-[10px] text-amber-300/80">~{calcCholinePercent}% da meta diária</span>
                </div>

                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Vitamina D Natural</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                    ~{calcVitD} UI
                  </div>
                  <span className="text-[10px] text-stone-500">4x mais que granja</span>
                </div>

                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Luteína & Zeaxantina</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-amber-400 mt-1">
                    {calcLutein}mcg
                  </div>
                  <span className="text-[10px] text-stone-500">Proteção retina e visão</span>
                </div>

                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Energia Limpa</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-100 mt-1">
                    {calcCalories} kcal
                  </div>
                  <span className="text-[10px] text-stone-500">Baixíssimo índice glicêmico</span>
                </div>

                <div className="bg-stone-900 p-3.5 rounded-xl border border-stone-800 text-center">
                  <span className="text-[11px] text-stone-400 block">Antibióticos & Químicos</span>
                  <div className="font-serif-brand text-2xl sm:text-3xl font-bold text-emerald-400 mt-1">
                    ZERO
                  </div>
                  <span className="text-[10px] text-emerald-300">100% Puro & Orgânico</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
                <span className="text-xs text-stone-400 text-center sm:text-left">
                  Gostou dos dados? Peça sua caixa de ovos orgânicos colhidos na hora.
                </span>
                <a
                  href="https://wa.me/5519953312503?text=Olá,%20gostaria%20de%20pedir%20os%20ovos%20orgânicos%20Thomaz%20Prado"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Pedir Ovos no WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparativo Visual: Thomaz Prado vs Ovo Convencional */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="max-w-2xl">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Comparação Direta
          </div>
          <h2 className="font-serif-brand text-3xl font-bold text-stone-900 mt-1">
            Ovo Orgânico de Pasto Thomaz Prado vs. Ovo Convencional de Gaiola
          </h2>
          <p className="text-sm text-stone-600 mt-2">
            Entenda por que pagar por qualidade é um investimento direto na sua saúde e no respeito aos animais.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-stone-100/80 border-b border-stone-200">
              <tr>
                <th className="py-3.5 px-4 font-bold text-stone-700">Aspecto</th>
                <th className="py-3.5 px-4 font-bold text-emerald-900 bg-emerald-50/60">
                  🌿 Thomaz Prado (Pasto Livre Orgânico)
                </th>
                <th className="py-3.5 px-4 font-bold text-stone-500">
                  🏭 Granja Industrial Convencional
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-stone-200">
              {COMPARISON_DATA.map((row, idx) => (
                <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                  <td className="py-3 px-4 font-semibold text-stone-900">{row.feature}</td>
                  <td className="py-3 px-4 text-emerald-900 font-medium bg-emerald-50/30">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{row.thomazPrado}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-stone-600">
                    <span className="text-stone-500">{row.convencional}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tabela de Nutrientes Detalhada com Filtros */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
              Composição Nutricional Completa
            </div>
            <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
              Micronutrientes por Porção (2 Ovos ~ 100g)
            </h2>
          </div>

          {/* Category filter tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-stone-200/60 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeCategory === cat
                    ? 'bg-white text-emerald-950 shadow-sm'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredNutrients.map((item, idx) => (
            <div
              key={idx}
              className={`p-5 rounded-2xl border transition-all ${
                item.highlight
                  ? 'bg-amber-50/40 border-amber-200 shadow-sm'
                  : 'bg-white border-stone-200'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    {item.category}
                  </span>
                  <h4 className="font-serif-brand text-base font-bold text-stone-900 mt-0.5">
                    {item.name}
                  </h4>
                </div>
                <div className="text-right shrink-0">
                  <span className="font-serif-brand text-lg font-bold text-emerald-950 block">
                    {item.amountPerPortion}
                  </span>
                  <span className="text-[10px] font-semibold text-amber-700">
                    {item.percentDailyValue}
                  </span>
                </div>
              </div>
              <p className="text-xs text-stone-600 mt-2.5 leading-relaxed">
                {item.benefit}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mitos e Verdades */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="max-w-xl">
          <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
            Ciência Sem Mitos
          </div>
          <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-stone-900 mt-1">
            Mitos e Verdades sobre o Consumo de Ovos
          </h2>
        </div>

        <div className="space-y-4">
          {MYTHS_AND_FACTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm space-y-2"
            >
              <h4 className="text-sm font-bold text-stone-900 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{item.myth}</span>
              </h4>
              <p className="text-xs sm:text-sm text-stone-600 pl-6 leading-relaxed">
                <strong className="text-emerald-800">Fato Científico:</strong> {item.fact}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dicas de Preparo e Armazenamento */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-stone-100 rounded-3xl p-6 sm:p-10 border border-stone-200 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-stone-900">
              🍳 Melhores Formas de Preparo para Preservar Nutrientes
            </h3>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Ovo Poché ou Cozido Mole (Gema Macia):</strong> Mantém a integridade máxima da colina, luteína e das gorduras insaturadas sem oxidação térmica excessiva.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Mexidos com Fogo Baixo:</strong> Prepare com um fio de azeite extravirgem ou manteiga ghee em fogo brando para preservar a textura cremosa do ovo fresco.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                <span><strong>Ovo Frito na Água ou Pouco Azeite:</strong> Uma alternativa leve e saborosa com bordas crocantes e gema líquida dourada.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="font-serif-brand text-xl font-bold text-stone-900">
              🥚 Como Armazenar e o Teste da Água
            </h3>
            <ul className="space-y-2 text-xs text-stone-600">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Armazenamento:</strong> Nossos ovos não foram lavados industrialmente, mantendo a cutícula protetora intacta. Guarde em local fresco e arejado ou na geladeira (longe da porta para evitar oscilações de temperatura).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-amber-700 shrink-0 mt-0.5" />
                <span><strong>Teste da Frescura na Água:</strong> Coloque o ovo em um copo com água fria. Se afundar no fundo na horizontal, é novíssimo (menos de 7 dias). Se inclinar, tem 2 a 3 semanas. Se flutuar, a câmara de ar cresceu e deve ser descartado.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA to order */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 space-y-4">
          <h2 className="font-serif-brand text-3xl font-bold">
            Comece a nutrir seu corpo com ovos de verdade
          </h2>
          <p className="text-sm text-emerald-200/80 max-w-lg mx-auto">
            Faça seu pedido diretamente pelo WhatsApp da fazenda ou adicione os itens ao carrinho.
          </p>
          <div className="pt-2 flex justify-center gap-4">
            <button
              onClick={() => {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all"
            >
              Comprar Ovos Orgânicos
            </button>
            <a
              href="https://wa.me/5519953312503?text=Olá,%20vi%20a%20página%20de%20nutrição%20e%20gostaria%20de%20fazer%20um%20pedido%20Thomaz%20Prado"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-emerald-900 hover:bg-emerald-800 text-white font-bold text-xs rounded-xl border border-emerald-700 transition-all flex items-center gap-1.5"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp (19 95331-2503)</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
