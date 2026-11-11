# Frontend Hello EcoSignal

Page minimale qui affiche uniquement les réponses de :

- `GET http://localhost:8081/hello` (user-service existant)
- `GET http://localhost:8082/hello` (report-service)

Lancer les deux microservices, puis dans ce dossier :

```bash
python -m http.server 5500
```

Ouvrir : `http://localhost:5500`.
