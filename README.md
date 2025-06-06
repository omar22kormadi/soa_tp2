﻿# Registre de Personnes - SOAtp TP2

Ce projet est une API Node.js utilisant Express, SQLite et Keycloak pour la gestion sécurisée d’un registre de personnes.

## Prérequis

- Node.js (>= 14)
- npm
- SQLite3
- Un serveur Keycloak configuré
- Fichier `keycloak-config.json` dans le dossier du projet

## Installation

1. Clonez ce dépôt :
   ```bash
   git clone https://github.com/omar22kormadi/soa_tp2.git
   cd SOAtp/tp2
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Lancez le serveur :
   ```bash
   node index.js
   ```

## Endpoints

| Méthode | Route                | Sécurité      | Description                        |
|---------|----------------------|---------------|------------------------------------|
| GET     | `/`                  | Public        | Message d’accueil                  |
| GET     | `/secure`            | Keycloak      | Test d’authentification            |
| GET     | `/personnes`         | Keycloak      | Liste toutes les personnes         |
| GET     | `/personnes/:id`     | Keycloak      | Détail d’une personne              |
| POST    | `/personnes`         | Keycloak      | Ajoute une personne                |
| PUT     | `/personnes/:id`     | Keycloak      | Modifie une personne               |
| DELETE  | `/personnes/:id`     | Keycloak      | Supprime une personne              |

## Structure

- `index.js` : Point d’entrée principal, routes et logique API.
- `database.js` : Connexion et initialisation SQLite.
- `keycloak-config.json` : Configuration Keycloak (à fournir).

## Sécurité

Toutes les routes sauf `/` nécessitent une authentification via Keycloak.

## Auteur

- [Amor Kormadi]
