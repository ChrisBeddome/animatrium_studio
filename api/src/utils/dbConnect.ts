import mariadb from 'mariadb'
import requireEnvVar from '../../lib/utils/requireEnvVar.js'

const dbConfig: mariadb.PoolConfig = {
  host: requireEnvVar('DB_HOST'),
  port: Number(requireEnvVar('DB_PORT')),
  user: requireEnvVar('DB_USER'),
  password: requireEnvVar('DB_PASSWORD'),
  database: requireEnvVar('DB_NAME')
}

let pool: mariadb.Pool | undefined

const getPool = (): mariadb.Pool => {
  pool = pool || mariadb.createPool(dbConfig)
  return pool
}

const connect = async (): Promise<mariadb.PoolConnection> => {
  return await getPool().getConnection()
}

const query = async(sql: string): Promise<any> => {
  const connection = await connect()
  const result: any = await connection.execute(sql)
  connection.release()
  return result
}

type transactionCallback = (connection: mariadb.PoolConnection) => Promise<any>
const transaction = async (fn: transactionCallback): Promise<any> => {
  const connection: mariadb.PoolConnection = await connect()
  try {
    await connection.beginTransaction()
    const val: any = await fn(connection)
    await connection.commit()
    return val
  } catch (error) {
    await connection.rollback()
    throw error
  } finally {
    await connection.release()
  }
}

export { query, transaction }

