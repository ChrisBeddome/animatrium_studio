export default function setServerOutput(serverProcess) {
	serverProcess.stdout.on("data", (data) => {
		process.stdout.write(data);
	});

	serverProcess.stderr.on("data", (data) => {
		process.stdout.write(data);
	});

	serverProcess.on("close", (code) => {
		process.stdout.write(`process close all stdio with code ${code}`);
	});

	serverProcess.on("exit", (code) => {
		process.stdout.write(`process exited with code ${code}`);
	});
}
