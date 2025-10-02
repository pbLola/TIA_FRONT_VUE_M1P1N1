# Projeto: M1P1N1: Gerenciador de Tarefas Essencial — Vue.js Fundamentos

## Descrição do projeto (para o repositório no gitHub)

Um Gerenciador de Tarefas (_To-Do List_) simples e funcional, desenvolvido com **Vue.js 3** (CDN). Este projeto de nível de entrada demonstra a **reatividade** (data), o **Two-Way Data Binding** (`v-model`), a **renderização de listas** (`v-for`) e a **manipulação de eventos/formulários** (`@submit.prevent`). É a primeira entrega essencial do TIA, focada em construir a base do CRUD.

## Funcionalidades implementadas

- **Estrutura semântica (SEO):** Uso de `<h1>` para o título, `<form>` e `<ul>` para estruturar o conteúdo corretamente.
- **Two-Way Data Binding (`v-model`):** Conexão do campo de input (`newTaskText`) com o estado da aplicação.
- **Renderização de Lista (`v-for`):** Exibição dinâmica das tarefas contidas no _array_ `tasks`.
- **Renderização Condicional (`v-if`):** Exibe uma mensagem de SEO/ajuda quando a lista de tarefas está vazia.
- **Manipulação de Eventos:** Utilização de `@submit.prevent` no formulário para adicionar tarefas (chamando o método `addTask`) sem recarregar a página.
- **Validação de Formulário:** Lógica simples para impedir a adição de tarefas vazias.

## Estrutura do projeto

M1P1N1-gerenciador_de_tarefas/
├── README.md # Documentação do projeto
├── index.html # Estrutura HTML, formulário e lista (diretivas Vue)
├── app.js # Lógica reativa do Vue.js (data, methods)
└── style.css # Estilização completa do projeto com CSS puro e paleta de cores.

## Tecnologias Implementas

- **HTML5 (Foco em Semântica):** Estrutura base para o Gerenciador de Tarefas.
- **CSS3:** Estilização responsiva básica e aplicação da paleta de cores Kelp/Whiskey.
- **Vue.js 3 (CDN):** Framework principal, utilizando `data`, `v-model`, `v-for`, `v-if` e `methods`.
- **JavaScript (ES6):** Lógica de manipulação de _array_ e validação dentro do método `addTask`.

---

**Feedback pós finalização**
[Espaço para anotações após o desenvolvimento e testes iniciais]
[...]

---

## Correções sugeridas

[Espaço para registrar correções identificadas por peers ou durante a revisão]

## [...]

## Melhorias pós feedback

## [...]

## 📝 Licença

Este projeto é de uso educacional.
© 2025 Lohanne Castro Oliveira — Todos os direitos reservados.
