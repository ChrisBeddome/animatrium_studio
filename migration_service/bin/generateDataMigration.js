import generateMigration from '../src/generateMigration.js'

const userInput = process.argv[2]
const migrationDirName = "data"
try {
  generateMigration(migrationDirName, userInput)
} catch(e) {
  console.log(e.message)
  process.exit(1)
}
