import Sequelize from 'sequelize';
import throwMissingVarError from "../util/throwMissingVarError.js";

const hostname = process.env.DB_HOSTNAME || (() => { throwMissingVarError("DB_HOSTNAME") })();
const port = process.env.DB_PORT || (() => { throwMissingVarError("DB_PORT") })();
const user = process.env.DB_USER || (() => { throwMissingVarError("DB_USER") })();
const password = process.env.DB_PASSWORD || (() => { throwMissingVarError("DB_PASSWORD") })();
const database = process.env.DB_NAME || (() => { throwMissingVarError("DB_NAME") })();

// MONKEYTIME
// next.js/packages/next/lib/is-serializable-props.ts does not support date objects
// All of our models have date objects in the form of createdAt and updatedAt
// JSON.parse(JSON.stringify(instance)) is a hack to fix this issue
const original = Sequelize.Model.prototype.toJSON;
Sequelize.Model.prototype.toJSON = function() {
  return JSON.parse(JSON.stringify(original.call(this)));
}

const sequelize = new Sequelize(database, user, password, {
  host: hostname,
  port: port,
  dialect: "mariadb"
});

export default sequelize;
