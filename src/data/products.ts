import { Product } from '../types';
import eggsNestImg from '../assets/images/organic_eggs_nest_1790965429361.jpg';
import hensPastureImg from '../assets/images/hens_free_pasture_1790965416545.jpg';
import farmHenImg from '../assets/images/farm_pasture_hen_1790965451631.jpg';
import farmLandscapeImg from '../assets/images/sustainable_farm_1790965463791.jpg';

export const FARM_IMAGES = {
  eggsNest: eggsNestImg,
  hensPasture: hensPastureImg,
  singleHen: farmHenImg,
  farmLandscape: farmLandscapeImg,
};

export const PRODUCTS: Product[] = [
  {
    id: 'duzia-organica',
    name: 'Dúzia de Ovos Caipiras Orgânicos',
    tagline: '12 ovos selecionados de galinhas 100% livres no pasto',
    description: 'Ovos colhidos manualmente no dia, com gema dourada natural e casca resistente. Aves alimentadas com milho orgânico e pastejo livre.',
    price: 18.90,
    unit: 'embalagem',
    packSize: '12 ovos',
    image: eggsNestImg,
    badges: ['100% Orgânico', 'Galinhas Livres', 'Colheita do Dia'],
    features: [
      'Gema alaranjada de pigmentação 100% natural',
      'Ricos em Colina e Luteína para saúde cerebral e ocular',
      'Embalagem de papelão reciclado e biodegradável',
      'Zero hormônios ou antibióticos'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'bandeja-familia',
    name: 'Bandeja Família Orgânica (30 ovos)',
    tagline: 'O melhor custo-benefício para sua alimentação diária',
    description: 'Ideal para famílias que consomem ovos todos os dias no café da manhã e preparos saudáveis. Economia e nutrição pura direto da fazenda.',
    price: 42.00,
    unit: 'bandeja',
    packSize: '30 ovos',
    image: hensPastureImg,
    badges: ['Mais Vendido', 'Economia Familiar', 'Certificação Verde'],
    features: [
      'Economia de até 25% por unidade',
      'Tamanho grande selecionado (Tipo Extra)',
      'Perfeito para receitas proteicas e rotina fitness',
      'Validade de 30 dias em local fresco e arejado'
    ],
    inStock: true,
    isPopular: true,
  },
  {
    id: 'caixa-master-60',
    name: 'Caixa Master Fazenda (60 ovos)',
    tagline: 'Para atletas, famílias grandes e confeitarias artesanais',
    description: 'Dois pentes de 30 ovos orgânicos acondicionados com máxima proteção em caixa especial. Ovos frescos e íntegros com padrão gourmet.',
    price: 78.00,
    unit: 'caixa',
    packSize: '60 ovos',
    image: farmLandscapeImg,
    badges: ['Alta Demanda', 'Padrão Gourmet', 'Super Proteico'],
    features: [
      'Preço imbatível por dúzia (apenas R$ 15,60/dúzia)',
      'Embalagem reforçada anti-impacto ecológica',
      'Ideal para quem treina ou consome alta densidade proteica',
      'Entrega cuidadosa direto no seu endereço'
    ],
    inStock: true,
  },
  {
    id: 'assinatura-semanal',
    name: 'Clube de Assinatura Frescor Semanal',
    tagline: '4 dúzias por mês entregues na sua porta toda semana',
    description: 'Receba 1 dúzia de ovos recém-colhidos toda semana sem se preocupar em pedir. Flexibilidade total para pausar quando viajar.',
    price: 72.00,
    unit: 'mês (4 entregas)',
    packSize: '48 ovos / mês',
    image: farmHenImg,
    badges: ['Assinatura', 'Frete Prioritário', 'Sem Fidelidade'],
    features: [
      'Entrega semanal agendada no mesmo dia',
      'Ovos colhidos em menos de 24h antes da entrega',
      'Pausa e cancelamento a qualquer momento pelo WhatsApp',
      'Brinde surpresa no 3º mês de clube'
    ],
    inStock: true,
  },
];

export const FARM_STATS = [
  { value: '100%', label: 'Livre de Gaiolas', sublabel: 'Pasto aberto todo o dia' },
  { value: '0%', label: 'Antibióticos & Químicos', sublabel: 'Saúde natural das aves' },
  { value: '19 95331-2503', label: 'WhatsApp Direto', sublabel: 'Atendimento humanizado' },
  { value: '100%', label: 'Biodegradável', sublabel: 'Embalagens sem plástico' },
];

export const SUSTAINABILITY_PILLARS = [
  {
    title: 'Criação Solta e Pasto Regenerativo',
    description: 'Nossas galinhas têm acesso livre e diário a amplas pastagens verdes sob o sol. Elas ciscam, tomam banhos de terra, batem as asas e expressam seu comportamento natural com total dignidade.',
    icon: 'Sun',
  },
  {
    title: 'Alimentação 100% Limpa e Orgânica',
    description: 'Ração balanceada produzida com grãos certificados não transgênicos (sem OGM), enriquecida com folhas verdes frescas, sementes e insetos que elas mesmas encontram no pasto vivo.',
    icon: 'Wheat',
  },
  {
    title: 'Zero Gaiolas e Respeito Máximo',
    description: 'Rejeitamos categoricamente qualquer confinamento ou bico cortado (debicagem severa). Ninhos limpos, forrados com palha fresca e poleiros confortáveis para um descanso tranquilo.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Compromisso Ecológico & Circular',
    description: 'O esterco das aves é compostado e fertiliza pomares e hortas orgânicas locais. Nossas embalagens são 100% de fibra vegetal celulósica reciclada e compostável.',
    icon: 'Recycle',
  },
];
