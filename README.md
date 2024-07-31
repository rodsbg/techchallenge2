# Techchallenge2 - Grupo 62

## Fiap - techChallenge 2 - Clean Arquitecture

O projecto do Tech Challenge foi desenvolvido baseado no aprendizado das aulas.

Rm349615 - Alexandre Montesino da Costa Campos <br />
Rm349612 - Ricardo Amaral Jara <br />
Rm350424 - Rodrigo Barboza Gonçalves

## Pre-requisitos

1 - docker <br />
2 - kubernetes <br />
3 - Git

## Recursos

node.js <br />
Swagger <br />
express <br />
mongodb <br />

Link de acesso: https://github.com/rodsbg/techchallenge2.git

Realizar o clone do projeto: git clone https://github.com/rodsbg/techchallenge2.git

## Execução

Disponibilizar a imagem no DockerHub (https://hub.docker.com/repositories/rodgol)

1 - ir para o diretório lanchonete <br />
2 - executar o: docker build -t rodgol/lanchonete:v1 . -f Dockerfile/Dockerfile <br />
3 - realizar login no dockerhub: docker login -u rodgol <br />
4 - token para carregar a imagem no dockerhub : dckr_pat_GJwsJodWmVFg2vege2upWmDzhHs <br />
5 - executar o push para o dockerhub: docker push rodgol/lanchonete:v1 (irá copiar para o dockeuhub) 

## Criar os recursos no Cluster Kubernetes

1 - Na pasta Kubernetes aplicar para todos os yaml dentro da pasta não esquecer do ponto, kubectl apply -f . <br />
2 - kubectl get svc para pegar qual a porta que foi configurada e o IP externo (Verificar se esta correto o Loadbalancer) <br />
3 - acessar pelo browser: http://ip-externo:porta/api-docs 

## Acessando as apis

O Swagger esta configurado e as instruções de cadastro, consulta, estaão no swagger da API.



# Documentação do Projeto  <br />

## Visão Geral da Arquitetura - Os requisitos do negócio (problema).

A arquitetura do sistema pode ser dividida em camadas, cada uma responsável por um aspecto específico do gerenciamento da lanchonete. Uma arquitetura em camadas ajuda a separar as responsabilidades e facilita a manutenção e escalabilidade do sistema.

### Camadas da Arquitetura

#### Camada de Aplicação
**Objetivo:** Implementar a lógica de negócios e orquestrar os serviços.

- **Controle de Pedidos:** Gerencia o fluxo de pedidos desde a criação até a finalização e pagamento.
- **Gerenciamento de Clientes:** Armazena e gerencia informações de clientes, histórico de pedidos e preferências.
- **Gerenciamento de Produtos:** Permite a adição, atualização e remoção de produtos do menu.
- **Campanhas Promocionais:** Gerencia e aplica promoções e descontos em pedidos.

#### Camada de Domínio
**Objetivo:** Modelar os conceitos principais do negócio e suas regras.

- **Entidades e Agregados:**
  - **Pedido:** Contém informações sobre os itens, quantidades e status do pedido.
  - **Cliente:** Armazena dados do cliente, histórico e preferências.
  - **Produto:** Informações sobre o produto, preço e disponibilidade.
  - **Campanha:** Dados sobre campanhas promocionais e regras de aplicação.

#### Camada de Persistência
**Objetivo:** Armazenar e recuperar dados do banco de dados.

- **Banco de Dados NoSQL:** Para armazenar dados estruturados sobre pedidos, clientes, produtos, campanhas e pagamentos.
  - **Banco de dados utilizado:** MongoDB - string de conexão: `MONGO_URI=mongodb://lanchonete-mongodb-1:27017/techchallengelanchonete`

#### Camada de Integração
**Objetivo:** Integrar com `Mercado Pago` para pagamentos.

- **Sistemas de Pagamento:** Integração com gateways de pagamento para processar transações.


# Requisitos de Infraestrutura para Aplicação Node.js em Kubernetes

Para rodar uma aplicação Node.js em um ambiente Kubernetes, é necessário configurar e garantir que sua infraestrutura atenda a certos requisitos.

## Componentes de InfraEstrutura da Arquitetura

### OKE - Oracle Kubernetes Engine
- **Cloud Provider**: Cloud utilizada para deploy da aplicação.

### Serviço Kubernetes
- **Service**: Expõe a aplicação Node.js dentro do cluster. (api-service)

### Pods e Deployment
- **Pod**: Contém a instância da aplicação Node.js.
- **Deployment**: Gerencia a criação e escalabilidade desses Pods. (api-deployment e mongodb)

### Secret
- **Secret**: Armazena dados sensíveis (credenciais de banco de dados) e Mercado Pago.

### Banco de Dados
- **Banco de Dados**: NoSQL - MongoDB, configurado como microserviço.

### GitHub
- **Armazenamento do código**: Utilizado para armazenar os arquivos de programação e readme.md.

### Docker Hub
- **Armazenamento da Imagem**: Utilizado como repositório de imagens para a aplicação.

# Arquitetura InfraEstrutura

![image](https://github.com/user-attachments/assets/714adfd9-f879-4dd3-b0e3-d95d0704c594)

# Documentação da API

Este repositório contém a documentação da API e exemplos de execução para as rotas disponíveis.

## Rotas da API

- **Campanha Routes**
  - Adicionar Campanha ao CPF
  - Listar Todas as Campanhas

- **Cliente Routes**
  - Cadastrar Cliente
  - Listar Todos os Clientes
  - Consultar Cliente pelo CPF

- **Pagamento Routes**
  - Consultar Pagamentos
  - Confirmar Pedido de Pagamento
  - Receber Notificações de Pagamento
  - Gerar QR Code para Pagamento

- **Pedido Routes**
  - Cadastrar Pedido
  - Listar Todos os Pedidos
  - Acompanhamento do Pedido
  - Listar Pedidos Não Finalizados

- **Produto Routes**
  - Inserir Produto
  - Alterar Produto
  - Deletar Produto
  - Listar Produtos por Categoria
  - Listar Produtos

# Exemplos de Execução da API

## 1. Campanha Routes

### Adicionar Campanha ao CPF

**Método**: PUT  
**URL**: `/api/campanha/{cpf}`  
**Exemplo de Requisição**:
```
{
  "cpf": "12345678901",
  "campanha": "15% de desconto nas próximas compras"
}
```
Listar Todas as Campanhas
 **Método**: GET
**URL**:  /api/campanha
Resposta Esperada:

 
 
 
  {
    "cpf": "12345678901",
    "campanha": "15% de desconto nas próximas compras"
  },
  {
    "cpf": "10987654321",
    "campanha": "10% de desconto em produtos selecionados"
  }
 
## 2. Cliente Routes
Cadastrar Cliente
 **Método**: POST
**URL**:  /api/clientes
**Exemplo de Requisição**:

 
 
{
  "nome": "João da Silva",
  "cpf": 12345678901,
  "email": "jsilva@gmail.com"
}
Listar Todos os Clientes
 **Método**: GET
**URL**:  /api/clientes
Resposta Esperada:

 
 
 
  {
    "id": "1",
    "nome": "João da Silva",
    "cpf": 12345678901,
    "email": "jsilva@gmail.com"
  },
  {
    "id": "2",
    "nome": "Maria Oliveira",
    "cpf": 98765432100,
    "email": "maria.oliveira@example.com"
  }
 
## 3. Pagamento Routes
Consultar Pagamentos
 **Método**: GET
**URL**:  /api/consultapagamentos
Resposta Esperada:

 
 
 
  {
    "id": "12345",
    "cpf": "12345678901",
    "status": "Confirmado"
  },
  {
    "id": "67890",
    "cpf": "10987654321",
    "status": "Pendente"
  }
 
Confirmar Pedido de Pagamento
 **Método**: POST
**URL**:  /api/pedidoconfirmacaopagamento/{cpf}
Exemplo de **URL**:  /api/pedidoconfirmacaopagamento/12345678901
**Exemplo de Requisição**:

 
 
{
  "cpf": "12345678901",
  "status": "Confirmado"
}
Resposta Esperada:

 
 
{
  "message": "Pedido cadastrado com sucesso"
}
Receber Notificações de Pagamento do Mercado Pago
 **Método**: POST
**URL**:  /api/webhook/mercadopago
**Exemplo de Requisição**:

 
 
{
  "id": "1234567890",
  "status": "approved",
  "transaction_amount": 100.00
}
Resposta Esperada:

text
 
Notificação recebida com sucesso
Gerar QR Code para Pagamento
 **Método**: POST
**URL**:  /api/generate-qr-code
**Exemplo de Requisição**:

 
 
{
  "amount": 100.00
}
Resposta Esperada:

 
 
{
  "qr_code_url": "https://example.com/qrcode.png"
}
## 4. Pedido Routes
Cadastrar Pedido
 **Método**: POST
**URL**:  /api/pedido
**Exemplo de Requisição**:

 
 
{
  "cpf": "12345678901",
  "lanche": "1",
  "acompanhamento": "2",
  "bebida": "3",
  "status": "Enviado",
  "statuspagamento": "Não confirmado",
  "ondecomer": "Viagem"
}
Resposta Esperada:

 
 
{
  "id": "1",
  "cpf": "12345678901",
  "lanche": "1",
  "acompanhamento": "2",
  "bebida": "3",
  "status": "Enviado",
  "statuspagamento": "Não confirmado",
  "ondecomer": "Viagem"
}
Listar Todos os Pedidos
 **Método**: GET
**URL**:  /api/pedido
Resposta Esperada:

 
 
 
  {
    "id": "1",
    "cpf": "12345678901",
    "lanche": "1",
    "acompanhamento": "2",
    "bebida": "3",
    "status": "Enviado",
    "statuspagamento": "Não confirmado",
    "ondecomer": "Viagem"
  }
 
Acompanhamento do Pedido por CPF
 **Método**: GET
**URL**:  /api/pedidos/{cpf}
**Exemplo de URL**:  /api/pedidos/12345678901
Resposta Esperada:

 
 
{
  "id": "1",
  "cpf": "12345678901",
  "lanche": "1",
  "acompanhamento": "2",
  "bebida": "3",
  "status": "Enviado",
  "statuspagamento": "Não confirmado",
  "ondecomer": "Viagem"
}
Listar Pedidos Não Finalizados
 **Método**: GET
**URL**:  /api/pedidosnaofinalizados
Resposta Esperada:

 
 
 
  {
    "id": "1",
    "cpf": "12345678901",
    "lanche": "1",
    "acompanhamento": "2",
    "bebida": "3",
    "status": "Em preparação",
    "statuspagamento": "Não confirmado",
    "ondecomer": "Viagem"
  }
 
5. Produto Routes
Inserir Produto
 **Método**: POST
**URL**:  /api/produtos
**Exemplo de Requisição**:

 
 
{
  "codigo": 1,
  "nome": "Hamburguer",
  "categoria": "lanche",
  "descricao": "Pão, hamburguer e queijo",
  "preco": 15
}
Resposta Esperada:

 
 
{
  "message": "Produto inserido com sucesso"
}
Alterar Produto
 **Método**: PUT
**URL**:  /api/produtos/{codigo}
Exemplo de **URL**:  /api/produtos/1
**Exemplo de Requisição**:

 
 
{
  "nome": "Hamburguer Especial",
  "categoria": "lanche",
  "descricao": "Pão, hamburguer, queijo e bacon",
  "preco": 20
}
Resposta Esperada:

 
 
{
  "message": "Produto alterado com sucesso"
}
Deletar Produto
**Método**: DELETE
**URL**:  /api/produtos/{codigo}
**Exemplo de URL**:  /api/produtos/1
Resposta Esperada:

 
 
{
  "message": "Produto deletado com sucesso"
}
Listar Produtos por Categoria
**Método**: GET
**URL**:  /api/produtos/categoria/{categoria}
**Exemplo de URL**:  /api/produtos/categoria/lanche
Resposta Esperada:
 
  {
    "codigo": 1,
    "nome": "Hamburguer",
    "categoria": "lanche",
    "descricao": "Pão, hamburguer e queijo",
    "preco": 15
  }
Listar Produtos
 **Método**: GET
**URL**:  /api/produtos
Resposta Esperada:
  {
    "codigo": 1,
    "nome": "Hamburguer",
    "categoria": "lanche",
    "descricao": "Pão, hamburguer e queijo",
    "preco": 15
  },
  {
    "codigo": 2,
    "nome": "Batata Frita",
    "categoria": "acompanhamento",
    "descricao": "Batata frita com sal",
    "preco": 8
  }
