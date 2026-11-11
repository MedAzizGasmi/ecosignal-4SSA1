"""analytics-service (MS7, microservice commun) : statistiques et zones a risque.

Validation 1 : squelette du projet uniquement. La consommation des evenements
(report.created, case.status-changed, media.added) et le stockage MongoDB
arrivent en seance 7.
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import PlainTextResponse

app = FastAPI(title="analytics-service", version="0.0.1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["GET"],
    allow_headers=["*"],
)


@app.get("/hello", response_class=PlainTextResponse)
def hello() -> str:
    return "Hello from analytics-service"


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "UP"}
