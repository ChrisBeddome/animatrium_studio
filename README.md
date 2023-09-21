# Animatrium Studio

Animatrium Studio is an eCommerce application built with Next.js and Express.js

## Installation

Yer gonna need [Docker](https://www.docker.com/get-started/)

create `.env` file in the `docker/dev` directory using the template:

```bash
API_HOST = api
API_PORT = 80
API_WORKDIR = /app
API_MAX_WORKER_COUNT = 4
NODE_ENV = development

CLIENT_HOST = client
CLIENT_PORT = 80
CLIENT_WORKDIR = /app
NEXT_TELEMETRY_DISABLED = 1

DB_HOST = db
DB_PORT = 3306
DB_NAME = animatrium
DB_USER = animatrium_admin
DB_PASSWORD = password
DB_POOL_MIN = 0
DB_POOL_MAX = 10
DB_CONNECT_TIMEOUT_MS = 10000
MARIADB_ROOT_PASSWORD = root

REVERSE_PROXY_HOST = reverse-proxy
REVERSE_PROXY_PORT = 80
```
## Usage

Start the development server

```bash
docker compose up
```

To generate a schema migration, run the following command against the migration_service container

```bash
npm run generate_schema_migration -- [migration_name]
```

This will place a timestamped file in the migrations/schema directory. The same can be done for data migrations:

```bash
npm run generate_data_migration -- [migration_name]
```

To run schema migrations, run the `npm run db_migrate` command against the api container

```bash
docker compose exec api npm run db_migrate
```

## Seed development/test data (optional) 

```bash
docker compose exec api npm run db_seed
```
