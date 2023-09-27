import fs from 'fs/promises';
import path from 'path'
import url from 'url';
import { transaction } from '../src/dbConnect.js'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

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

const getFilesForMigration = async connection => {
  const completedMigrationFileNames = (
    await connection.execute(getCompletedMigrationsQuery())
  ).map(row => row.name)

  const allMigrationFileNames = (
    await fs.readdir(path.join(__dirname, '../migrations/schema/'))
  ).filter(filename => filename.endsWith(".js"))
  
  return allMigrationFileNames
    .filter(filename => !completedMigrationFileNames.includes(filename))
}

const migrateOne = async (connection, filename) => {
  try {
    const module = await import(path.join(__dirname, `../migrations/schema/${filename}`))
    await connection.execute(module.up())
    await connection.execute(insertMigrationQuery(filename))
  } catch (e) {
    throw e
  }
};

const migrateSchema = async connection => {
  try {
    await connection.execute(getTableSetupQuery())
    const filesToMigrate = await getFilesForMigration(connection)
    for (const filename of filesToMigrate) {
      await migrateOne(connection, filename)
    }
  } catch(e) {
    throw e
  }
}

transaction(migrateSchema)
