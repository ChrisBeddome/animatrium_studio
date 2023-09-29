import fs from 'fs/promises'
import path from 'path'
import url from 'url'

const getDateString = () => new Date().toISOString().replace(/[-T:.]/g, '')

const generateFileName = migrationName => `${getDateString()}_${migrationName}.js`

const generateFileContent = () => {
  return `export const up = () => {
  // return SQL query for migration up
}

export const down = () => {
  // return SQL query for migration down
}
`
}

const generateMigration = async (dirName, migrationName) => {
  if (!migrationName || migrationName.trim() === '') {
    throw new Error('Please provide a valid file name.')
  }
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
  const migrationDir = path.join(__dirname, `../migrations/${dirName}/`)
  const fileName = generateFileName(migrationName)
  const filePath = path.join(migrationDir, fileName)
  const fileContent = generateFileContent()
  await fs.writeFile(filePath, fileContent)
}

export default generateMigration
