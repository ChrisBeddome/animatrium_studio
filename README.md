# Animatrium Studio

Animatrium Studio is an eCommerce application built with Next.js and Express.js

## Installation

Yer gonna need [Docker](https://www.docker.com/get-started/)

create `.env` file in the `docker/dev` directory using the template:

```bash
API_HOST = api
API_PORT = 80
API_WORKDIR = /app

CLIENT_HOST = client
CLIENT_PORT = 80
CLIENT_WORKDIR = /app

DB_HOST = db
DB_PORT = 3306
DB_NAME = animatrium
DB_USER = animatrium_admin
DB_PASSWORD = password
MARIADB_ROOT_PASSWORD = root

REVERSE_PROXY_HOST = reverse-proxy
REVERSE_PROXY_PORT = 80

NODE_ENV = development
```
## Usage

Start the development server

```bash
docker compose up
```

## Migrations

To run schema migrations, issue the `db_migrate` command to the container running the API application

```bash
docker compose exec api npm run db_migrate
```

## Seed development/test data (optional) 

```bash
docker compose exec api npm run db_seed
```
