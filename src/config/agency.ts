/**
 * Configurações da Cloud Creative - Agência de Soluções Digitais
 */

export const AGENCY_CONFIG = {
  name: "Cloud Creative",
  title: "Cloud Creative - Agência de Soluções Digitais",
  tagline: "Soluções digitais para empresas: Sites, Chatbots, Google e Design",
  
  // WhatsApp oficial da agência
  whatsappRaw: "5524992408893",
  whatsappDisplay: "(24) 99240-8893",
  
  // Instagram oficial
  instagramUsername: "sigacloudcreative",
  instagramUrl: "https://instagram.com/sigacloudcreative",
  
  // Email comercial
  email: "contato@cloudcreative.com.br",
  
  // Condições comerciais oficiais
  disclaimer: "Valores e prazos são estimativas em dias úteis sujeitas à confirmação de escopo, aprovação de briefing e recebimento dos materiais necessários.",
};

export function getWhatsAppUrl(customMessage?: string): string {
  const defaultMessage = "Olá! Gostaria de falar com a Cloud Creative sobre soluções digitais para minha empresa.";
  const text = encodeURIComponent(customMessage || defaultMessage);
  return `https://wa.me/${AGENCY_CONFIG.whatsappRaw}?text=${text}`;
}

export interface ServicePlan {
  id: string;
  name: string;
  badge?: string;
  price: string;
  priceNumber: number;
  deliveryTime: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export const SITES_PACKAGES: ServicePlan[] = [
  {
    id: "landing-page",
    name: "Landing page",
    price: "R$ 650",
    priceNumber: 650,
    deliveryTime: "5 a 7 dias úteis",
    description: "Página única com apresentação da empresa, informações essenciais e botão para contato pelo WhatsApp.",
    features: [
      "Página única com navegação em rolagem suave",
      "Apresentação da empresa e informações essenciais",
      "Botão de contato direto pelo WhatsApp",
      "Design moderno e responsivo (celular e PC)",
      "Carregamento ultra-rápido otimizado",
    ],
  },
  {
    id: "site-apresentacao",
    name: "Site de apresentação",
    badge: "Mais Buscado",
    price: "R$ 900",
    priceNumber: 900,
    deliveryTime: "7 a 10 dias úteis",
    recommended: true,
    description: "Galeria de fotos, serviços, localização com mapa, botão do WhatsApp e solicitação de agendamentos por mensagem.",
    features: [
      "Apresentação completa dos serviços da empresa",
      "Galeria de fotos e trabalhos",
      "Localização integrada com mapa interativo",
      "Botão direto do WhatsApp",
      "Solicitação de agendamentos por mensagem",
      "Design personalizado com a identidade da empresa",
    ],
  },
  {
    id: "site-completo",
    name: "Site completo",
    price: "R$ 1.800",
    priceNumber: 1800,
    deliveryTime: "10 a 15 dias úteis",
    description: "Até 5 páginas principais, catálogo de até 30 produtos e solicitações de pedidos pelo WhatsApp. Não inclui checkout ou pagamento on-line.",
    features: [
      "Até 5 páginas principais estruturadas",
      "Catálogo de até 30 produtos ou serviços",
      "Solicitações de pedidos pelo WhatsApp",
      "Sem intermediações de checkout ou pagamento on-line",
      "Página institucional, serviços, catálogo e contato",
      "Arquitetura profissional pronta para expansão",
    ],
  },
];

export const SITES_MAINTENANCE = [
  {
    id: "site-maint-essencial",
    name: "Essencial",
    price: "R$ 79/mês",
    priceNumber: 79,
    hours: "Até 30 minutos de trabalho por mês",
    features: [
      "Até 30 minutos de trabalho por mês",
      "Pequenas correções de conteúdo e textos",
      "Verificação básica do funcionamento do site",
    ],
  },
  {
    id: "site-maint-profissional",
    name: "Profissional",
    badge: "Recomendado",
    price: "R$ 149/mês",
    priceNumber: 149,
    recommended: true,
    hours: "Até 1h30 de trabalho por mês",
    features: [
      "Até 1h30 de trabalho por mês",
      "Atualização de fotos e textos",
      "Alterações em serviços e informações",
      "Verificação de formulários e botões",
    ],
  },
  {
    id: "site-maint-completo",
    name: "Completo",
    price: "R$ 249/mês",
    priceNumber: 249,
    hours: "Até 3 horas de trabalho por mês",
    features: [
      "Até 3 horas de trabalho por mês",
      "Todos os itens do plano Profissional",
      "Cadastro ou atualização de até 10 produtos por mês",
      "Verificação do fluxo de pedidos pelo WhatsApp",
    ],
  },
];

export const CHATBOT_PACKAGES: ServicePlan[] = [
  {
    id: "bot-basico",
    name: "Bot básico",
    price: "R$ 500",
    priceNumber: 500,
    deliveryTime: "3 a 5 dias úteis",
    description: "Menu de atendimento e respostas previamente configuradas para tirar dúvidas frequentes e triar contatos.",
    features: [
      "Menu de atendimento com opções numéricas",
      "Respostas previamente configuradas",
      "Informações sobre horários, endereço, serviços e produtos",
      "Mensagens automáticas de boas-vindas e ausência",
      "Encaminhamento para atendimento humano",
    ],
  },
  {
    id: "bot-ia",
    name: "Bot avançado com IA",
    badge: "Solução Inteligente",
    price: "R$ 800",
    priceNumber: 800,
    deliveryTime: "5 a 10 dias úteis",
    recommended: true,
    description: "Interpretação de perguntas em linguagem natural e respostas com base nas informações fornecidas pela empresa.",
    features: [
      "Interpretação de perguntas em linguagem natural",
      "Respostas com base nas informações fornecidas pela empresa",
      "Atendimento automático sobre serviços e produtos",
      "Encaminhamento para atendimento humano",
      "Testes de funcionamento e alinhamento de base",
    ],
  },
];

export const CHATBOT_MAINTENANCE = [
  {
    id: "bot-maint-basica",
    name: "Manutenção básica",
    price: "R$ 100/mês",
    priceNumber: 100,
    features: [
      "Suporte semanal",
      "Atualização mensal de informações e menus",
    ],
  },
  {
    id: "bot-maint-avancada",
    name: "Manutenção avançada",
    badge: "Completo",
    price: "R$ 200/mês",
    priceNumber: 200,
    recommended: true,
    features: [
      "Suporte em dias úteis",
      "Atualização semanal",
      "Revisão da base de conhecimento e dos ajustes da IA",
    ],
  },
];

export const GOOGLE_PACKAGES: ServicePlan[] = [
  {
    id: "google-criacao",
    name: "Criação e configuração",
    price: "R$ 200",
    priceNumber: 200,
    deliveryTime: "2 a 3 dias úteis para a configuração",
    description: "Cadastro completo da empresa no Google Maps e Pesquisa para facilitar que novos clientes encontrem seu negócio.",
    features: [
      "Cadastro e configuração do perfil",
      "Definição da categoria da empresa",
      "Descrição comercial otimizada",
      "Horários de atendimento e telefones de contato",
      "Inclusão de serviços e produtos",
      "Organização de fotos fornecidas pelo cliente",
      "Orientação passo a passo sobre verificação",
    ],
  },
  {
    id: "google-otimizacao",
    name: "Otimização de perfil existente",
    price: "R$ 100",
    priceNumber: 100,
    deliveryTime: "1 a 2 dias úteis",
    description: "Revisão e atualização das informações para garantir que sua empresa apareça com dados corretos e profissionais.",
    features: [
      "Revisão detalhada de todas as informações",
      "Ajuste de categorias e descrição comercial",
      "Atualização de serviços e horários",
      "Revisão de contatos, fotos e links para WhatsApp",
    ],
  },
];

export const SOCIAL_PACKAGES: ServicePlan[] = [
  {
    id: "social-1-arte",
    name: "1 arte avulsa",
    price: "R$ 30",
    priceNumber: 30,
    deliveryTime: "1 a 2 dias úteis",
    description: "Arte estática avulsa para feed ou Stories com design profissional sob medida.",
    features: [
      "1 arte estática para feed ou Stories",
      "Arquivos finais em alta resolução PNG/JPG",
      "Uma rodada de ajustes simples incluída",
      "O cliente fornece informações, textos, fotos e logotipo",
    ],
  },
  {
    id: "social-5-artes",
    name: "Pacote com 5 artes",
    badge: "R$ 24 por arte",
    price: "R$ 120",
    priceNumber: 120,
    deliveryTime: "3 a 4 dias úteis",
    recommended: true,
    description: "Ideal para campanhas, promoções, avisos e anúncios semanais nas redes sociais.",
    features: [
      "5 artes estáticas para feed ou Stories",
      "Economia de R$ 6 por arte em relação ao avulso",
      "Arquivos finais em alta resolução PNG/JPG",
      "Uma rodada de ajustes simples incluída",
      "O cliente fornece informações, textos, fotos e logotipo",
    ],
  },
  {
    id: "social-10-artes",
    name: "Pacote com 10 artes",
    badge: "R$ 20 por arte",
    price: "R$ 200",
    priceNumber: 200,
    deliveryTime: "5 a 7 dias úteis",
    description: "Melhor custo-benefício para manter sua marca ativa com visual profissional o mês todo.",
    features: [
      "10 artes estáticas para feed ou Stories",
      "Economia de R$ 10 por arte em relação ao avulso",
      "Arquivos finais em alta resolução PNG/JPG",
      "Uma rodada de ajustes simples incluída",
      "O cliente fornece informações, textos, fotos e logotipo",
    ],
  },
];

export const GENERAL_PRICING_SUMMARY = {
  initial: [
    { service: "Landing page", price: "R$ 650", time: "5–7 dias úteis" },
    { service: "Site de apresentação", price: "R$ 900", time: "7–10 dias úteis" },
    { service: "Site completo (até 5 páginas + 30 produtos)", price: "R$ 1.800", time: "10–15 dias úteis" },
    { service: "Bot básico para atendimento", price: "R$ 500", time: "3–5 dias úteis" },
    { service: "Bot avançado com IA", price: "R$ 800", time: "5–10 dias úteis" },
    { service: "Criação de Perfil no Google", price: "R$ 200", time: "2–3 dias úteis" },
    { service: "Otimização de Perfil no Google", price: "R$ 100", time: "1–2 dias úteis" },
    { service: "1 arte para redes sociais", price: "R$ 30", time: "1–2 dias úteis" },
    { service: "Pacote com 5 artes", price: "R$ 120", time: "3–4 dias úteis" },
    { service: "Pacote com 10 artes", price: "R$ 200", time: "5–7 dias úteis" },
  ],
  maintenance: [
    { service: "Manutenção de Site Essencial", price: "R$ 79/mês", scope: "Até 30 min/mês" },
    { service: "Manutenção de Site Profissional", price: "R$ 149/mês", scope: "Até 1h30/mês" },
    { service: "Manutenção de Site Completo", price: "R$ 249/mês", scope: "Até 3h/mês" },
    { service: "Manutenção de Bot Básico", price: "R$ 100/mês", scope: "Suporte semanal + atualização mensal" },
    { service: "Manutenção de Bot Avançado", price: "R$ 200/mês", scope: "Suporte dias úteis + revisão IA" },
  ],
};

export const FAQ_ITEMS = [
  {
    q: "Quais serviços a Cloud Creative oferece?",
    a: "Somos uma agência de soluções digitais especializada em quatro frentes para empresas: 1) Criação de Sites (Landing page, Site de apresentação e Site completo); 2) Chatbots para Atendimento (básico e avançado com IA); 3) Perfil da Empresa no Google (criação e otimização); e 4) Criação de artes para redes sociais.",
  },
  {
    q: "Como funciona a contratação de um site?",
    a: "Você escolhe o formato ideal para seu momento comercial (Landing page R$ 650, Site de apresentação R$ 900 ou Site completo R$ 1.800). Após a confirmação inicial do pagamento e envio dos materiais e aprovação do briefing, o prazo em dias úteis começa a contar.",
  },
  {
    q: "A manutenção está incluída no valor do site?",
    a: "Não. A manutenção é um serviço opcional contratado à parte através dos planos mensais (Essencial R$ 79/mês, Profissional R$ 149/mês ou Completo R$ 249/mês). As horas mensais não acumulam. Custos de domínio, hospedagem e licenças não estão incluídos.",
  },
  {
    q: "O site completo permite pagamento on-line?",
    a: "Não. O site completo de R$ 1.800 inclui até 5 páginas e catálogo de até 30 produtos com pedidos enviados diretamente para o WhatsApp da empresa. Não inclui checkout com cartão ou gateways de pagamento, o que elimina taxas de intermediação e facilita a venda direta.",
  },
  {
    q: "Como funciona o chatbot com inteligência artificial?",
    a: "O Bot avançado com IA (R$ 800) compreende perguntas feitas em linguagem natural e responde de acordo com as informações e regras do seu negócio (horários, serviços, produtos, dúvidas comuns). Se necessário, ele transfere a conversa para um atendente humano da sua equipe.",
  },
  {
    q: "O chatbot funciona sem custos adicionais de plataforma?",
    a: "A implantação do bot é o serviço da Cloud Creative. Custos externos como plataformas de automação, consumo de tokens de API de IA e cobranças oficiais do WhatsApp Business, quando aplicáveis, são cobrados separadamente pelas provedoras correspondentes.",
  },
  {
    q: "A Cloud Creative garante que minha empresa ficará em 1º no Google?",
    a: "Não. Nenhuma agência séria pode garantir posicionamento no ranking de busca ou volume de avaliações, pois isso depende exclusivamente dos critérios do Google. Nosso trabalho garante que todas as suas informações estejam completas, corretas, categorizadas e profissionais.",
  },
  {
    q: "Posso contratar apenas uma arte para redes sociais?",
    a: "Sim! Você pode contratar 1 arte avulsa por R$ 30, ou optar pelos pacotes de 5 artes (R$ 120) ou 10 artes (R$ 200). Não há mensalidade obrigatória para artes, você solicita pacotes conforme a sua necessidade de divulgação.",
  },
  {
    q: "Como são definidos e contados os prazos?",
    a: "Todos os prazos são expressos em dias úteis e começam a contar oficialmente após: 1) Pagamento inicial; 2) Envio de todos os materiais (textos, fotos, logo); e 3) Aprovação formal do briefing.",
  },
  {
    q: "Como solicitar um orçamento personalizado?",
    a: "Basta clicar em qualquer botão de WhatsApp no site ou utilizar nosso Simulador de Proposta. Você nos informa o que sua empresa precisa e nós formalizamos o escopo com agilidade.",
  },
];
