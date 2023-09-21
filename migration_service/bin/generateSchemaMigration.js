import fs from 'fs'
import path from 'path'
import url from 'url';
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// YYYYMMDDHHMMSSsssZ ie 20230921224331227Z
const getDateString = () => (new Date()).toISOString().replace(/[-T:.]/g, '')

const generateFileName = userSuppliedName => `${getDateString()}_${userSuppliedName}.js`

const createFile = userInput => {
	const filepath = path.join(__dirname, '../migrations/schema/', generateFileName(userInput))
	const content = `const up = () => {
	// return sql here
}

const down = () => {
	// return sql here
}
`

	fs.writeFile(filepath, content, err => {
		if (err) {
			console.error(`Error creating file: ${err}`)
		} else {
			console.log(`File "${filepath}" created`)
		}
	})
}

const userInput = process.argv[2]
createFile(userInput)





