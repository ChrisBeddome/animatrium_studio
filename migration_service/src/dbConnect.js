import mariadb from 'mariadb'
import requireEnvVar from '../lib/utils/requireEnvVar.js'

const host = requireEnvVar('DB_HOST')
const port = Number(requireEnvVar('DB_PORT'))
const user = requireEnvVar('DB_USER')
const password = requireEnvVar('DB_PASSWORD')
const database = requireEnvVar('DB_NAME')

let conn
const getConn = async () => {
  return new Promise( async (res, rej) => {
    if (conn) {
      res(conn)
    } else {
      conn = await mariadb.createConnection({ host, user, password, port, database })
      res(conn)
    }
  })
}

const release = () => {
  conn.end()
  conn = null
}

const transaction = fn => {
  return new Promise(async (res, rej) => {
    const connection = await getConn()
    await connection.beginTransaction()
    try {
      await fn(connection)
      await connection.commit()
    } catch (e) {
      await connection.rollback()
      throw(e)
    } finally {
      release()
    }
  })
}

export { transaction }
