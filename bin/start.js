import { startServer, setOutput, runInitializers } from "/bin/initialize.js";

const serverProcess = startServer("prod");
setOutput(serverProcess);
runInitializers();
