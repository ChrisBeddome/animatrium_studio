import runQuery from '../src/dbConnect.js'

const setUpMigrationsTable() => {
	return `
		CREATE TABLE IF NOT EXISTS schema_migrations (
			name VARCHAR(255) NOT NULL,
			PRIMARY KEY (name)
		)
	`
}

const migrateSchema() = async () => {
	await runQuery(tableSetupQuery())
}

migrateSchema()
