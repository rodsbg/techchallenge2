# Techchallenge2

Fiap - techChallenge 2 - Clean Arquitecture

Pre-requisitos

1 - docker
2 - kubernetes

Execução

Disponibilizar a imagem no DockerHub
1 - ir para o diretório lanchonete
2 - executar o: docker build -t rodgol/lanchonete:v1 . -f ../Dockerfile/Dockerfile
3 - realizar login no dockerhub: docker login -u rodgol
4 - token para carregar a imagem no dockerhub : dckr_pat_VQvc1DT-XmMT6_XwAhz4G0os8oE
5 - executar o push para o dockerhub: docker push rodgol/lanchonete:v1
6 - 
7 -

Criar os recursos no Cluster Kubernetes

1 - Na pasta Kubernetes com um cluster com acesso ao 

2 - kubectl create secret generic db-user-pass --from-literal=username=admin     --from-literal=password='S!B\*d$zDsb='

3 - 