import requireEnvVar from 'lib/utils/requireEnvVar'

const hostname: string = requireEnvVar('DB_HOST')
const port: number = Number(requireEnvVar('DB_PORT'))
const user: string = requireEnvVar('DB_USER')
const password: string = requireEnvVar('DB_PASSWORD')
const database: string = requireEnvVar('DB_NAME')

export default "TODO"
