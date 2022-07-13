import { exec } from "child_process";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.resolve(".env.local") });
import throwMissingVarError from "../lib/throwMissingVarError.js";

// prettier-ignore
const PORT = parseInt(process.env.NEXT_PORT) || (() => {throwMissingVarError("NEXT_PORT")})();
// prettier-ignore
const HOSTNAME = process.env.NEXT_HOSTNAME   || (() => {throwMissingVarError("NEXT_HOSTNAME")})();

const serverProcess = exec(
  path.resolve(`node_modules/next/dist/bin/next start -p ${PORT} -H ${HOSTNAME}`)
);

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