import cluster from 'node:cluster'
import { cpus } from 'node:os'
import noisyLogger from '../../lib/utils/noisyLogger.js'

function initPrimary(): void {
  noisyLogger(`Primary ${process.pid} is running`)
  const workerCount: number = getWorkerCount()
  noisyLogger(`Forking ${workerCount} worker(s)`)
  forkWorkers(workerCount)
  setTerminateProcedures()
}

function getWorkerCount(): number {
  const cpuCount: number = cpus().length
  const maxWorkerCount: number = Number(process.env.API_MAX_WORKER_COUNT || cpuCount)
  return Math.min(maxWorkerCount, cpuCount)
}

function forkWorkers(workerCount: number): void {
  for (let i = 0; i < workerCount; i++) {
    cluster.fork()
  }
}

function setTerminateProcedures(): void {
  setGracefulShutdown()
  setWorkerExitHandler()
  setUncaughtExceptionHandler()
}

function setGracefulShutdown(): void {
  let shutdownInitiated: boolean = false;
  const signals: Array<NodeJS.Signals> = ['SIGTERM', 'SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGHUP']
  signals.forEach((signal: NodeJS.Signals) => {
    process.once(signal, () => {
      if (!shutdownInitiated) {
        shutdownInitiated = true
        noisyLogger(`Primary received ${signal}. killing children`)
        killWorkers()
        noisyLogger(`Primary exiting...`)
        process.exitCode = 0
      }
    })
  })
}

function setWorkerExitHandler(): void {
  cluster.on('exit', (worker, code, signal) => {
    noisyLogger(`Worker ${worker.process.pid} exited with code ${code}`)
    handleWorkerExit(code)
  })
}

function setUncaughtExceptionHandler(): void {
  process.once('uncaughtException', (err: Error, origin: NodeJS.UncaughtExceptionOrigin) => {
    console.log(err)
    console.log(origin)
    console.log("killing children...")
    killWorkers()
    console.log(`Primary exiting...`)
    process.exitCode = 1
  })
}

function killWorkers(): void {
  for (let id in cluster.workers) {
    const process_id = cluster.workers[id]?.process?.pid
    if (process_id) {
      process.kill(process_id, 'SIGTERM')
    }
  }
}

function handleWorkerExit(code: number) {
  if (code !== 0) {
    noisyLogger("Forking another worker")
    cluster.fork()
  }
}

export default initPrimary
