# Frontend – page de test EcoSignal

Page minimale (HTML / CSS / JavaScript, sans dépendance) qui appelle l'endpoint Hello de chaque microservice et affiche sa réponse.
Elle sert à la démonstration de la Validation 1 ; le vrai front-end (formulaire de signalement, tableau de bord municipal) arrive en séance 9.

| Microservice | Appel |
| --- | --- |
| user-service | `GET http://localhost:8081/hello` |
| report-service | `GET http://localhost:8082/hello` |
| media-service | `GET http://localhost:8083/api/media/hello` |
| geo-service | `GET http://localhost:8084/hello` |
| case-service | `GET http://localhost:8085/hello` |
| notification-service | `GET http://localhost:8086/hello` |
| analytics-service | `GET http://localhost:8087/hello` |

Lancer les microservices (voir le README à la racine), puis dans ce dossier :

```bash
python -m http.server 5500
```

Ouvrir `http://localhost:5500`.
