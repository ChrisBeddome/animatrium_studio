import mariadb from "mariadb";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.resolve(".env.local") });
import throwMissingVarError from "../lib/throwMissingVarError.js";

init();

function init() {
  try {
    setupDatabase()
  } catch(e) {
    console.log(e);
  }
}

async function setupDatabase() {
  const hostname = process.env.DB_HOSTNAME || (() => { throwMissingVarError("DB_HOSTNAME") })();
  const database = process.env.DB_NAME || (() => { throwMissingVarError("DB_NAME") })();
  const user = process.env.DB_USER || (() => { throwMissingVarError("DB_USER") })();
  const password = process.env.DB_PASSWORD || (() => { throwMissingVarError("DB_PASSWORD") })();
  const rootPassword = process.argv[2] || (() => { throw new Error("mariaDB root password not supplied") })();

  const connection = await createConnection(hostname, rootPassword) 

  await createDatabase(database, connection);
  await createUser(user, password, database, connection);

  await connection.close();

  createTables()
}

async function createConnection(hostname, rootPassword) {
  return await mariadb.createConnection({
    host: hostname,
    user: "root",
    password: rootPassword
  });
}

function createDatabase(dbName, connection) {
  return connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`);
}

function createUser(username, password, dbName, connection) {
  return connection.query(`GRANT ALL ON ${dbName}.* TO '${username}'@'localhost' IDENTIFIED BY '${password}' WITH GRANT OPTION;`);
}

import product from "../models/product.js";

function createTables() {
  product.sync({alter: true});
}
