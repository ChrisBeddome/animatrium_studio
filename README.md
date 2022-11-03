# Animatrium Studio

Animatrium Studio is an eCommerce application built with nextJS

## Installation

Install [Docker](https://www.docker.com/get-started/)

create `.env` file in the project root directory using the template:

```bash
NEXT_HOSTNAME = 0.0.0.0
NEXT_PORT = 80

DB_NAME = animatrium
DB_HOSTNAME = db
DB_PORT = 3306
DB_USER = animatrium_admin
DB_PASSWORD = password

MARIADB_ROOT_PASSWORD = root
```
## Usage

start the development server

```bash
docker-compose up
```

## Migrations

To run schema migrations, issue the `db_migrate` command to the container running the nextJS application

```bash
docker-compose exec next npm run db_migrate
```

