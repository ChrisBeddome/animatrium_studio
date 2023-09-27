import fs from 'fs' 
import path from 'path'
import url from 'url';
import { promisify } from 'util'
import { transaction } from '../src/dbConnect.js'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const readdir = promisify(fs.readdir)

const setupDir = directoryPath => {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true })
  } 
}

const getTableSetupQuery = () => (`
  CREATE TABLE IF NOT EXISTS schema_migrations (
    name VARCHAR(255) NOT NULL,
    PRIMARY KEY (name)
  )
`)

const getCompletedMigrationsQuery = () => (`
  SELECT name FROM schema_migrations;
`)

const insertMigrationQuery = filename => (`
  INSERT INTO schema_migrations (name) VALUES ('${filename}')
`)

const getFilesForMigration = connection => {
  return new Promise(async (res, rej) => {
    const completedMigrationFileNames = (await connection.execute(getCompletedMigrationsQuery())).map(row => row.name)
    const allMigrationFileNames = await readdir(path.join(__dirname, '../migrations/schema/'))
    res(allMigrationFileNames.filter(filename => !completedMigrationFileNames.includes(filename)))
  })
}

const migrateOne = (connection, filename) => {
  return new Promise(async (res, rej) => {
    try {
      const module = await import(path.join(__dirname, `../migrations/schema/${filename}`));
      await connection.execute(module.up())
      await connection.execute(insertMigrationQuery(filename))
      res()
    } catch (e) {
      rej(e)
    }
  })
} 

const migrateSchema = connection => {
  return new Promise(async (res, rej) => {
    setupDir(path.join(__dirname, `../migrations/schema/`))
    await connection.execute(getTableSetupQuery())
    const filesToMigrate = await getFilesForMigration(connection)
    try {
      for (let i = 0; i < filesToMigrate.length; i++) {
        await migrateOne(connection, filesToMigrate[i])
      }
    } catch(e) {
      rej(e)
    }

    res()
  })
}

transaction(migrateSchema)
