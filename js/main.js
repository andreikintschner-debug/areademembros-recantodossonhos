/**
 * RECANTO DOS SONHOS — PÁGINA INICIAL
 * Constrói as 3 secções de módulos (Por Espaço / Por Estilo e Orçamento /
 * Materiais e Bónus) a partir dos dados em js/modules-data.js.
 * Não é preciso mexer neste ficheiro para adicionar módulos — basta editar
 * modules-data.js.
 */

(function () {
  "use strict";

  const PLACEHOLDER_CAPA = "assets/placeholder-capa.svg";

  function marcarImagemComoRecebida(imgEl, fallbackSrc) {
    imgEl.addEventListener("error", function () {
      if (imgEl.src.indexOf(fallbackSrc) === -1) {
        imgEl.src = fallbackSrc;
      }
    });
  }

  function criarCardModulo(modulo) {
    const link = document.createElement("a");
    link.className = "card-modulo";
    link.href = "modulo.html?id=" + encodeURIComponent(modulo.id);

    const capaWrap = document.createElement("div");
    capaWrap.className = "card-cover";

    const img = document.createElement("img");
    // Capa 1920x1080 do módulo "${modulo.titulo}" — substitui pelo ficheiro final
    img.src = modulo.capa;
    img.alt = "Capa do módulo " + modulo.titulo;
    img.loading = "lazy";
    marcarImagemComoRecebida(img, PLACEHOLDER_CAPA);
    capaWrap.appendChild(img);

    const corpo = document.createElement("div");
    corpo.className = "card-corpo";

    const titulo = document.createElement("h3");
    titulo.textContent = modulo.titulo;

    const desc = document.createElement("p");
    desc.className = "card-desc";
    desc.textContent = modulo.descricao || "";

    corpo.appendChild(titulo);
    corpo.appendChild(desc);

    link.appendChild(capaWrap);
    link.appendChild(corpo);

    return link;
  }

  function criarSeccao(categoria) {
    const modulosDaCategoria = MODULES.filter(function (m) {
      return m.categoria === categoria.chave;
    });

    if (modulosDaCategoria.length === 0) {
      return null;
    }

    const secao = document.createElement("section");
    secao.className = "modules-section";

    const cabecalho = document.createElement("div");
    cabecalho.className = "section-heading";

    const h2 = document.createElement("h2");
    h2.textContent = categoria.titulo;

    const linha = document.createElement("div");
    linha.className = "linha";
    linha.setAttribute("aria-hidden", "true");

    cabecalho.appendChild(h2);
    cabecalho.appendChild(linha);

    const grelha = document.createElement("div");
    grelha.className = "grid-modulos";

    modulosDaCategoria.forEach(function (modulo) {
      grelha.appendChild(criarCardModulo(modulo));
    });

    secao.appendChild(cabecalho);
    secao.appendChild(grelha);

    return secao;
  }

  function iniciar() {
    const raiz = document.getElementById("modulos-raiz");
    CATEGORIAS.forEach(function (categoria) {
      const secao = criarSeccao(categoria);
      if (secao) {
        raiz.appendChild(secao);
      }
    });

    const anoEl = document.getElementById("ano-atual");
    if (anoEl) {
      anoEl.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
