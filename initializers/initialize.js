import { exec } from "child_process";
import path from "path";
import fs from "fs"
import throwMissingVarError from "/src/utils/throwMissingVarError.js";

const PORT = parseInt(process.env.NEXT_PORT) || (() => { throwMissingVarError("NEXT_PORT") })();
const HOSTNAME = process.env.NEXT_HOSTNAME   || (() => { throwMissingVarError("NEXT_HOSTNAME") })();

function startServer(env) {
	const cmd = env === "dev" ? "dev" : "start";

	const serverProcess = exec(
		path.resolve(`node_modules/next/dist/bin/next ${cmd} -p ${PORT} -H ${HOSTNAME}`)
	);

	return serverProcess;
}

function setOutput(serverProcess) {
	serverProcess.stdout.on("data", (data) => {
		process.stdout.write(data);
	});

	serverProcess.stderr.on("data", (data) => {
		process.stdout.write(data);
	});

	serverProcess.on("close", (code) => {
		process.stdout.write(`child process close all stdio with code ${code}`);
	});

	serverProcess.on("exit", (code) => {
		process.stdout.write(`child process exited with code ${code}`);
	});
}

function runInitializers() {
	const initializerFilenames = fs.readdirSync(path.resolve('lib/initializers'));
	initializerFilenames.forEach(filename => {
		if (hasJsExtension(filename)) {
			runInitializer(filename);
		}
	});
}

function hasJsExtension(filename) {
	return path.extname(filename) === ".js"
}

function runInitializer(filename) {
	import(`./initializers/${filename}`).then(initializer => {
		initializer.run && initializer.run();
	})
} 

export { startServer, setOutput, runInitializers };
