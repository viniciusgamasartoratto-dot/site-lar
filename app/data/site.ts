export const site = {
  name: "Lar Itatibense da Criança",
  shortName: "Lar Itatibense",
  email: "lar@laritatibense.org.br",
  phones: ["(11) 4538-0474", "(11) 4534-2416"],
  phoneLinks: ["+551145380474", "+551145342416"],
  address: "Rua Alfredo de Oliveira Coelho, 139 — Jardim Carlos Borella",
  city: "Itatiba/SP",
  postalCode: "CEP 13253-212",
} as const;

export const navigation = [
  { href: "/", label: "Início" },
  { href: "/sobre-o-lar", label: "Sobre o Lar" },
  { href: "/programa-cre-ser", label: "Programa Crê-Ser", featured: false },
  { href: "/estrutura", label: "Estrutura" },
  { href: "/salao", label: "Salão de eventos" },
  { href: "/como-ajudar", label: "Como ajudar" },
  { href: "/transparencia", label: "Transparência" },
] as const;

export const socialLinks = [
  {
    name: "Instagram",
    handle: "@laritatibense",
    href: "https://www.instagram.com/laritatibense/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    handle: "Lar Itatibense da Criança",
    href: "https://www.facebook.com/pages/Lar%20Itatibense%20Da%20Crian%C3%A7a/260450417494239/",
    icon: "facebook",
  },
] as const;

export const institutionalFacts = [
  {
    eyebrow: "Nossa história",
    value: "Desde 1952",
    title: "Presença que atravessa gerações",
    description: "As atividades começaram em 30 de julho de 1952 e seguem conectadas à comunidade itatibense.",
  },
  {
    eyebrow: "Quem acolhemos",
    value: "0 a 17 anos",
    suffix: "e 11 meses",
    title: "Proteção para a infância e a adolescência",
    description: "Crianças e adolescentes encaminhados pelo Poder Judiciário como medida de proteção.",
  },
] as const;

export const structureImages = [
  { src: "/images/sede-jogos.jpeg", alt: "Espaço da sede com mesas de jogos e mural de animais", title: "Espaço de jogos" },
  { src: "/images/sede-convivencia.jpeg", alt: "Salão da sede com sofás e mesas de convivência", title: "Espaço de convivência" },
] as const;

export const partners = [
  "Dra. Juliane Dorini — Dentista",
  "Dra. Lia Marchi — Dentista",
  "Dra. Vanessa Fagundes (Coiffe Odonto) — Dentista",
  "Dr. Luiz Antônio Corazza — Oftalmologista",
  "Odete Salgados — Bolos e salgados",
  "Danny Hair — Corte de cabelo",
  "Casa do Arteiro — Aula de artes",
  "Renan — RR Tênis",
  "Dr. Leonardo De Gasperi — Médico",
  "Dr. Thiago Castelletto — Fisioterapeuta",
  "Marcela — Personal",
  "Sodiê Doces — Bolos",
  "Alves e Dutra — Corte de cabelo",
  "Unip — Cursos superiores",
  "Rose Bolos — Bolos",
  "Academia Forma — Exercícios físicos",
  "Emerson — Jiu-jítsu",
] as const;

export const directors = [
  { name: "Washington Panzarin", role: "Presidente Executivo", photo: "/images/diretoria/washington-panzarin.jpg" },
  { name: "Roberto Morini", role: "Vice-Presidente", photo: "/images/diretoria/roberto-morini.jpg" },
  { name: "Israel Petti", role: "Secretário", photo: "/images/diretoria/israel-petti.jpg" },
  { name: "Marco A. Vendramini", role: "Secretário", photo: "/images/diretoria/marco-vendramini.jpg" },
  { name: "Arnaldo Pereira", role: "Tesoureiro", photo: "/images/diretoria/arnaldo-pereira.jpg" },
  { name: "José C. Osso", role: "Tesoureiro", photo: "/images/diretoria/jose-osso.jpg" },
  { name: "José L. Sesti", role: "Patrimônio", photo: "/images/diretoria/jose-sesti.jpg" },
] as const;

