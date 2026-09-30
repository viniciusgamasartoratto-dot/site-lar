# Lar Itatibense da Criança — site institucional

Novo site institucional responsivo do Lar Itatibense da Criança, com destaque central para o Programa Crê-Ser. O conteúdo foi reorganizado a partir do acervo do site oficial consultado em julho de 2026, sem estimar resultados, serviços, horários ou dados não publicados.

## Páginas

- `/` — início, Programa Crê-Ser, apresentação do Lar, indicadores confirmados, formas de ajudar, estrutura, parceiros, depoimentos e transparência;
- `/sobre-o-lar` — história, missão, acolhimento, público, capacidade e governança;
- `/programa-cre-ser` — página exclusiva do programa, contexto, objetivo, público, encaminhamento, acompanhamento, lacunas de conteúdo, galeria, indicadores e perguntas frequentes;
- `/estrutura` — galeria dos ambientes institucionais;
- `/como-ajudar` — doação, materiais, associação, voluntariado, eventos, Nota Fiscal Paulista, empresas, parcerias e divulgação;
- `/parceiros` — relação publicada no acervo anterior;
- `/diretoria` — diretoria e Conselho Fiscal;
- `/transparencia` — documentos institucionais em cards, com visualização e download de PDFs locais;
- `/contato` — canais, formulário preparado para e-mail e mapa;
- página 404 personalizada, `robots.txt` e `sitemap.xml`.

## Instalação e execução local

Requisitos: Node.js 22.13 ou superior e npm.

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`. Para validar uma versão de produção:

```bash
npm run build
npm run start
```

## Onde editar

- Textos, contatos, diretoria, parceiros, documentos e listas: `app/data/site.ts`;
- Conteúdo de cada página: diretórios dentro de `app/`;
- Cabeçalho, rodapé, banner interno e chamada final: `app/components/`;
- Cores, tipografia, espaçamentos e responsividade: `app/globals.css`;
- Imagens: `public/images/`;
- Fotos da diretoria: `public/images/diretoria/`;
- PDFs de transparência: `public/documentos/`;
- Cadastro dos PDFs exibidos: lista `transparencyDocuments` em `app/data/site.ts`;
- Imagem de compartilhamento: `public/og.png`;
- Metadados globais e integração futura de analytics: `app/layout.tsx`;
- SEO por página: objeto `metadata` em cada `page.tsx`;
- URL pública para sitemap: `NEXT_PUBLIC_SITE_URL` no ambiente.

## Formulário e analytics

O formulário não armazena informações e prepara uma mensagem no aplicativo de e-mail do visitante. Para integrar um serviço de e-mail ou backend, substitua a função `submit` em `app/components/ContactForm.tsx` por uma chamada HTTPS, mantenha validação no servidor, proteção contra spam, limitação de requisições e política de privacidade.

O `body` já recebe `NEXT_PUBLIC_GA_MEASUREMENT_ID` como ponto de integração. Antes de ativar o Google Analytics, implemente a gestão de consentimento adequada à LGPD e carregue o script somente após autorização.

## Publicação

O projeto usa vinext e gera uma saída compatível com Cloudflare Workers/Sites. Configure `NEXT_PUBLIC_SITE_URL` com o domínio final, execute `npm run build` e publique a saída gerada pelo provedor escolhido. Em uma hospedagem Node convencional, use `npm run start` após o build. Em Cloudflare/Sites, preserve `vite.config.ts`, `worker/` e `.openai/hosting.json`.

## Informações a confirmar com a instituição

1. Dados bancários e chave Pix;
2. fluxo e documentos do encaminhamento ao Programa Crê-Ser;
3. oficinas, atividades, horários, vagas e critérios atuais do programa;
4. equipe e áreas profissionais atuais do programa;
5. indicadores, resultados e período de referência;
6. horários administrativos e de recebimento de doações;
7. redes sociais e eventual WhatsApp oficial;
8. permanência, logotipos, descrições e links dos parceiros;
9. datas, versões e arquivos definitivos da transparência;
10. cargos duplicados publicados na diretoria e descrição atual da função de apoio voluntário;
11. autorização de uso e atualização das imagens do acervo anterior;
12. texto institucional da missão à luz do Estatuto e da linguagem atualmente adotada.

O arquivo `docs/CONTEUDO-A-CONFIRMAR.md` transforma esta lista em checklist editorial.

## Como adicionar PDFs à transparência

Use `/admin`, entrando com o usuário e a senha administrativos fornecidos ao responsável. Na opção Documentos PDF, preencha os campos, selecione um PDF de até 10 MB, marque Publicar no site e salve. Desmarque a opção para manter o documento como rascunho. Os arquivos ficam no R2 e os cadastros no D1; não dependem do navegador nem de uma nova publicação do código. Os sete documentos iniciais estão incorporados em `public/documentos/` e são mantidos separadamente em `app/data/site.ts`, sem links ao acervo antigo.

## Como publicar banners de eventos

Em `/admin`, selecione Banners de eventos. Envie JPG, PNG ou WebP de até 5 MB, informe título, descrição e link opcional. O título também identifica a imagem para leitores de tela. Prefira imagem horizontal de 1600 × 600 px. É possível definir início e fim de exibição, nos horários do dispositivo do administrador. Marque Publicar no site e salve. O banner aparece na página inicial; rascunhos e eventos fora do período não são públicos. A lista permite editar, substituir o arquivo ou excluir com confirmação.

O acesso administrativo é validado no servidor com usuário e senha próprios. `ADMIN_USERNAME` e o segredo `ADMIN_PASSWORD_HASH` são configurados no Sites, nunca no Git. A senha é derivada com PBKDF2/SHA-256 (100.000 iterações e salt aleatório), com senha aleatória longa, limitação de tentativas e sessões revogáveis de 8 horas em cookies HttpOnly/Secure/SameSite. Alterar o hash invalida as sessões anteriores. A visibilidade do site continua privada por decisão do responsável; o login do painel não remove a barreira de acesso do Sites. Não publique arquivos `.dev.vars`.

O carrossel principal começa pelo evento ativo mais recente e alterna automaticamente a cada 4 segundos, exibindo os demais eventos e depois o banner institucional completo. As imagens ocupam toda a largura, sem corte. Há apenas indicadores discretos para escolher o banner; não existem botões Anterior, Próximo ou Reproduzir. Também é possível deslizar no celular. A rotação pausa durante navegação por teclado e com a aba oculta; a preferência por movimento reduzido é respeitada. Sem eventos ativos, aparece somente o banner institucional. Não há janela de abertura.

Os testes locais são executados com `node tests/admin-content.test.mjs`, com a prévia em localhost:3000 e migrações locais aplicadas. Configure exclusivamente para testes o usuário `local-test` e a senha de teste indicada nesse arquivo em `.dev.vars` (ignorado). Não execute esses testes contra produção nem use a senha de teste no site publicado.

## Acessibilidade e desempenho

O site usa HTML semântico, link para pular ao conteúdo, foco visível, navegação por teclado, contraste alto, textos alternativos, redução de movimento e layout responsivo. As imagens ficam locais, usam carregamento adiado fora do primeiro banner e dimensões definidas para reduzir deslocamentos de layout.

## Fontes do conteúdo

- Site institucional consultado: `https://www.laritatibense.org.br/`;
- imagens institucionais e links de documentos foram preservados a partir do mesmo domínio;
- lacunas foram sinalizadas em vez de preenchidas com conteúdo inventado.
