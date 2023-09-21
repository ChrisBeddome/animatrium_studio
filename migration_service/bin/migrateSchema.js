import runQuery from '../src/dbConnect.js'

async function setUpMigrationsTable() {
	const query = `
		CREATE TABLE IF NOT EXISTS schema_migrations (
			name VARCHAR(255) NOT NULL,
			PRIMARY KEY (name)
		)
	`

	runQuery(query)
}

function migrateSchema() {
	setUpMigrationsTable()
}

migrateSchema()
