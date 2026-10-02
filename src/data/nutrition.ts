export interface NutrientDetail {
  name: string;
  amountPerPortion: string;
  percentDailyValue: string;
  category: 'Proteínas' | 'Vitaminas' | 'Minerais' | 'Antioxidantes' | 'Gorduras Boas';
  benefit: string;
  highlight?: boolean;
}

export const NUTRIENTS_LIST: NutrientDetail[] = [
  {
    name: 'Proteína de Alto Valor Biológico',
    amountPerPortion: '13.0 g (2 ovos)',
    percentDailyValue: '26%',
    category: 'Proteínas',
    benefit: 'Contém todos os 9 aminoácidos essenciais com índice de digestibilidade perfeito (PDCAAS 1.0). Auxilia na síntese muscular, reparo de tecidos e saciedade duradoura.',
    highlight: true,
  },
  {
    name: 'Colina (Vitamina do Complexo B)',
    amountPerPortion: '294 mg',
    percentDailyValue: '55%',
    category: 'Vitaminas',
    benefit: 'Fundamental para a produção de acetilcolina (neurotransmissor de memória, aprendizado e humor). Essencial na gestação para o neurodesenvolvimento fetal e saúde do fígado.',
    highlight: true,
  },
  {
    name: 'Luteína & Zeaxantina',
    amountPerPortion: '560 mcg',
    percentDailyValue: 'Poderoso Carotenoide',
    category: 'Antioxidantes',
    benefit: 'Antioxidantes específicos da retina que filtram a luz azul e previnem a degeneração macular e catarata. Em ovos de pasto, a absorção é até 3x superior graças aos lipídios naturais da gema.',
    highlight: true,
  },
  {
    name: 'Vitamina D3 Natural',
    amountPerPortion: '120 - 240 UI',
    percentDailyValue: '30% - 60%',
    category: 'Vitaminas',
    benefit: 'Como nossas galinhas tomam sol livre no pasto o dia todo, sintetizam até 4 a 6 vezes mais Vitamina D ativa do que galinhas confinadas em galpões escuros. Crucial para imunidade e fixação de cálcio.',
    highlight: true,
  },
  {
    name: 'Vitamina B12 (Cobalamina)',
    amountPerPortion: '1.6 mcg',
    percentDailyValue: '67%',
    category: 'Vitaminas',
    benefit: 'Vital para a formação de hemácias (glóbulos vermelhos), síntese de DNA e manutenção do sistema neurológico saudável.',
  },
  {
    name: 'Ácido Fólico (Vitamina B9)',
    amountPerPortion: '48 mcg',
    percentDailyValue: '12%',
    category: 'Vitaminas',
    benefit: 'Auxilia na renovação celular e saúde cardiovascular reduzindo a homocisteína no sangue.',
  },
  {
    name: 'Ômega-3 (DHA & EPA)',
    amountPerPortion: '150 - 220 mg',
    percentDailyValue: 'Fonte Natural',
    category: 'Gorduras Boas',
    benefit: 'Proveniente do consumo natural de trevos, gramíneas e sementes no pasto. Ação anti-inflamatória, protege o coração e turbina as conexões neurais.',
    highlight: true,
  },
  {
    name: 'Selênio',
    amountPerPortion: '30 mcg',
    percentDailyValue: '55%',
    category: 'Minerais',
    benefit: 'Potente antioxidante que protege as células contra estresse oxidativo e otimiza a função da tireoide.',
  },
  {
    name: 'Zinco & Ferro Heme',
    amountPerPortion: '1.3 mg Zinco / 1.8 mg Ferro',
    percentDailyValue: '18% / 13%',
    category: 'Minerais',
    benefit: 'Ferro de alta biodisponibilidade e zinco fundamental para o fortalecimento do sistema imune e metabolismo energético.',
  },
  {
    name: 'Vitamina A (Retinol)',
    amountPerPortion: '180 mcg',
    percentDailyValue: '20%',
    category: 'Vitaminas',
    benefit: 'Mantém a saúde da pele, mucosas e integridade do sistema imunológico.',
  },
];

export const COMPARISON_DATA = [
  {
    feature: 'Ambiente das Galinhas',
    thomazPrado: 'Livres no pasto verde, sol natural, poleiros e banho de terra',
    convencional: 'Gaiolas empilhadas de 400cm² ou galpões superlotados com luz artificial',
  },
  {
    feature: 'Alimentação',
    thomazPrado: 'Grãos 100% orgânicos, capim fresco, trevo, sementes e insetos',
    convencional: 'Ração convencional com milho/soja transgênica e corantes químicos',
  },
  {
    feature: 'Vitamina D (Sol)',
    thomazPrado: 'Até 4x a 6x mais Vitamina D por exposição ao sol pleno',
    convencional: 'Níveis mínimos, apenas o adicionado quimicamente na ração',
  },
  {
    feature: 'Cor e Sabor da Gema',
    thomazPrado: 'Amarelo-ouro profundo a laranja vivo natural de carotenoides do pasto',
    convencional: 'Corante industrial adicionado à ração para imitar a cor de ovo caipira',
  },
  {
    feature: 'Gorduras Ômega-3',
    thomazPrado: 'Até 3x mais ácidos graxos essenciais benéficos anti-inflamatórios',
    convencional: 'Maior proporção de Ômega-6 pró-inflamatório',
  },
  {
    feature: 'Resíduos Químicos',
    thomazPrado: 'ZERO pesticidas, agrotóxicos ou antibióticos profiláticos',
    convencional: 'Risco de resíduos de defensivos agrícolas e antibióticos industriais',
  },
  {
    feature: 'Embalagem',
    thomazPrado: '100% fibra celulósica reciclada e compostável na sua horta',
    convencional: 'Geralmente plástico descartável não biodegradável',
  },
];

export const MYTHS_AND_FACTS = [
  {
    myth: 'Mito: "Comer gema todo dia aumenta perigosamente o colesterol sanguíneo"',
    fact: 'A ciência moderna comprovou que o colesterol dietético presente no ovo tem impacto insignificante no colesterol sanguíneo para 85% da população. O ovo orgânico contém lecitina e colina, que inclusive auxiliam no transporte e metabolismo saudável das gorduras!',
  },
  {
    myth: 'Mito: "A cor da gema pode ser avaliada apenas pela aparência"',
    fact: 'Em ovos industriais convencionais, as indústrias misturam pigmentantes sintéticos (carofil vermelho/amarelo) na ração. Na Fazenda Thomaz Prado, a tonalidade rica vem 100% dos trevos, folhas frescas e sementes naturais que as galinhas comem livres no pasto.',
  },
  {
    myth: 'Mito: "Ovos orgânicos precisam ser lavados assim que chegam em casa"',
    fact: 'A casca do ovo possui uma película protetora natural impermeabilizante chamada cutícula, que bloqueia bactérias. Se você lavar o ovo com água e sabão, a cutícula se rompe. Lave apenas segundos antes de quebrar e preparar!',
  },
];
