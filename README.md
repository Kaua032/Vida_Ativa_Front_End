# 💻 Vida Ativa – Frontend

Interface web desenvolvida com React para o sistema **Vida Ativa**, uma aplicação voltada ao registro e acompanhamento da frequência de alunos em uma associação. O frontend permite que professores autenticados cadastrem alunos, registrem presenças e visualizem o histórico de faltas por período.

![React](https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black)
![Bootstrap](https://img.shields.io/badge/-Bootstrap-7952B3?style=flat-square&logo=bootstrap&logoColor=white)
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Styled Components](https://img.shields.io/badge/-Styled--Components-db7093?style=flat-square&logo=styled-components&logoColor=white)

> 🔗 Este repositório é o **frontend** da aplicação Vida Ativa.  
> Acesse o [repositório da API aqui](https://github.com/Kaua032/Vida_Ativa_API)

---

## ⚙️ Tecnologias utilizadas

- **React 18**
- **React Router DOM**
- **React Hook Form + Zod** (validações de formulário)
- **Axios** (requisições HTTP)
- **JS-Cookie** (armazenamento de token)
- **Styled Components**
- **Bootstrap 5 + React-Bootstrap**

---

## 🔐 Autenticação

O sistema utiliza autenticação por **token JWT**, armazenado no **cookie do navegador**.  
Apenas professores autenticados conseguem acessar e interagir com as rotas da API.

- Ao fazer login, o token JWT é salvo no cookie.
- Todas as requisições feitas ao backend incluem esse token no header.
- Se o cookie não existir ou estiver expirado, o usuário é redirecionado para a tela de login.

---

## 🚀 Funcionalidades

- ✅ Login de professores
- ✅ Cadastro de alunos
- ✅ Registro de presença por dia
- ✅ Consulta de frequência semanal e mensal
- ✅ Verificação automática de autenticação via cookie
- ✅ Interface moderna e responsiva

---

## 📦 Como rodar o projeto localmente

> Pré-requisitos:
> - Node.js instalado
> - API do Vida Ativa rodando localmente ou em produção
> - O endereço da API deve ser colocado na variável baseURL de cada service na pasta services

### 1. Clone o repositório

```bash
git clone https://github.com/Kaua032/Vida_Ativa_Frontend.git
cd Vida_Ativa_Frontend/Vida_Ativa/
npm install
npm run dev
