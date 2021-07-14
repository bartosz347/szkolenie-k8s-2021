# Materiały do szkolenia z podstaw Kubernetesa (2021)

### Docker

Build and tag an image  
`docker build -t ghcr.io/bartosz347/szkolenie_k8s_app:master -t szkolenie_k8s_app:master --pull .`

Push the image to the registry  
`docker push ghcr.io/bartosz347/szkolenie_k8s_app:master`

Create and start a new container  
`docker run --rm -d -p 127.0.0.1:3000:3000 szkolenie_k8s_app:master`

Show running containers  
`docker ps`

Stop a container  
`docker stop CONTAINER`




### Kubernetes

Apply a config file  
`kubectl apply -f FILE`


Restart all pods from a deployment  
`kubectl rollout restart deployment szkolenie-app-deployment`


Check rollout status  
`kubectl rollout status deployment szkolenie-app-deployment`


Scale a deployment  
`kubectl scale --replicas=3 deployment szkolenie-app-deployment`


Remove resources  
`kubectl delete -f FILE`


### Test

`curl -v http://localhost:30300/`

