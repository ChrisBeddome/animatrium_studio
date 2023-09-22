import fs from 'fs'
import path from 'path'
import url from 'url';
import runQuery from '../src/dbConnect.js'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const tableSetupQuery = () => (`
CREATE TABLE IF NOT EXISTS schema_migrations (
	name VARCHAR(255) NOT NULL,
	PRIMARY KEY (name)
)
	`)

const migrateSchema = async () => {
	await runQuery(tableSetupQuery())
	const migrations = fs.readdir(path.join(__dirname, '../migrations/schema/'), (err, files) => {
		if (err) {
			console.error('Error reading file:', err);
			return;
		}
		files.forEach(file => {
			console.log(file)
		})
	})
}

migrateSchema()
