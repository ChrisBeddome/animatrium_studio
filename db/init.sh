#! /bin/bash

if [ -z "${MARIADB_ROOT_PASSWORD}" ]; then
    echo "Error: Must define MARIADB_ROOT_PASSWORD";
    echo "Exiting"
    exit 1
fi

if [ -z "${DB_NAME}" ]; then
    echo "Error: Must define DB_NAME";
    echo "Exiting"
    exit 1
fi

if [ -z "${DB_USER}" ]; then
    echo "Error: Must define DB_USER";
    echo "Exiting"
    exit 1
fi

if [ -z "${DB_PASSWORD}" ]; then
    echo "Error: Must define DB_PASSWORD";
    echo "Exiting"
    exit 1
fi

run_sql () {
  mysql -u root -p$MARIADB_ROOT_PASSWORD -e $1
}

run_sql "CREATE DATABASE IF NOT EXISTS $DB_NAME;"
run_sql "GRANT ALL ON $DB_NAME.* TO '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'"

