# process-api

Para correr ejecutar:

```
sudo docker build -t papi .

sudo docker run -it --init -p 8080:8080 papi

```
Otra forma de ejecutarlo es (con esto esta habilitado nodemon):
```
sudo docker-compose up --build
```
Para correr los tests ejecutar el siguiente comando:
```
npm test
```


Para matarlo ejecutar el siguiente comando:
```
sudo docker ps
```
De ahi tomar el CONTAINER ID de la papi y ejecutar:
```
sudo docker kill <container id>
```
Si por algun motivo tienen que borrar todas las imagenes ejecutar:
```
sudo docker system prune -a --volumes
```
