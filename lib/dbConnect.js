import Sequelize from 'sequelize';
import throwMissingVarError from "../lib/throwMissingVarError.js";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(".env.local") });

// prettier-ignore
const hostname = process.env.DB_HOSTNAME || (() => {throwMissingVarError("DB_HOSTNAME")})();
// prettier-ignore
const user = process.env.DB_USER || (() => {throwMissingVarError("DB_USER")})();
// prettier-ignore
const password = process.env.DB_PASSWORD || (() => {throwMissingVarError("DB_PASSWORD")})();
// prettier-ignore
const database = process.env.DB_NAME || (() => {throwMissingVarError("DB_NAME")})();

const sequelize = new Sequelize(database, user, password, {
  host: hostname,
  dialect: "mariadb"
});

export default sequelize;