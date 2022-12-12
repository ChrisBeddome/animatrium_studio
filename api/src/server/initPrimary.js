import cluster from 'node:cluster'
import { cpus } from 'node:os'

export default function initPrimary() {
  console.log(`Primary ${process.pid} is running`)
  const workerCount = getWorkerCount()
  console.log(`Forking ${workerCount} worker(s)`)
  forkWorkers(workerCount)
  setTerminateProcedures()
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

function setTerminateProcedures() {
  setGracefulShutdown()
  setWorkerExitHandler()
  setUncaughtExceptionHandler()
}

function setGracefulShutdown() {
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
}

function setWorkerExitHandler() {
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} exited with code ${code}`)
    handleWorkerExit(code)
  })
}

function setUncaughtExceptionHandler() {
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

