# 🛒 E-commerce Backend Logic - TIC Hub

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![POO](https://img.shields.io/badge/POO-Conceitos_Aplicados-blue?style=for-the-badge)

Projeto desenvolvido durante o curso de **Programação Full Stack** do **TIC Hub (Instituto iRede)**. O objetivo deste projeto é construir a lógica central de um sistema de e-commerce utilizando TypeScript, aplicando conceitos sólidos de Programação Orientada a Objetos (POO) e Tipagem Avançada.

## 📝 Sobre o Projeto

Este repositório contém a implementação do motor de regras de negócio de um carrinho de compras. A arquitetura foi pensada para garantir que a aplicação seja robusta, segura (em tempo de compilação) e escalável, evitando completamente o uso de tipagens dinâmicas inseguras (como o `any`).

## ✨ Funcionalidades

* **Modelagem de Domínio:** Estruturação de entidades base como `Product` e `Category` utilizando interfaces rigorosas.
* **Gerenciamento de Acesso (Roles):** Sistema de usuários com tipagem estrita (Literal Types), garantindo exclusivamente os papéis de `ADMIN` e `CUSTOMER`.
* **Carrinho de Compras Inteligente:** Lógica avançada para adicionar itens, agrupar produtos repetidos (somando suas quantidades) e calcular totais da compra.

## 🚀 Tecnologias e Conceitos Aplicados

* **TypeScript:** Uso rigoroso do sistema de tipos para garantir segurança total em tempo de compilação.
* **Programação Orientada a Objetos (POO):** Uso de classes, encapsulamento e separação de responsabilidades.
* **High-Order Functions (HOFs):** Refatoração de laços tradicionais para um código mais declarativo utilizando métodos de Array:
  * `.some()` para verificação de duplicidade de itens no carrinho.
  * `.reduce()` para a consolidação dinâmica da quantidade total de itens e do preço final.

## 📂 Estrutura do Projeto

```text
├── model/
│   ├── cart.ts         # Lógica e gerenciamento do carrinho de compras
│   ├── category.ts     # Definição e tipagem de Categorias
│   ├── product.ts      # Definição e tipagem de Produtos
│   └── user.ts         # (Opcional) Gerenciamento de usuários e roles
└── index.ts            # Arquivo principal de execução e testes da lógica
