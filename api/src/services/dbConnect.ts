import requireEnvVar from 'lib/utils/requireEnvVar'
import knex from 'knex'

const host: string = requireEnvVar('DB_HOST')
const port: number = Number(requireEnvVar('DB_PORT'))
const user: string = requireEnvVar('DB_USER')
const password: string = requireEnvVar('DB_PASSWORD')
const database: string = requireEnvVar('DB_NAME')

const db = knex({
  client: 'mariadb',
  connection: {
    host,
    port,
    user,
    password,
    database,
  },
  pool: {min: 0, max: 10},
  acquireConnectionTimeout: 10000
})

export default db
