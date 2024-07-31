# Techchallenge2 - Grupo 62

## Fiap - techChallenge 2 - Clean Arquitecture

O projecto do Tech Challenge foi desenvolvido baseado no aprendizado das aulas.

Rm349615 - Alexandre Montesino da Costa Campos <br />
Rm349612 - Ricardo Amaral Jara <br />
Rm350424 - Rodrigo Barboza Gonçalves

## Vídeo You tube demonstrando a infraestrutura na cloud


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
2 - executar o: **docker build -t rodgol/lanchonete:v1 . -f Dockerfile/Dockerfile** <br />
3 - realizar login no dockerhub: **docker login -u rodgol** <br />
4 - token para carregar a imagem no dockerhub : **dckr_pat_GJwsJodWmVFg2vege2upWmDzhHs** <br />
5 - executar o push para o dockerhub: **docker push rodgol/lanchonete:v1** (irá copiar para o dockeuhub) 

## Criar os recursos no Cluster Kubernetes

1 - Na pasta Kubernetes aplicar para todos os yaml dentro da pasta não esquecer do ponto: **kubectl** **apply** **-f** .<br />
2 - kubectl get svc para pegar qual a porta que foi configurada e o IP externo (Verificar se esta correto o Loadbalancer) <br />
3 - acessar o swagger pelo browser: **http://ip-externo:porta/api-docs** 

## Acessando as apis

O Swagger esta configurado e as instruções de cadastro, consulta, estão no swagger da API.



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

![image](https://github.com/user-attachments/assets/a1a9fb59-7f79-4c85-aa4b-27a9fdb125d1)


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

## 1. Cadastro de Cliente
**Método**: POST
**URL**: /api/clientes

Exemplo de Requisição:
```
curl -X POST "http://localhost:3000/api/clientes" \
-H "Content-Type: application/json" \
-d '{
  "nome": "João da Silva",
  "cpf": "12345678901",
  "email": "jsilva@gmail.com"
}'
```
Resposta Esperada:

```
{
  "message": "Cliente cadastrado com sucesso"
}
```
## 2. Listar Todos os Clientes
**Método**: GET
**URL**: /api/clientes

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/clientes"
```
Resposta Esperada:
```
  {
    "nome": "João da Silva",
    "cpf": "12345678901",
    "email": "jsilva@gmail.com"
  },
  {
    "nome": "Maria Oliveira",
    "cpf": "98765432100",
    "email": "maria.oliveira@gmail.com"
  }
```
## 3. Consultar Cliente pelo CPF
**Método**: GET
**URL**: /api/clientes/{cpf}
**Exemplo de URL**:  ```/api/clientes/12345678901 ```

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/clientes/12345678901"
```
Resposta Esperada:
```
{
  "nome": "João da Silva",
  "cpf": "12345678901",
  "email": "jsilva@gmail.com"
}
```
## 4. Cadastro de Campanha
**Método**: PUT
**URL**: /api/campanha/{cpf}
**Exemplo de URL**: ```/api/campanha/12345678901```

Exemplo de Requisição:
```
curl -X PUT "http://localhost:3000/api/campanha/12345678901" \
-H "Content-Type: application/json" \
-d '{
  "cpf": "12345678901",
  "campanha": "15% de desconto nas próximas compras"
}'
```
Resposta Esperada:

```
{
  "message": "Campanha cadastrada com sucesso"
}
```
## 5. Listar Todas as Campanhas
**Método**: GET
**URL**: /api/campanha

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/campanha"
```
Resposta Esperada:

```
  {
    "cpf": "12345678901",
    "campanha": "15% de desconto nas próximas compras"
  }
```
## 6. Cadastro de Pedido
**Método**: POST
**URL**: /api/pedido

Exemplo de Requisição:
```
curl -X POST "http://localhost:3000/api/pedido" \
-H "Content-Type: application/json" \
-d '{
  "cpf": "12345678901",
  "lanche": "1",
  "acompanhamento": "2",
  "bebida": "3",
  "status": "Enviado",
  "statuspagamento": "Não confirmado",
  "ondecomer": "Viagem"
}'
```
Resposta Esperada:
```
{
  "message": "Pedido cadastrado com sucesso"
}
```
## 7. Listar Todos os Pedidos
**Método**: GET
**URL**: /api/pedido
Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/pedido"
```
Resposta Esperada:

