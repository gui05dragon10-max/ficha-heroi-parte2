# 📁 Portfólio Pessoal - Front-End

Este é meu projeto desenvolvido durante a disciplina **Tecnologia Web - Engenharia da Computação**. Trata-se de um site de portfólio interativo com temática RPG (baseado no herói criado *Leon Lionheart - O Santo do Sol*), apresentando informações sobre o personagem, suas habilidades, conquistas, inventário, sistema dinâmico de XP e formulário de contato.

---

## 📌 Sobre o Projeto

Este site foi criado com o objetivo de aplicar na prática os conhecimentos de **HTML5**, **CSS3** (utilizando **CSS Grid** e **Flexbox**), **responsividade**, **Manipulação Avançada de DOM** e **JavaScript Vanilla**, além da publicação com **GitHub Pages**.

O projeto foi dividido em fases de evolução:
- **Parte 1:** Estruturação semântica em HTML5, estilização inicial com temas dourados/escuros e prototipagem.
- **Parte 2:** Implementação de lógica em JavaScript (geração dinâmica de cards via arrays e `.forEach()`, sistema de filtros com `.filter()`, barra de progresso de XP com ganho dinâmico de nível e atributos, contadores automáticos e validação avançada de formulários sem uso de `alert()`).
- **Polimento e Documentação:** Ajustes finos de UI/UX, espaçamentos responsivos, botão de "Voltar ao Topo" e finalização do `README.md`.

---

## 🧪 Funcionalidades e Interatividade

- **Seção Sobre o Herói:** Apresentação com lore do paladino e botão interativo *"Ver história completa / Ver menos"* usando operadores lógicos.
- **Atributos & Evolução (Com Sistema de XP):** 
  - Tabela visual de atributos com barras de progresso baseadas em CSS.
  - Botão interativo **"Completar Missão (+25 XP)"** que atualiza o progresso, dispara notificações visuais e eleva o nível do herói automaticamente, incrementando os valores e atributos em tempo real.
  - Estatísticas de combate dinâmicas (HP, Mana, Dano Físico e Mágico).
- **Habilidades Dinâmicas:** Listagem gerada via array de objetos e renderizada automaticamente no DOM.
- **Inventário com Filtros e Contadores:** 
  - Cards detalhados de equipamentos lendários gerados via JavaScript.
  - Sistema de **Filtros Interativos** por categoria (*[Todos]*, *[Armas]*, *[Armaduras]* e *[Vestimentas]*) acionados pelo método `.filter()`.
  - Contador automático de itens exibidos na seção.
- **Páginas de Conquistas:** 
  - Cards visuais interativos que redirecionam para as 4 páginas secundárias de missões (*Templo do Solstício*, *Fortaleza de Ghash-Dûr*, *Ruínas de Sarnanor* e *Minas-Gûl*).
  - Cada página de conquista conta com um painel tático de **Ficha de Quest** e barra de navegação integrada no rodapé.
- **Contato com a Guilda:** Formulário completo com validação em tempo real de campos vazios e formato de e-mail, exibindo mensagens de feedback estilizadas sem depender de caixas de alerta padrão do navegador.
- **Layout Responsivo & UX:** Adaptação perfeita para computadores, tablets e celulares, com animações suaves de *Fade-in* nos cards e botão flutuante de retorno ao topo.

---

## 💻 Como Visualizar o Projeto

1. Baixe ou clone este repositório para o seu computador.
2. Certifique-se de que a estrutura de pastas (`CSS/`, `Java/`, `imagens/`) está correta.
3. Abra o arquivo **`Index.html`** diretamente no seu navegador de preferência.

*(Opcional: Você também pode acessar a versão publicada online pelo link na seção de Acesso ao Projeto).*

---

## 🧰 Tecnologias Utilizadas

- **HTML5:** Estruturação semântica e multi-páginas.
- **CSS3:** Estilização avançada, variáveis (`:root`), animações `@keyframes`, Flexbox, CSS Grid e Media Queries responsivas.
- **JavaScript (ES6+):** Manipulação de DOM, escuta de eventos (`addEventListener`), arrays de objetos, métodos iterativos (`.forEach`, `.filter`) e lógica de estados (XP/Nível).
- **Font Awesome:** Ícones temáticos para atributos e navegação.
- **Git & GitHub:** Controle de versão e hospedagem.
- **GitHub Pages:** Publicação da aplicação online.

---

## 🔗 Acesso ao Projeto

- **GitHub Pages / Repositório:** [Acesse o repositório do projeto no GitHub](https://github.com/gui05dragon10-max/ficha-heroi-parte2.git)

---

## 📂 Estrutura do Projeto

```text
ficha-heroi/
├── Index.html          # Página principal da ficha do herói
├── Templo.html         # Página detalhada da Conquista 1
├── Fortaleza.html      # Página detalhada da Conquista 2
├── Ruinas.html         # Página detalhada da Conquista 3
├── Minas-Gûl.html      # Página detalhada da Conquista 4
├── CSS/
│   ├── Gold.css        # Estilos principais da página index
│   ├── templo-gold.css # Estilos temáticos do Templo
│   ├── fortaleza.css   # Estilos temáticos da Fortaleza
│   ├── ruinas.css      # Estilos temáticos das Ruínas
│   └── Minas-Gûl.css   # Estilos temáticos do Castelo
├── Java/
│   └── java.js         # Lógica interativa, XP, filtros e validações
├── imagens/            # Pasta contendo os recursos visuais e avatares
└── README.md           # Documentação técnica do projeto
