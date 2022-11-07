import { exec } from "child_process"
import path from "path"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"

const PORT = parseInt(process.env.CLIENT_PORT) || (() => { throwMissingVarError("CLIENT_PORT") })()

function startServer(env) {
	const cmd = env === "dev" ? "dev" : "start"

	const serverProcess = exec(
		path.resolve(`node_modules/next/dist/bin/next ${cmd} -p ${PORT}`)
	)

	return serverProcess
}

export { startServer }
