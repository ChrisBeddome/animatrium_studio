import Sequelize from 'sequelize'
import requireEnvVar from '#root/lib/utils/requireEnvVar.js'

const hostname = requireEnvVar('DB_HOST')
const port = requireEnvVar('DB_PORT')
const user = requireEnvVar('DB_USER')
const password = requireEnvVar('DB_PASSWORD')
const database = requireEnvVar('DB_NAME')

const sequelize = new Sequelize(database, user, password, {
  host: hostname,
  port: port,
  dialect: "mariadb"
})

export default sequelize
