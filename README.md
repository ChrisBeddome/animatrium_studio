# Animatrium Studio

Animatrium Studio is an eCommerce application built with nextJS

## Installation

create `.env.local` file in the project root directory using the template:

```bash
NEXT_HOSTNAME = 0.0.0.0
NEXT_PORT = 80

DB_NAME = animatrium_studio
DB_HOSTNAME = db
DB_USER = animatrium_admin
DB_PASSWORD = password
DB_ROOT_PASSWORD = root
```
## Init database

```bash
  npm run db_init
```

This will create the database table and user with the values specified in your env.local file

## Seed database

```bash
  npm run db_seed
```

## Usage

start the development server

```bash
npm run dev
```

start production server

```bash
npm run build
npm run start
```


docker run -d --env MYSQL_ROOT_PASSWORD=root --network animatrium --network-alias db mariadb:10.9.3
docker run -d --network animatrium -p 3000:80 animatrium-node:latest
