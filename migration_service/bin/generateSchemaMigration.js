import fs from 'fs'
import path from 'path'

// YYYYMMDDHHMMSSsssZ ie 20230921224331227Z
const getDateString = () => (new Date()).toISOString().replace(/[-T:.]/g, '')

const generateFileName = userSuppliedName => `${getDateString()}_${userSuppliedName}`

const createFile = userInput => {
	const filepath = path.join('../migrations/schema/', generateFileName(userSuppliedName))
	const content = `
		const up = () => {
			// return sql here
		}

		const down = () => {
			// return sql here
		}
	`

	fs.writeFile(filename, textToWrite, err => {
		if (err) {
			console.error(`Error creating file: ${err}`)
		} else {
			console.log(`File "${filename}" created`)
		}
	})
}

const userInput = process.argv[0]
createFile(userInput)





