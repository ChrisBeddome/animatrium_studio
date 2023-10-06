import requireEnvVar from './lib/utils/requireEnvVar.js'

export default {
  host: requireEnvVar('DB_HOST'),
  port: Number(requireEnvVar('DB_PORT')),
  user: requireEnvVar('DB_USER'),
  password: requireEnvVar('DB_PASSWORD'),
  database: requireEnvVar('DB_NAME')
}
