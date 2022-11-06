import { startServer, setOutput, runInitializers } from "/initializers/initialize.js";

const serverProcess = startServer("prod");
setOutput(serverProcess);
runInitializers();
