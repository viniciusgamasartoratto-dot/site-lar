# Identidade visual do site — Laços de cuidado

## Conceito

Uma identidade acolhedora e reconhecível, construída a partir das cores dos símbolos existentes do Lar Itatibense e do Programa Crê-Ser. O nome «Laços de cuidado» descreve este sistema visual; não substitui o nome da instituição nem constitui um novo logotipo oficial.

## Cores

| Cor | Valor | Aplicação |
| --- | --- | --- |
| Azul Lar | `#174F72` | Títulos, navegação, rodapé e informação institucional |
| Azul claro de apoio | `#257DAF` | Detalhes gráficos e foco de teclado |
| Verde cuidado | `#23644D` | Crê-Ser, acolhimento e elementos de apoio |
| Rosa vínculo | `#AD365E` | Ação principal, destaques e pequenos detalhes |
| Papel | `#FAF8F2` | Fundo predominante |
| Texto | `#233D43` | Leitura principal |
| Texto secundário | `#536769` | Descrições e legendas |

Manter o fundo claro predominante. Usar cores fortes para orientar a leitura, não para preencher todos os cartões. Texto branco funciona sobre azul, verde e rosa escuros; evitar texto claro sobre os fundos suaves.

## Tipografia

- Títulos: Georgia, com alternativas Times New Roman e serif. Peso normal, sem itálico obrigatório e sem caixa-alta em frases longas.
- Textos e controles: Trebuchet MS, com alternativas Segoe UI e Arial. Corpo a partir de 16 px; rótulos recorrentes a partir de 14 px.
- Fontes do sistema: o site não depende de uma requisição externa para apresentar seu conteúdo.

## Assinatura gráfica

Três pequenas faixas, em azul, verde e rosa, formam um ritmo diagonal discreto. Elas aparecem na abertura das páginas e no rodapé. São decorativas, ficam fora da leitura assistiva e nunca substituem os logotipos.

Os cantos alternados — um pequeno e outro mais aberto — repetem esse ritmo em botões e molduras. Usar curvas maiores nas fotos principais e menores nos controles. Evitar aplicar molduras diferentes dentro do mesmo grupo.

## Fotografias e logotipos

Preservar os arquivos oficiais, sem recolorir, distorcer ou redesenhar. Dar preferência a fotografias reais da instituição; manter legendas concretas. Nunca usar imagens de crianças sem a autorização e os cuidados de privacidade necessários. Não aplicar filtros de cor que escondam a realidade dos espaços.

## Interface

Botões principais têm fundo rosa ou azul, de acordo com o contexto; secundários usam contorno. Manter 52 px de altura e áreas clicáveis claras. No banner, os dois botões têm larguras equivalentes. A identificação do Crê-Ser permanece centralizada na parte inferior da foto.

No celular, preservar a ordem de leitura e empilhar conteúdo antes de reduzir letras. A cor nunca deve ser o único meio de identificar um link, ação ou estado. O foco de teclado deve permanecer visível.

## Manutenção

As cores e os estilos da identidade ficam em `app/identity.css`, importado depois dos estilos estruturais. A assinatura reutilizável fica em `app/components/BrandSignature.tsx`. Não alterar os arquivos oficiais em `public/images` para mudar a aparência da interface. O compartilhamento social mantém a imagem anterior, fora do escopo desta atualização.
