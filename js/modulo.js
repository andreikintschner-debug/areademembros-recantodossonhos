/**
 * RECANTO DOS SONHOS — PÁGINA DE MÓDULO (template único, reutilizado por todos os módulos)
 * Lê o parâmetro ?id= do URL, vai buscar o módulo correspondente a
 * js/modules-data.js e constrói o banner e o cartão do e-book (PDF) do módulo.
 */

(function () {
  "use strict";

  const PLACEHOLDER_CAPA = "assets/placeholder-capa.svg";

  // A partir do driveId (ver js/modules-data.js), gera os links de Ver/Descarregar do Google Drive.
  function linkVerDrive(driveId) {
    return "https://drive.google.com/file/d/" + driveId + "/preview";
  }

  function linkDescarregarDrive(driveId) {
    return "https://drive.google.com/uc?export=download&id=" + driveId;
  }

  function obterIdModuloDoUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function escapeHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto;
    return div.innerHTML;
  }

  function renderizarNaoEncontrado(raiz) {
    raiz.innerHTML =
      '<div class="container aviso-modulo-inexistente">' +
      "<h1>Módulo não encontrado</h1>" +
      "<p>O módulo que procuras pode ter sido movido ou o link está incorreto.</p>" +
      '<a class="botao botao-dourado" href="index.html">← Voltar aos módulos</a>' +
      "</div>";
  }

  function renderizarBanner(modulo) {
    const secao = document.createElement("section");
    secao.className = "module-banner";

    const img = document.createElement("img");
    // Capa 1920x1080 do módulo "${modulo.titulo}" — substitui pelo ficheiro final
    img.src = modulo.capa;
    img.alt = "";
    img.setAttribute("aria-hidden", "true");
    img.addEventListener("error", function () {
      if (img.src.indexOf(PLACEHOLDER_CAPA) === -1) {
        img.src = PLACEHOLDER_CAPA;
      }
    });

    const overlay = document.createElement("div");
    overlay.className = "module-banner-overlay";
    overlay.innerHTML =
      '<div class="container">' +
      '<span class="eyebrow">Módulo</span>' +
      "<h1>" + escapeHtml(modulo.titulo) + "</h1>" +
      "<p>" + escapeHtml(modulo.descricao || "") + "</p>" +
      "</div>";

    secao.appendChild(img);
    secao.appendChild(overlay);
    return secao;
  }

  function renderizarMaterial(modulo) {
    if (!modulo.material || !modulo.material.driveId) return null;

    const driveId = modulo.material.driveId;

    const card = document.createElement("div");
    card.className = "material-card";

    const icone = document.createElement("span");
    icone.className = "material-icone";
    icone.setAttribute("aria-hidden", "true");
    icone.textContent = "📄";

    const info = document.createElement("div");
    info.className = "material-info";
    info.innerHTML =
      "<h2>" + escapeHtml(modulo.titulo) + "</h2>" +
      "<p>E-book em PDF deste módulo</p>";

    const botaoAcoes = document.createElement("div");
    botaoAcoes.className = "material-acoes";

    const botaoVer = document.createElement("a");
    botaoVer.href = linkVerDrive(driveId);
    botaoVer.target = "_blank";
    botaoVer.rel = "noopener noreferrer";
    botaoVer.className = "botao botao-contorno";
    botaoVer.textContent = "👁 Ver";

    const botaoDescarregar = document.createElement("a");
    botaoDescarregar.href = linkDescarregarDrive(driveId);
    botaoDescarregar.className = "botao botao-dourado";
    botaoDescarregar.textContent = "⬇ Descarregar";

    botaoAcoes.appendChild(botaoVer);
    botaoAcoes.appendChild(botaoDescarregar);

    card.appendChild(icone);
    card.appendChild(info);
    card.appendChild(botaoAcoes);

    return card;
  }

  function renderizarModulo(modulo) {
    const raiz = document.getElementById("modulo-raiz");
    raiz.innerHTML = "";

    raiz.appendChild(renderizarBanner(modulo));

    const container = document.createElement("div");
    container.className = "container module-content";

    const voltar = document.createElement("a");
    voltar.href = "index.html";
    voltar.className = "botao botao-contorno botao-voltar";
    voltar.textContent = "← Voltar aos módulos";
    container.appendChild(voltar);

    const material = renderizarMaterial(modulo);
    if (material) container.appendChild(material);

    raiz.appendChild(container);

    const anoEl = document.getElementById("ano-atual");
    if (anoEl) anoEl.textContent = new Date().getFullYear();
  }

  function iniciar() {
    const raiz = document.getElementById("modulo-raiz");
    const id = obterIdModuloDoUrl();
    const modulo = MODULES.find(function (m) {
      return m.id === id;
    });

    if (!modulo) {
      renderizarNaoEncontrado(raiz);
      return;
    }

    document.title = modulo.titulo + " — Recanto dos Sonhos";
    renderizarModulo(modulo);
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
