# Como adicionar PDFs à página de transparência

## 1. Prepare o arquivo

Use um nome curto, em letras minúsculas, sem espaços ou acentos. Exemplos:

- `balanco-2025.pdf`
- `estatuto-social.pdf`
- `certidao-regularidade-2026.pdf`

Confirme que o documento é a versão vigente e que pode ser publicado sem expor dados pessoais indevidos.

## 2. Copie o PDF

Coloque o arquivo na pasta:

`public/documentos/`

Tudo o que estiver nessa pasta será publicado no endereço `/documentos/nome-do-arquivo.pdf`.

## 3. Cadastre o documento

Abra `app/data/site.ts`, localize `transparencyDocuments` e adicione uma entrada como esta:

```ts
{
  title: "Balanço patrimonial — exercício 2025",
  category: "Prestação de contas",
  description: "Balanço encerrado em 31 de dezembro de 2025.",
  date: "31/12/2025",
  fileMeta: "PDF · 2 páginas · 300 KB",
  href: "/documentos/balanco-2025.pdf",
  source: "local",
},
```

Documentos com `source: "local"` recebem automaticamente os botões **Visualizar PDF** e **Baixar PDF**.

## 4. Valide antes de publicar

- abra o PDF e confira todas as páginas;
- confirme título, data, número de páginas e tamanho;
- teste os dois botões na página `/transparencia`;
- mantenha os balanços anteriores quando a instituição precisar preservar o histórico.
