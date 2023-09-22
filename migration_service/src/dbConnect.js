import mariadb from 'mariadb'
import requireEnvVar from '../lib/utils/requireEnvVar.js'

const host = requireEnvVar('DB_HOST')
const port = Number(requireEnvVar('DB_PORT'))
const user = requireEnvVar('DB_USER')
const password = requireEnvVar('DB_PASSWORD')
const database = requireEnvVar('DB_NAME')

const connect = async () => {
	const conn = await mariadb.createConnection({ host, user, password, port, database })
	console.log("Succesfully connected to MariaDB - connection id:" + conn.threadId)
	return conn
}

const runQuery = query => {
	return new Promise(async (res, rej) => {
		const conn = await connect()
		const response = await conn.query(query)
		conn.end()
		res(response)
	})
}

export default runQuery

