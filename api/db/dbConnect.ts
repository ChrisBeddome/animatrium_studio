import knex from 'knex'
import dbConfig from 'db/knexfile'

const db = knex(dbConfig)

export default db
