# Animatrium Studio

Animatrium Studio is an eCommerce application built with nextJS

## Installation
Install [MariaDB](https://www.digitalocean.com/community/tutorials/how-to-install-mariadb-on-ubuntu-20-04).

create database and user (make sure these are consistent with your environment variables)

grant necessary privileges to user

run `npm install` from root directory

create `.env.local` file in the project root directory using the template:

```bash
NEXT_HOSTNAME = localhost
NEXT_PORT = 3000

DB_NAME=animatrium_studio
DB_HOSTNAME = 127.0.0.1
DB_PORT=3306
DB_USER=animatrium_admin
DB_PASSWORD=password
```

## Seed database schema

```bash
 TODO
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