export const fiscalCouncil = [
  "Elcias de Sousa",
  "Natal José Stocco",
  "José Donizetti da Cunha",
] as const;

type TransparencyDocument = {
  title: string;
  category: string;
  description: string;
  date: string;
  fileMeta: string;
  href: string;
  source: "local" | "external";
};

// Para publicar um novo PDF, copie o arquivo para public/documentos e adicione
// uma entrada com source: "local". Veja docs/COMO-ADICIONAR-PDFS.md.
export const transparencyDocuments = [
  {
    title: "Balanço patrimonial — exercício 2024",
    category: "Prestação de contas",
    description: "Balanço encerrado em 31 de dezembro de 2024, com comparativo do exercício anterior e notas explicativas.",
    date: "31/12/2024",
    fileMeta: "PDF · 2 páginas · 230 KB",
    href: "/documentos/balanco.pdf",
    source: "local",
  },
  {
    title: "Estatuto Social",
    category: "Institucional",
    description: "Documento que estabelece as regras de funcionamento e governança da instituição.",
    date: "Data não informada",
    fileMeta: "PDF · 3,2 MB",
    href: "/documentos/estatuto.pdf",
    source: "local",
  },
  {
    title: "Certidão Negativa de Débitos",
    category: "Certidão",
    description: "Certidão de regularidade da instituição.",
    date: "Data não informada",
    fileMeta: "PDF · 127 KB",
    href: "/documentos/certidao_negativa_debitos.pdf",
    source: "local",
  },
  {
    title: "Certificado de Regularidade",
    category: "Certificado",
    description: "Comprovante de regularidade da instituição.",
    date: "Data não informada",
    fileMeta: "PDF · 132 KB",
    href: "/documentos/certificado_regularidade.pdf",
    source: "local",
  },
  {
    title: "CNPJ",
    category: "Institucional",
    description: "Comprovante de inscrição e situação cadastral da instituição.",
    date: "Data não informada",
    fileMeta: "PDF · 130 KB",
    href: "/documentos/cnpj.pdf",
    source: "local",
  },
  {
    title: "Assembleias",
    category: "Governança",
    description: "Registros de assembleias da instituição.",
    date: "Data não informada",
    fileMeta: "PDF · 162 KB",
    href: "/documentos/assembleias.pdf",
    source: "local",
  },
] satisfies readonly TransparencyDocument[];

export const programHighlights = [
  {
    number: "01",
    title: "Acesso pela comunidade",
    text: "O Programa Crê-Ser é aberto à comunidade itatibense e recebe demandas relacionadas à infância.",
  },
  {
    number: "02",
    title: "Encaminhamento em rede",
    text: "Recebe encaminhamentos de órgãos que atuam diante de situações de risco social e vulnerabilidade.",
  },
  {
    number: "03",
    title: "Acompanhamento psicossocial",
    text: "Acompanha crianças e suas famílias quando há necessidade de atendimento especializado.",
  },
] as const;

export const pendingConfirmation = [
  "Dados bancários e chave Pix para doações financeiras",
  "Fluxo detalhado e documentos necessários para encaminhamento ao Programa Crê-Ser",
  "Relação atual de oficinas, atividades, horários e vagas do Programa Crê-Ser",
  "Composição e áreas profissionais atuais da equipe do Programa Crê-Ser",
  "Indicadores e resultados recentes do programa",
  "Horários atualizados de atendimento administrativo e de recebimento de doações",
  "Canal oficial de WhatsApp",
  "Logotipos, descrições e links atualizados dos parceiros",
  "Datas, versões e arquivos definitivos dos documentos de transparência",
] as const;

// Inclua somente empresas apoiadoras do Programa Crê-Ser.
export const programSupporters: { name: string; logo?: string; description?: string; url?: string }[] = [];
