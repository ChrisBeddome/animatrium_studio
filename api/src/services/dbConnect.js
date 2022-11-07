import Sequelize from 'sequelize'
import throwMissingVarError from "../../lib/utils/throwMissingVarError.js"

const hostname = process.env.DB_HOSTNAME || (() => { throwMissingVarError("DB_HOSTNAME") })()
const port = process.env.DB_PORT || (() => { throwMissingVarError("DB_PORT") })()
const user = process.env.DB_USER || (() => { throwMissingVarError("DB_USER") })()
const password = process.env.DB_PASSWORD || (() => { throwMissingVarError("DB_PASSWORD") })()
const database = process.env.DB_NAME || (() => { throwMissingVarError("DB_NAME") })()

const sequelize = new Sequelize(database, user, password, {
  host: hostname,
  port: port,
  dialect: "mariadb"
})

export default sequelize
