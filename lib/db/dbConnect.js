import Sequelize from 'sequelize';
import throwMissingVarError from "../util/throwMissingVarError.js";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(".env.local") });

const hostname = process.env.DB_HOSTNAME || (() => { throwMissingVarError("DB_HOSTNAME") })();
const user = process.env.DB_USER || (() => { throwMissingVarError("DB_USER") })();
const password = process.env.DB_PASSWORD || (() => { throwMissingVarError("DB_PASSWORD") })();
const database = process.env.DB_NAME || (() => { throwMissingVarError("DB_NAME") })();

const sequelize = new Sequelize(database, user, password, {
  host: hostname,
  dialect: "mariadb"
});

export default sequelize;