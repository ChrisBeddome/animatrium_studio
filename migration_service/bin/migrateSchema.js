import fs from 'fs' 
import path from 'path'
import url from 'url';
import { promisify } from 'util'
import runQuery from '../src/dbConnect.js'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
const readdir = promisify(fs.readdir)

const tableSetupQuery = () => (`
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

const runMigration = (query, name) => {
	runQuery(query)
	runQuery(insertMigrationQuery(name))
}

const migrateSchema = async () => {
	await runQuery(tableSetupQuery())
	const completedMigrationFileNames = (await runQuery(getCompletedMigrationsQuery())).map(row => row.name)
	const allMigrationFileNames = await readdir(path.join(__dirname, '../migrations/schema/'))
	const incompleteMigrationFileNames = allMigrationFileNames.filter(filename => !completedMigrationFileNames.includes(filename)) 

	incompleteMigrationFileNames.forEach(async filename => {
		const module = await import(path.join(__dirname, `../migrations/schema/${filename}`));
		runMigration(module.up(), filename)
	})
}

migrateSchema()
