# chatbot-gemini-frontend

**Projeto Frontend** de um chatbot consumindo a API do Gemini por meio do projeto [chatbot-gemini-backend](https://github.com/EmanuelBitenc/chatbot-gemini-backend).

Este projeto permite a interação com um chatbot que utiliza o modelo Gemini, proporcionando uma interface de chat simples e eficiente.

## Tecnologias Utilizadas

- **React**: Framework de front-end para construção de interfaces dinâmicas.
- **Vite**: Ferramenta de build e bundling para um desenvolvimento rápido.
- **Chakra UI**: Biblioteca de componentes de interface para React, facilitando a criação de interfaces modernas e responsivas.

## Como Rodar

Para rodar este projeto em sua máquina local, siga os passos abaixo:

### 1. Obtenha uma chave API do Gemini

- Primeiramente, você precisará de uma chave de API para interagir com o serviço Gemini. Acesse a [documentação oficial do Gemini API](https://ai.google.dev/gemini-api/docs?hl=pt-br#node.js) para obter sua chave.

### 2. Rode o backend

Este projeto **frontend** depende do backend para consumir a API do Gemini. Então, antes de rodar o frontend, execute o projeto [chatbot-gemini-backend](https://github.com/EmanuelBitenc/chatbot-gemini-backend).

### 3. Clone o repositório frontend

Clone este repositório para sua máquina local:

```bash
git clone https://github.com/EmanuelBitenc/chatbot-gemini-frontend.git
```

### 4. Instale as dependências

Dentro da pasta do projeto, instale as dependências utilizando o npm:

```bash
npm install
```

### 5. Rode o projeto

Após a instalação das dependências, você pode rodar o projeto com o seguinte comando:

```bash
npm run dev
```

O projeto será iniciado e estará disponível em http://localhost:5173.
