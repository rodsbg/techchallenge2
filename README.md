# Techchallenge2 - Grupo 11

Fiap - techChallenge 2 - Clean Arquitecture

O projecto do Tech Challenge foi desenvolvido baseado no aprendizado das aulas.

Rm349615 - Alexandre Montesino da Costa Campos <br />
Rm349612 - Ricardo Amaral Jara <br />
Rm350424 - Rodrigo Barboza Gonçalves

Pre-requisitos

1 - docker <br />
2 - kubernetes <br />
3 - Git

Recursos

node.js <br />
Swagger <br />
express <br />
mongodb <br />

Link de acesso: https://github.com/rodsbg/techchallenge2.git

Execução

Disponibilizar a imagem no DockerHub (https://hub.docker.com/repositories/rodgol)

1 - ir para o diretório lanchonete <br />
2 - executar o: docker build -t rodgol/lanchonete:v1.0.0 . -f ../Dockerfile/Dockerfile <br />
3 - realizar login no dockerhub: docker login -u rodgol <br />
4 - token para carregar a imagem no dockerhub : dckr_pat_VQvc1DT-XmMT6_XwAhz4G0os8oE <br />
5 - executar o push para o dockerhub: docker push rodgol/lanchonete:v1 (irá copiar para o dockeuhub)
7 - 

Criar os recursos no Cluster Kubernetes

1 - Na pasta Kubernetes aplicar para todos os yaml dentro da pasta não esquecer do ponto, kubectl apply -f . <br />
2 - kubectl get svc para pegar qual a porta que foi configurada e o IP externo <br />
3 - acessar pelo browser: http://<ip-externo>:<porta>/api-docs 

Acessando as apis

O Swagger esta configurado e as instruções de cadastro, consulta, estaão no swagger da API.
