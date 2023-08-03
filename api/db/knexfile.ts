import requireEnvVar from 'lib/utils/requireEnvVar'

const host: string = requireEnvVar('DB_HOST')
const port: number = Number(requireEnvVar('DB_PORT'))
const user: string = requireEnvVar('DB_USER')
const password: string = requireEnvVar('DB_PASSWORD')
const database: string = requireEnvVar('DB_NAME')
const poolMin: number = Number(requireEnvVar('DB_POOL_MIN'))
const poolMax: number = Number(requireEnvVar('DB_POOL_MAX'))
const dbConnectTimout: number = Number(requireEnvVar('DB_CONNECT_TIMOUT_MS'))

export default {
  client: 'mariadb',
  connection: {
    host,
    port,
    user,
    password,
    database,
  },
  pool: {
    min: poolMin,
    max: poolMax
  },
  acquireConnectionTimeout: dbConnectTimeout,
  migrations: {
    tableName: 'migrations',
    extension: 'ts'
  }
}
