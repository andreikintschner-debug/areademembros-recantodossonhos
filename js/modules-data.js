/**
 * ============================================================================
 * RECANTO DOS SONHOS — DADOS DOS MÓDULOS
 * ============================================================================
 * Este ficheiro é a ÚNICA fonte de dados do site. A página inicial (index.html)
 * e a página de módulo (modulo.html) leem tudo a partir daqui.
 *
 * Cada módulo é apenas: título, capa e o e-book em PDF. Não há aulas nem vídeos.
 *
 * PARA ADICIONAR UM MÓDULO NOVO:
 *   1. Copia um objeto do array MODULES abaixo.
 *   2. Muda o "id" (tem de ser único e sem espaços — usa hífenes).
 *   3. Preenche "categoria" com um destes valores: "espaco" | "estilo" | "materiais".
 *   4. Preenche "titulo", "capa" e "material".
 *
 * PDF DO MÓDULO ("material"):
 *   Cada módulo tem UM PDF, alojado no Google Drive. Basta preencher o
 *   "driveId" (o código que aparece no link de partilha do ficheiro,
 *   em .../d/ESTE_CÓDIGO/view) — os links de "Ver" e "Descarregar" são
 *   gerados automaticamente a partir dele (ver js/modulo.js):
 *     Ver:         https://drive.google.com/file/d/{driveId}/preview
 *     Descarregar: https://drive.google.com/uc?export=download&id={driveId}
 *   Para o PDF funcionar, o ficheiro no Drive tem de estar partilhado como
 *   "Qualquer pessoa com o link" (permissão de leitura).
 *
 * -----------------------------------------------------------------------
 * ⚠️ AVISO DE PRIVACIDADE (LER ANTES DE PUBLICAR)
 * -----------------------------------------------------------------------
 * Este site NÃO tem sistema de login. Qualquer pessoa com o link do site
 * consegue ver TODO o conteúdo. Por isso:
 *   - Não partilhes o link do site em locais públicos (redes sociais,
 *     grupos abertos, motores de busca). Trata o link como uma senha.
 *   - Os PDFs ("material.driveId") ficam acessíveis a quem tiver o link
 *     do ficheiro no Drive — usa sempre a partilha "Qualquer pessoa com
 *     o link", nunca "Público na Web" (que permite ser indexado).
 * -----------------------------------------------------------------------
 */

