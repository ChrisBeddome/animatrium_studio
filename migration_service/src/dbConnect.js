import mariadb from 'mariadb'
import requireEnvVar from '../lib/utils/requireEnvVar.js'

const dbConfig = {
  host: requireEnvVar('DB_HOST'),
  port: Number(requireEnvVar('DB_PORT')),
  user: requireEnvVar('DB_USER'),
  password: requireEnvVar('DB_PASSWORD'),
  database: requireEnvVar('DB_NAME')
}

let conn

const getConn = async () => {
  if (!conn) {
    conn = await mariadb.createConnection(dbConfig)
  }
  return conn
}

const release = () => {
  if (conn) {
    conn.end()
    conn = null
  }
}

const transaction = async fn => {
  const connection = await getConn()
  try {
    await connection.beginTransaction()
    await fn(connection)
    await connection.commit()
  } catch (error) {
    await connection.rollback()
    throw error
  } finally {
    release()
  }
}

export { transaction }

