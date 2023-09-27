import fs from 'fs/promises'
import path from 'path'
import url from 'url'
const __dirname = url.fileURLToPath(new URL('.', import.meta.url))
const migrationDir = path.join(__dirname, '../migrations/schema/')

const getDateString = () => new Date().toISOString().replace(/[-T:.]/g, '')

const generateFileName = (userSuppliedName) => `${getDateString()}_${userSuppliedName}.js`

const generateFileContent = () => {
  return `export const up = () => {
  // return SQL query for migration up
}

export const down = () => {
  // return SQL query for migration down
}
`
}

const createFile = async (userInput) => {
  if (!userInput || userInput.trim() === '') {
    console.error('Error: Please provide a valid file name.')
    return
  }

  const fileName = generateFileName(userInput)
  const filePath = path.join(migrationDir, fileName)
  const fileContent = generateFileContent()

  try {
    await fs.writeFile(filePath, fileContent)
    console.log(`File "${fileName}" created at "${filePath}"`)
  } catch (error) {
    console.error(`Error creating file: ${error.message}`)
  }
}

const userInput = process.argv[2]
createFile(userInput)
