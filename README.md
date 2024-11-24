# React + TypeScript + Vite

Descrição do Teste

Este teste técnico tem como objetivo avaliar suas habilidades em desenvolvimento front-end utilizando React e TypeScript. Você será responsável por criar uma aplicação simples que simula um fluxo de compra, sem a necessidade de backend, utilizando Redux para gerenciar o estado da aplicação.

Requisitos do Projeto

1. Login:

○ Crie uma página de login onde o usuário deverá inserir um nome e um email para prosseguir.

○ Valide que ambos os campos estão preenchidos antes de permitir o login.

○ Armazene os dados do usuário utilizando Redux.

2. Produtos:

○ Crie uma página que exiba uma lista de produtos fictícios. Cada produto deve conter pelo menos um nome, uma descrição e um preço.

○ Permita que o usuário selecione a quantidade de cada produto que deseja comprar.

○ Os produtos selecionados e suas respectivas quantidades devem ser armazenados no Redux.

3. Finalizar Compra:

○ Crie uma página de resumo onde o usuário pode ver os produtos selecionados, suas quantidades e o valor total da compra.

○ Inclua um botão para finalizar a compra.

○ Ao clicar em "Finalizar Compra", exiba um modal de confirmação informando que a compra foi concluída com sucesso.

○ Limpe os dados armazenados no Redux após a conclusão da compra.

Requisitos Técnicos

● Tecnologias: React, TypeScript, Redux.

● Interface: Utilize CSS ou frameworks como Material-UI para estilizar as páginas de forma simples e funcional.

● Persistência de Dados: Utilize Redux para armazenar e repassar os dados entre as páginas.

● Não é necessário: Implementar backend, autenticação real, ou integração com APIs externas. Mas faça uma pasta services e simule uma conexão com uma rota fictícia.

Critérios de Avaliação

● Organização e clareza do código.

● Uso adequado do Redux para gerenciar o estado da aplicação.

● Implementação correta das funcionalidades solicitadas.

● Simplicidade e funcionalidade da interface de usuário.

● Atenção aos detalhes, como validações e exibição de mensagens ao usuário.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

pagina de detalhes

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
