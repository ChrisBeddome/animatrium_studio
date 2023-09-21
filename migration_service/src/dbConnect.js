import mariadb from 'mariadb'
import requireEnvVar from '../lib/utils/requireEnvVar.js'

const host = requireEnvVar('DB_HOST')
const port = Number(requireEnvVar('DB_PORT'))
const user = requireEnvVar('DB_USER')
const password = requireEnvVar('DB_PASSWORD')
const database = requireEnvVar('DB_NAME')

async function connect() {
	const conn = await mariadb.createConnection({ host, user, password, port, database })
	console.log("Succesfully connected to MariaDB - connection id:" + conn.threadId)
	return conn
}

async function runQuery(query) {
	const conn = await connect()
	const res = await conn.query(query)
	conn.end()
}

export default runQuery

