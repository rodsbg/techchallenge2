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

#### Camada de Apresentação
**Objetivo:** Fornecer uma interface de usuário intuitiva para funcionários e clientes.

- **Interface Web e Mobile:** Aplicações responsivas que permitem a interação com o sistema de qualquer dispositivo.
- **Painel de Administração:** Interface para gerenciamento de pedidos, clientes, produtos e campanhas promocionais.
- **Interface do Cliente:** Plataforma para realização de pedidos online, visualização de menu e promoções.

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
  - **Banco de dados utilizado:** MongoDB - string de conexão: `mongodb://seu-usuario:senha@host:porta/database`

#### Camada de Integração
**Objetivo:** Integrar com sistemas externos e serviços de terceiros.

- **Sistemas de Pagamento:** Integração com gateways de pagamento para processar transações.


