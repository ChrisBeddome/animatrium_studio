import mariadb from 'mariadb'
import requireEnvVar from '../../lib/utils/requireEnvVar.js'

const dbConfig: mariadb.PoolConfig = {
  host: requireEnvVar('DB_HOST'),
  port: Number(requireEnvVar('DB_PORT')),
  user: requireEnvVar('DB_USER'),
  password: requireEnvVar('DB_PASSWORD'),
  database: requireEnvVar('DB_NAME')
}

const	pool: mariadb.Poolss = mariadb.createPool(dbConfig)

export default pool

