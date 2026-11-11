# analytics-service (MS7 – microservice commun)

Statistiques et zones à risque, calculées à partir des événements publiés par les autres services.
Technologie avancée du projet : **Python / FastAPI**, base **MongoDB** (à partir de la séance 7).

## Lancer le service

```bash
python -m venv .venv
.venv\Scripts\activate          # Linux / macOS : source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --port 8087
```

- `GET http://localhost:8087/hello` : réponse de test
- `GET http://localhost:8087/health` : état du service
- `http://localhost:8087/docs` : Swagger généré par FastAPI

## Prévu

| Méthode et URI | Rôle | Succès | Erreurs |
| --- | --- | --- | --- |
| `GET /stats/hotspots?period=` | ADMIN | 200 | 400 |
| `GET /stats/by-category` | ADMIN | 200 | |

Événements consommés : `report.created`, `case.status-changed`, `media.added`.
