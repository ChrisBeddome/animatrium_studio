import cluster from 'node:cluster'
import { cpus } from 'node:os'
import express from "express"
import throwMissingVarError from "../lib/utils/throwMissingVarError.js"
import entryPoint from "./routes/entryPoint.js"

const port = parseInt(process.env.API_PORT) || (() => { throwMissingVarError("API_PORT") })()
if (cluster.isMaster) {
  forkWorkers(getWorkerCount())
} else {
  startExpress(port)
}

function getWorkerCount() {
  const cpuCount = cpus().length
  const maxWorkerCount = parseInt(process.env.API_MAX_WORKER_COUNT) || cpuCount
  return Math.min(maxWorkerCount, cpuCount)
}

function forkWorkers(workerCount) {
  console.log(`Master ${process.pid} is running`)
  console.log(`Forking ${workerCount} worker(s)`)

  for (let i = 0; i < workerCount; i++) {
    cluster.fork()
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died`)
    console.log("Forking another worker")
    cluster.fork()
  })
}

function startExpress(port) {
  console.log(`Worker ${process.pid} started`)
  const app = express()

  app.use("/", entryPoint)

  app.listen(port, () => {
    console.log(`Worker ${process.pid} - Server started. Listening for requests on port ${port}...`)
  })
}

process.on('uncaughtException', (err, origin) => {
  console.log("uncaught exception:")
  console.log(err)
  console.log(origin)
  console.log("exiting...")
  process.exit(1)
});
