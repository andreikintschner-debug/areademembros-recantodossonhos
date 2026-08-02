# Recanto dos Sonhos — Área de Membros

Site estático (HTML/CSS/JS puro), sem login e sem base de dados. O acesso é feito apenas por quem tiver o link.

## ⚠️ Antes de publicar

- **Não partilhes o link do site publicamente** (redes sociais abertas, grupos públicos, etc.). O ficheiro `robots.txt` já pede aos motores de busca para não indexar o site, mas isso não impede o acesso direto a quem tiver o link.
- **PDFs (Google Drive)**: cada módulo tem um e-book em PDF alojado no Google Drive. No Drive, define a partilha do ficheiro como **"Qualquer pessoa com o link"** (não "Público na Web") — caso contrário os botões "Ver" e "Descarregar" não funcionam.

## Estrutura de ficheiros

```
index.html          → página inicial (mostra os cards dos módulos)
modulo.html          → modelo único, reutilizado por todos os módulos
css/style.css        → todo o estilo visual
js/modules-data.js   → TODO o conteúdo (títulos, capas, PDF de cada módulo) — editas só aqui
js/main.js            → gera os cards da página inicial a partir de modules-data.js
js/modulo.js           → gera a página de módulo (banner + cartão do e-book em PDF)
assets/capas/          → onde deves colocar as imagens de capa dos módulos (1920x1080)
assets/placeholder-capa.svg → imagem que aparece enquanto não colocas a capa real
robots.txt             → pede aos motores de busca para não indexar o site
```

## Como editar conteúdo (o que vais fazer 90% das vezes)

Abre `js/modules-data.js`. Cada módulo é um bloco assim:

```js
{
  id: "quintais-pequenos",       // identificador único, usado no link modulo.html?id=quintais-pequenos
  categoria: "espaco",            // "espaco" | "estilo" | "materiais"
  titulo: "Quintais Pequenos",
  capa: "assets/capas/quintais-pequenos.jpg",
  descricao: "...",
  material: { driveId: "ID_DO_FICHEIRO_NO_DRIVE" }  // e-book em PDF do módulo
}
```

Não há aulas nem vídeos — cada módulo mostra apenas a sua capa e o cartão do e-book (PDF).

### Como obter o PDF (Google Drive)

Cada módulo tem **um** PDF, indicado pelo campo `material.driveId`. É o código que aparece no link de partilha do ficheiro no Drive, em `.../d/ESTE_CÓDIGO/view`. A partir desse código, os links são gerados automaticamente:

- Ver (preview): `https://drive.google.com/file/d/{driveId}/preview`
- Descarregar: `https://drive.google.com/uc?export=download&id={driveId}`

Não precisas de escrever estes links — basta colares o `driveId` e o site trata do resto (ver `js/modulo.js`).

### Adicionar um módulo novo

1. Copia um bloco inteiro de módulo dentro do array `MODULES`.
2. Muda o `id` (tens de garantir que é único).
3. É isso — o card aparece automaticamente na página inicial, na secção certa consoante a `categoria`.

## Capas e imagens

A capa de cada módulo deve ter **1920x1080px**. Enquanto não colocares o ficheiro final, o site mostra automaticamente `assets/placeholder-capa.svg`.

## Hospedar

É um site 100% estático — basta fazer upload de todos estes ficheiros e pastas (mantendo a mesma estrutura) para qualquer alojamento estático: Netlify, Vercel, GitHub Pages, cPanel, etc. Não precisa de build nem de servidor.
