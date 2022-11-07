import { exec } from "child_process"
import path from "path"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"

const PORT = parseInt(process.env.CLIENT_PORT) || (() => { throwMissingVarError("CLIENT_PORT") })()
const HOSTNAME = process.env.CLIENT_HOSTNAME   || (() => { throwMissingVarError("CLIENT_HOSTNAME") })()

function startServer(env) {
	const cmd = env === "dev" ? "dev" : "start"

	const serverProcess = exec(
		path.resolve(`node_modules/next/dist/bin/next ${cmd} -p ${PORT} -H ${HOSTNAME}`)
	)

	return serverProcess
}

export { startServer }