```
  {
    "cpf": "12345678901",
    "lanche": "1",
    "acompanhamento": "2",
    "bebida": "3",
    "status": "Enviado",
    "statuspagamento": "Não confirmado",
    "ondecomer": "Viagem"
  }
```
## 8. Consultar Pedidos Não Finalizados
**Método**: GET
**URL**: /api/pedidosnaofinalizados

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/pedidosnaofinalizados"
```
Resposta Esperada:

```
  {
    "cpf": "12345678901",
    "lanche": "1",
    "acompanhamento": "2",
    "bebida": "3",
    "status": "Enviado",
    "statuspagamento": "Não confirmado",
    "ondecomer": "Viagem"
  }
```
## 9. Inserir Produto
**Método**: POST
**URL**: /api/produtos

Exemplo de Requisição:
```
curl -X POST "http://localhost:3000/api/produtos" \
-H "Content-Type: application/json" \
-d '{
  "codigo": 1,
  "nome": "Hamburguer",
  "categoria": "lanche",
  "descricao": "Pão, hamburguer e queijo",
  "preco": 15
}'
```
Resposta Esperada:
```
{
  "message": "Produto inserido com sucesso"
}
```
## 10. Alterar Produto
**Método**: PUT
**URL**: /api/produtos
**Exemplo de URL**: /api/produtos

Exemplo de Requisição:
```
curl -X PUT "http://localhost:3000/api/produtos" \
-H "Content-Type: application/json" \
-d '{
  "codigo": 1,
  "nome": "Hamburguer Especial",
  "categoria": "lanche",
  "descricao": "Pão, hamburguer, queijo e bacon",
  "preco": 20
}'
```
Resposta Esperada:

```
{
  "message": "Produto alterado com sucesso"
}
```
## 11. Deletar Produto
**Método**: DELETE
**URL**: /api/produtos/{codigo}
**Exemplo de URL**: /api/produtos/1

Exemplo de Requisição:
```
curl -X DELETE "http://localhost:3000/api/produtos/1"
```
Resposta Esperada:
```
{
  "message": "Produto deletado com sucesso"
}
```
## 12. Listar Produtos por Categoria
**Método**: GET
**URL**: /api/produtos/categoria/{categoria}
Exemplo de **URL**: /api/produtos/categoria/lanche

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/produtos/categoria/lanche"
```
Resposta Esperada:

```
  {
    "codigo": 1,
    "nome": "Hamburguer",
    "categoria": "lanche",
    "descricao": "Pão, hamburguer e queijo",
    "preco": 15
  }
```
## 13. Consultar Pagamentos
**Método**: GET
**URL**: /api/consultapagamentos

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/consultapagamentos"
```
Resposta Esperada:

```
  {
    "id": "12345",
    "cpf": "12345678901",
    "status": "Confirmado"
  }
```
## 14. Cadastrar Pedido e Confirmar Pagamento
**Método**: POST
**URL**: /api/pedidoconfirmacaopagamento/{cpf}
**Exemplo de URL**: /api/pedidoconfirmacaopagamento/12345678901

Exemplo de Requisição:
```
curl -X POST "http://localhost:3000/api/pedidoconfirmacaopagamento/12345678901" \
-H "Content-Type: application/json" \
-d '{
  "cpf": "12345678901",
  "status": "Confirmado"
}'
```
Resposta Esperada:

```
{
  "message": "Pedido cadastrado com sucesso"
}
```
## 15. Receber Notificações de Pagamento do Mercado Pago
**Método**: POST
**URL**: /api/webhook/mercadopago

Exemplo de Requisição:
```
curl -X POST "http://localhost:3000/api/webhook/mercadopago" \
-H "Content-Type: application/json" \
-d '{
  "id": "1234567890",
  "status": "approved",
  "transaction_amount": 100.00
}'
```
Resposta Esperada:

```
{
  "message": "Notificação recebida com sucesso"
}
```
## 16. Gerar QR Code para Pagamento
**Método**: GET
**URL**: /api/qrcode/{pedidoId}
**Exemplo de URL**: /api/qrcode/987654321

Exemplo de Requisição:
```
curl -X GET "http://localhost:3000/api/qrcode/987654321"
```
Resposta Esperada:

```
{
  "qrcode": "http://example.com/qrcode/987654321"
}
```
