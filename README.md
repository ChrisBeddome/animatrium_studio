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

## Migrations

Both schema and data mirations are handled by the migration_service

To generate a schema migration, run the following command against the migration_service container:

```bash
npm run generate_schema_migration -- [migration_name]
```

The same can be done for data migrations:

```bash
npm run generate_data_migration -- [migration_name]
```

This will place a timestamped file in the respective migrations/ directory of the form:

```javascript
const up = () => {
    // return sql
}

const down = () => {
    // return sql
}
```

The `up` and `down` functions must return valid SQL which will be run during the migration step. Only the up() function is required, though if you wish to support rollbacks, you must provide a return value for the down() function as well.

To run the migrations, run the following against the migration_service container:

For schema migrations: 
```bash
npm run migrate_schema
```

For data migrations: 
```bash
npm run migrate_data
```
