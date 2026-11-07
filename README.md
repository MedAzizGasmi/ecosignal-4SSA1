# EcoSignal

Application web de signalement citoyen des pollutions et décharges sauvages en Tunisie, avec suivi du traitement par les municipalités.
Mini-projet AWD 2026-2027 (architecture microservices, Spring Cloud).

## Équipe

| Nom et prénom | Microservice |
| --- | --- |
| (à compléter) | MS1 – user-service |
| (à compléter) | MS2 – report-service |
| (à compléter) | MS3 – media-service |
| (à compléter) | MS4 – geo-service |
| (à compléter) | MS5 – case-service |
| (à compléter) | MS6 – notification-service |
| Tout le groupe | MS7 – analytics-service (microservice commun, Python / FastAPI) |

Classe / groupe : (à compléter)
Outil de gestion de projet : (lien vers le tableau GitHub Projects / Trello / Jira)

## Sujet

Le citoyen signale une pollution (catégorie, description, photo, position GPS). Le signalement est rattaché à une commune, un dossier est créé pour la municipalité, le citoyen est notifié à chaque étape et gagne des points lorsque le signalement est résolu. L'administrateur consulte les statistiques et les zones les plus touchées.

Acteurs : citoyen (`CITIZEN`), agent municipal (`MUNICIPAL_AGENT`), administrateur (`ADMIN`).

## Microservices

| Service | Responsabilité | Technologie | Base |
| --- | --- | --- | --- |
| user-service | Profils, commune de rattachement, points de réputation | Spring Boot | H2 |
| report-service | Cycle de vie d'un signalement | Spring Boot | MySQL |
| media-service | Photos liées aux signalements | Spring Boot | H2 |
| geo-service | Communes, zones, rattachement d'une position GPS | Spring Boot | H2 |
| case-service | Dossiers municipaux, agents, statuts, commentaires | Spring Boot | MySQL |
| notification-service | Notifications et historique | Spring Boot | H2 |
| analytics-service | Statistiques et zones à risque | Python / FastAPI | MongoDB |

Une base par microservice, aucune base partagée.

## Architecture

Front-end → API Gateway (Spring Cloud Gateway) → microservices (Spring Boot, et Python pour analytics-service).
Infrastructure : Eureka (découverte), Config Server, Keycloak (authentification et rôles), broker de messages pour les événements asynchrones, Docker Compose.

Diagramme : `Documentation/Diagrams/architecture-globale.png` (à exporter depuis le dossier technique).

Communication :
- synchrone (OpenFeign) : report → geo, media → report, notification → user, case → geo ;
- asynchrone : `report.created`, `case.status-changed`, `media.added`.

## Structure du dépôt

```
ecosignal-<classe>-<groupe>/
├── Backend/
│   ├── user-service/
│   ├── report-service/
│   ├── media-service/
│   ├── geo-service/
│   ├── case-service/
│   ├── notification-service/
│   └── analytics-service/
├── Frontend/
├── Documentation/
│   ├── Presentation/
│   └── Diagrams/
└── README.md
```

## Lancement

À compléter au fil des séances (S5 à S9) :

```
docker compose up --build
```

- Gateway : http://localhost:8080 (à confirmer)
- Eureka : http://localhost:8761 (à confirmer)
- Keycloak : à compléter
- Swagger de chaque service : `/swagger-ui.html` (à confirmer)

## Documentation

Le dossier technique (sujet, acteurs, découpage, données, interactions, architecture, contrats d'API, planning) est dans `Documentation/`.

## Organisation Git

Une branche par fonctionnalité, fusion par pull request relue par un autre membre. Commits réguliers de chaque membre.
