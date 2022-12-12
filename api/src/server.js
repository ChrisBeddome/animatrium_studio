import cluster from 'node:cluster'
import { cpus } from 'node:os'
import requireEnvVar from '#root/lib/utils/requireEnvVar.js'
import app from '#src/app.js'

if (cluster.isPrimary) {
  initPrimary()
} else {
  initWorker()
}

function initPrimary() {
  console.log(`Primary ${process.pid} is running`)
  const workerCount = getWorkerCount()
  console.log(`Forking ${workerCount} worker(s)`)
  forkWorkers(workerCount)
  setPrimaryTerminateProcedures()
}

function getWorkerCount() {
  const cpuCount = cpus().length
  const maxWorkerCount = parseInt(process.env.API_MAX_WORKER_COUNT) || cpuCount
  return Math.min(maxWorkerCount, cpuCount)
}

function forkWorkers(workerCount) {
  for (let i = 0; i < workerCount; i++) {
    cluster.fork()
  }
}

function setPrimaryTerminateProcedures() {
  let shutdownInitiated = false;
  ['SIGTERM', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGHUP'].forEach(signal => {
    process.once(signal, () => {
      if (!shutdownInitiated) {
        shutdownInitiated = true;
        console.log(`Primary received ${signal}. killing children`)
        killWorkers()
        console.log(`Primary exiting...`)
        process.exitCode = 0
      }
    })
  })
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited with code ${code}`)
    handleWorkerExit(code)
  })
  process.once('uncaughtException', (err, origin) => {
    console.log(err)
    console.log(origin)
    console.log("killing children...")
    killWorkers()
    console.log(`Primary exiting...`)
    process.exitCode = 1
  })
}

function killWorkers() {
  for (let id in cluster.workers) {
    const process_id = cluster.workers[id].process.pid
    process.kill(process_id, 'SIGTERM')
  }
}

function handleWorkerExit(code) {
  if (code !== 0) {
    console.log("Forking another worker")
    cluster.fork()
  }
}

function initWorker() {
  console.log(`Worker ${process.pid} started`)
  const port = parseInt(requireEnvVar('API_PORT'))
  const server = startExpressServer(port)
  setWorkerTerminateProcedures(server)
}

function startExpressServer(port) {
  return app.listen(port, () => {
    console.log(`Worker ${process.pid} - Server started. Listening for requests on port ${port}...`)
  })
}

function setWorkerTerminateProcedures(server) {
  ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGHUP'].forEach(signal => {
    process.on(signal, () => {})
  })

  let shutdownInitiated = false;
  ['SIGTERM', 'SIGPIPE'].forEach(signal => {
    process.once(signal, () => {
      if (!shutdownInitiated) {
        shutdownInitiated = true
        console.log(`Worker ${process.pid} received ${signal}. killing server`)
        shutdownServer(server)
      }
    })
  })

  process.once('uncaughtException', (err, origin) => {
    console.log(`Worker ${process.pid} - uncaught exception:`)
    console.log(err)
    console.log(origin)
    console.log(`Worker ${process.pid} exiting...`)
    process.exit(1)
  })
}

function shutdownServer(server) {
  server.close(() => {
    console.log(`Server closed. Worker ${process.pid} exiting...`)
    process.exit(0)
  })
  setTimeout(() => {
    console.error(`Could not close connections in time, forcefully shutting down worker ${process.pid}`)
    process.exit(1)
  }, 10000)
}
