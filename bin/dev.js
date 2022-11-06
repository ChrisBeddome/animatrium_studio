import { startServer, setOutput, runInitializers } from "/initializers/initialize.js";

const serverProcess = startServer("dev");
setOutput(serverProcess);
runInitializers();
