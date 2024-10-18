Números Palindrômicos
Este é um projeto desenvolvido em Next.js (Frontend) e NestJS (Backend) que busca números palíndromos entre dois números inteiros fornecidos pelo usuário. Um número palíndromo é aquele que pode ser lido da esquerda para a direita ou da direita para a esquerda, mantendo o mesmo valor.

Tecnologias Utilizadas
Frontend: Next.js
Backend: NestJS
HTTP Client: Axios
Banco de Dados: Não utilizado, foco em lógica de aplicação.
CORS: Habilitado para permitir comunicação entre diferentes origens.
Funcionalidades
O usuário insere dois números: um valor inicial e um valor final.
A aplicação busca todos os números palíndromos entre esses dois valores, incluindo os próprios números, se forem palíndromos.
Os números palíndromos são exibidos no frontend.
Instalação e Execução
Pré-requisitos
Node.js (v16.x ou superior)
npm ou yarn
Docker (opcional)
Backend (NestJS)
Clone o repositório ou baixe o projeto.

Instale as dependências do backend:

bash
Copiar código
cd backend
npm install
Habilite o CORS no backend para permitir que o frontend acesse a API.

No arquivo main.ts, adicione o seguinte código:

typescript
Copiar código
app.enableCors({
  origin: '*', // Permitir qualquer origem
  methods: 'GET,POST', // Métodos permitidos
});
Inicie o servidor backend:

bash
Copiar código
npm run start
O servidor será iniciado em http://localhost:3000.

Frontend (Next.js)
Navegue até o diretório do frontend:

bash
Copiar código
cd frontend
Instale as dependências do frontend:

bash
Copiar código
npm install
Inicie o servidor de desenvolvimento do frontend:

bash
Copiar código
npm run dev
O servidor será iniciado em http://localhost:3001.

Endpoints da API
O backend possui um único endpoint que processa as requisições para encontrar números palíndromos:

GET /palindrome?start={start}&end={end}
Parâmetros
start (número inteiro): O valor inicial da busca.
end (número inteiro): O valor final da busca.
Exemplo de Requisição
http
Copiar código
GET http://localhost:3000/palindrome?start=1&end=20
Exemplo de Resposta
json
Copiar código
{
  "palindromes": [1, 2, 3, 4, 5, 6, 7, 8, 9, 11]
}
Estrutura de Pastas
bash
Copiar código
├── backend
│   ├── src
│   │   ├── app.module.ts
│   │   ├── palindrome
│   │   │   ├── palindrome.controller.ts
│   │   │   └── palindrome.service.ts
│   └── main.ts
└── frontend
    ├── pages
    │   ├── index.tsx
    └── components
        └── PalindromeForm.tsx
Uso
Acesse a aplicação no navegador em http://localhost:3001.
Insira dois números no formulário, por exemplo:
Início: 1
Fim: 100
Clique em "Buscar Palíndromos".
Os números palíndromos serão exibidos em uma lista.
Exemplo de Uso
Entrada
Início: 1
Fim: 20
Saída
text
Copiar código
Palíndromos: 1, 2, 3, 4, 5, 6, 7, 8, 9, 11
Como Funciona
Backend (NestJS)
O backend possui um serviço que realiza a verificação de números palíndromos. Ele percorre os números entre os valores start e end e verifica se cada número é um palíndromo, retornando um array de resultados.

Frontend (Next.js)
O frontend consiste em um formulário simples onde o usuário insere os números de início e fim. Ao submeter o formulário, uma requisição GET é feita para a API do backend usando axios, e os resultados são exibidos em uma lista.

Possíveis Melhorias
Implementar validações mais detalhadas no formulário.
Adicionar uma mensagem de erro para quando não houver números palíndromos no intervalo.
Adicionar uma funcionalidade de paginação para intervalos grandes.
Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

Licença
Este projeto está licenciado sob a licença MIT.
