#! /bin/bash

run_sql () {
  mysql -u root -p$MARIADB_ROOT_PASSWORD -e $1
}

run_sql "CREATE DATABASE IF NOT EXISTS $DB_NAME;"
run_sql "GRANT ALL ON $DB_NAME.* TO '$DB_USER'@'%' IDENTIFIED BY '$DB_PASSWORD'"

