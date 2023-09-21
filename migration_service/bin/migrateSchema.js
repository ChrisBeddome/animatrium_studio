import connect from './dbConnect.js'

async function runQuery(query) {
	const conn = await connect()
	const res = await conn.query(query)
	conn.end()
}

async function setUpMigrationsTable() {
	const query = `
		CREATE TABLE IF NOT EXISTS schema_migrations (
			id INT NOT NULL AUTO_INCREMENT,
			name VARCHAR(255) NOT NULL,
			PRIMARY KEY (id)
		)
	`

	runQuery(query)
}

function migrateSchema() {
	setUpMigrationsTable()
}

migrateSchema()
