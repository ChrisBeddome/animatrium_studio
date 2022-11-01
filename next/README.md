# Animatrium Studio

Animatrium Studio is an eCommerce application built with nextJS

## Installation
Install [MariaDB](https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04).

run `npm install` from root directory

create `.env.local` file in the project root directory using the template:

```bash
NEXT_HOSTNAME = localhost
NEXT_PORT = 3000

DB_NAME = animatrium_studio
DB_HOSTNAME = 127.0.0.1
DB_USER = animatrium_admin
DB_PASSWORD = password
```
## Init database

```bash
  DB_ROOT_PASSWORD=[password] npm run db_init
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