const MODULES = [

  /* ============================= POR ESPAÇO ============================= */

  {
    id: "corredores-laterais",
    categoria: "espaco",
    titulo: "Corredores Laterais",
    // Capa 1920x1080 — imagem de um corredor lateral de jardim já ajardinado
    capa: "assets/capas/corredores-laterais.jpg",
    descricao: "Transforma aquele espaço estreito e esquecido ao lado da casa num corredor verde e convidativo.",
    material: { driveId: "1DK2TArNFqMFcqzpwdA9hQovvHHzYrO5F" }
  },

  {
    id: "quintais-pequenos",
    categoria: "espaco",
    titulo: "Quintais Pequenos",
    capa: "assets/capas/quintais-pequenos.jpg",
    descricao: "Ideias e projetos para aproveitar ao máximo quintais compactos, sem parecerem apertados.",
    material: { driveId: "1SrM4NCYld-TXJ9vFSb77dx16G-sgj4vo" }
  },

  {
    id: "frentes-de-casa",
    categoria: "espaco",
    titulo: "Frentes de Casa",
    capa: "assets/capas/frentes-de-casa.jpg",
    descricao: "Cria uma primeira impressão memorável com a entrada da tua casa.",
    material: { driveId: "1fZBcWj-wkQRFlF-pkTDppA7gRJbVysks" }
  },

  {
    id: "zonas-convivio-exterior",
    categoria: "espaco",
    titulo: "Zonas de Convívio Exterior",
    capa: "assets/capas/zonas-convivio-exterior.jpg",
    descricao: "Cria o espaço perfeito para reunir família e amigos ao ar livre.",
    material: { driveId: "1O-qcsiqAu4cER0cO0Nk94ijUH9K2er2v" }
  },

  {
    id: "varandas",
    categoria: "espaco",
    titulo: "Varandas",
    capa: "assets/capas/varandas.jpg",
    descricao: "Jardins compactos e cheios de vida, feitos à medida de varandas e terraços.",
    material: { driveId: "1A_sqMCYFSIfY7UdW-qyJ04AA3Yo3xhQv" }
  },

  /* ===================== POR ESTILO E ORÇAMENTO ===================== */

  {
    id: "jardins-economicos",
    categoria: "estilo",
    titulo: "Jardins Económicos (até 100€)",
    capa: "assets/capas/jardins-economicos.jpg",
    descricao: "Projetos completos com orçamento até 100€, sem abdicar do bom gosto.",
    material: { driveId: "1tsIQdW50WRQqWwz686MYfm7D1NJYOuHw" }
  },

  {
    id: "jardins-modernos",
    categoria: "estilo",
    titulo: "Jardins Modernos",
    capa: "assets/capas/jardins-modernos.jpg",
    descricao: "Linhas limpas, materiais contemporâneos e plantação minimalista.",
    material: { driveId: "1xNcA80IvMEDd1tX0xGWHAkxiNKGRC7lf" }
  },

  {
    id: "jardins-premium",
    categoria: "estilo",
    titulo: "Jardins Premium (até 400€)",
    capa: "assets/capas/jardins-premium.jpg",
    descricao: "Projetos sofisticados com um orçamento mais alargado, até 400€.",
    material: { driveId: "1RZreywnMBhADsflbOdhIOd57kY1lvuWz" }
  },

  {
    id: "projetos-especiais",
    categoria: "estilo",
    titulo: "Projetos Especiais",
    capa: "assets/capas/projetos-especiais.jpg",
    descricao: "Projetos únicos para situações fora do comum: terrenos irregulares, desníveis e mais.",
    material: { driveId: "1qJ10Gx5zHW72ZgNRT0EEWSzCD0r9ZAj1" }
  },

  /* ===================== MATERIAIS E BÓNUS ===================== */

  {
    id: "manual-execucao",
    categoria: "materiais",
    titulo: "Manual de Execução",
    capa: "assets/capas/manual-execucao.jpg",
    descricao: "O manual completo com todas as técnicas usadas em todos os projetos do Recanto dos Sonhos.",
    material: { driveId: "1YzQrp3Dj8y-CpspP1CspfI5tXVtOQHVD" }
  },

  {
    id: "60-novos-projetos",
    categoria: "materiais",
    titulo: "60 Novos Projetos",
    capa: "assets/capas/60-novos-projetos.jpg",
    descricao: "Uma coleção de 60 projetos adicionais para te inspirares e duplicares no teu jardim.",
    material: { driveId: "1Ah3toGJQwDPvnjF663IClbZRlRfMavni" }
  },

  {
    id: "bonus-checklist-compras",
    categoria: "materiais",
    titulo: "Bónus 1: Checklist de Compras por Orçamento",
    capa: "assets/capas/bonus-checklist-compras.jpg",
    descricao: "A checklist definitiva para nunca comprares a mais (nem a menos) para o teu projeto.",
    material: { driveId: "18RDOZ-idJTKYYxtMz3qtnmumuhQzEBe9" }
  },

  {
    id: "bonus-guia-plantas-resistentes-calor",
    categoria: "materiais",
    titulo: "Bónus 2: Guia de Plantas Resistentes ao Calor",
    capa: "assets/capas/bonus-guia-plantas-calor.jpg",
    descricao: "As melhores plantas para jardins que enfrentam verões quentes e secos.",
    material: { driveId: "1bcBaM0lFiFFOhdlyHHsYvePyngyhILN1" }
  },

  {
    id: "bonus-guia-manutencao-facil",
    categoria: "materiais",
    titulo: "Bónus 3: Guia de Manutenção Fácil do Jardim",
    capa: "assets/capas/bonus-guia-manutencao.jpg",
    descricao: "Mantém o teu jardim bonito ao longo do ano com o mínimo de esforço.",
    material: { driveId: "1Ld0kOyCCB7Xq3Uz6dFiM9nLlRyfm0Uy1" }
  }

];

// Nomes visíveis e ordem das secções da página inicial.
const CATEGORIAS = [
  { chave: "espaco", titulo: "Por Espaço" },
  { chave: "estilo", titulo: "Por Estilo e Orçamento" },
  { chave: "materiais", titulo: "Materiais e Bónus" }
];
