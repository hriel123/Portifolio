# Portfólio · Hariel Silva Fabrício

![Prévia do portfólio](assets/og/og-image.jpg)

**Site:** https://hriel123.github.io/Portifolio/
**Currículo:** https://hriel123.github.io/Portifolio/curriculo.html (com download em PDF)

Portfólio pessoal de um estudante do Técnico em Informática (E.E.E.P. Edson Queiroz, Cascavel-CE), estagiário de Gestão de TI, com foco em Cloud Computing, desenvolvimento e AWS & Huawei Cloud.

## O que tem no site

- **Sobre:** áreas de interesse e atuação.
- **Experiência & Formação:** linha do tempo interativa de 2024 a 2026, com filtros (experiência, formação, certificados), destaques que abrem e fecham e acesso direto aos certificados.
- **Projetos:** FinFlow, FilaFácil, JLVariedades e Coleta de Água, cada um com galeria de telas e link para o projeto no ar.
- **Certificados:** 7 certificados, com a imagem do certificado, o PDF original e, quando existe, o link de verificação.
- **Habilidades e Contato.**
- **Currículo:** página própria em formato A4, com o PDF gerado a partir dela.

## Recursos

- Tema claro e escuro, com a escolha salva no navegador.
- Responsivo de 320px a telas grandes, com menu próprio para celular e tablet.
- Acessibilidade: navegação por teclado, foco visível, textos alternativos nas imagens, contraste AA nos dois temas e respeito à preferência por menos movimento.
- Funciona mesmo sem JavaScript (o conteúdo continua visível).
- Imagem de prévia para links compartilhados (WhatsApp, LinkedIn etc.).

## Tecnologias

HTML, CSS e JavaScript puros, sem frameworks nem etapa de build. Hospedado no GitHub Pages.

## Estrutura

```
index.html                         página principal
curriculo.html                     currículo (fonte do PDF)
curriculo-hariel-silva-fabricio.pdf
certificado_*.pdf                  certificados originais
assets/projetos/                   telas das galerias dos projetos
assets/certificados/               imagens dos certificados
assets/icons/                      logos das tecnologias e de quem emitiu os certificados
assets/fotos/                      fotos dos cards de Sobre e Habilidades
assets/curriculo/                  foto do currículo
assets/og/                         imagem de prévia e a página que a gera
```

Os logos de `assets/icons/` vêm do [Devicon](https://github.com/devicons/devicon) (licença MIT, Copyright (c) 2015 konpa), do [Simple Icons](https://github.com/simple-icons/simple-icons) (CC0), do [flag-icons](https://github.com/lipis/flag-icons) (bandeiras, licença MIT, Copyright (c) 2013 Panayiotis Lipiridis), do Wikimedia Commons (domínio público: [Instituto Federal](https://commons.wikimedia.org/wiki/File:Instituto_Federal_Marca_2015.svg) e [Brasão do Ceará](https://commons.wikimedia.org/wiki/File:Bras%C3%A3o_do_Cear%C3%A1.svg)), do globo da marca publicada pela SEDUC Ceará nos editais do CCI e do site da Delfos (delfos.energy). As marcas pertencem aos seus donos.

As fotos de `assets/fotos/` (ícones dos cards de Sobre e Habilidades) são livres de direitos (CC0 ou domínio público), encontradas pelo [Openverse](https://openverse.org):

- Cloud Computing: [rawpixel](https://www.rawpixel.com/image/6042704/photo-image-public-domain-free), CC0
- Infraestrutura de Redes: [rawpixel](https://www.rawpixel.com/image/5919227/image-background-public-domain-technology), CC0
- Análise de Dados: [StockSnap (Marc Chouinard)](https://stocksnap.io/photo/business-working-PHE63L27S6), CC0
- IA & Programação: [rawpixel](https://www.rawpixel.com/image/5966842/computer-circuit-board-macro), CC0
- Monitor Acadêmico: [rawpixel](https://www.rawpixel.com/image/5914454/image-public-domain-medicine-free), CC0
- Front-end: [StockSnap (Domenico Loia)](https://stocksnap.io/photo/computer-keyboard-IHIHTFK8YH), CC0
- Back-end: [StockSnap (Luca Bravo)](https://stocksnap.io/photo/computer-keyboard-A28WZDTYEY), CC0
- Dados: [StockSnap (Wilfred Iven)](https://stocksnap.io/photo/accounting-finance-JONMP7TPGK), CC0
- Cloud & Infra: [Flickr (Jefferson Lab)](https://www.flickr.com/photos/53950384@N02/52644830245), domínio público
- Ferramentas: [StockSnap (Marc Chouinard)](https://stocksnap.io/photo/coding-macbook-LV2IUQNTZ5), CC0
- Inteligência Artificial: [rawpixel](https://www.rawpixel.com/image/5906158/photo-image-public-domain-computer-free), CC0
- Soft Skills: [StockSnap (Kristin Hardwick)](https://stocksnap.io/photo/work-business-J5LXKNDREC), CC0
- Idiomas: [StockSnap (Suzy Hazelwood)](https://stocksnap.io/photo/books-library-GTWPBBTRRN), CC0

## Rodar localmente

```bash
python3 -m http.server 8000
```

Depois abra http://localhost:8000.

## Arquivos gerados

Alguns arquivos são gerados a partir de outros e precisam ser refeitos quando a fonte muda (com o servidor local rodando):

- **PDF do currículo** (depois de mudar `curriculo.html`):

  ```bash
  google-chrome --headless=new --no-pdf-header-footer \
  --print-to-pdf=curriculo-hariel-silva-fabricio.pdf \
  http://localhost:8000/curriculo.html
  ```

- **Imagem de prévia** (depois de mudar `assets/og/card.html`), em 1200x630, convertida depois para JPG:

  ```bash
  chrome-headless-shell --hide-scrollbars --window-size=1200,630 \
  --screenshot=og.png http://localhost:8000/assets/og/card.html
  ```

- **Imagens dos certificados** (ao trocar ou adicionar um PDF): renderizar as páginas com `pdftoppm`, converter para WebP em `assets/certificados/<chave>-<página>.webp` e registrar o tamanho em `CERT_IMAGES` no `index.html`.

## Contato

- LinkedIn: https://www.linkedin.com/in/h%D0%B0riel-silva-fabr%C3%ADcio-1b1004353/
- GitHub: https://github.com/hriel123
