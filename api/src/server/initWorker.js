import shutdownServer from '#src/server/shutdown.js'

function initWorker(serverFn) {
  console.log(`Worker ${process.pid} started`)
  const server = serverFn()
  setWorkerTerminateProcedures(server)
}

function setWorkerTerminateProcedures(server) {
  ignoreSignals()
  setTerminateHandler(server)
  setUncaughtExceptionHandler()
}

function ignoreSignals() {
  const signalsHandledByPrimaryProcess = ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGHUP'] 
  signalsHandledByPrimaryProcess.forEach(signal => {
    process.on(signal, () => {})
  })
}

function setTerminateHandler(server) {
  let shutdownInitiated = false;
  ['SIGTERM', 'SIGPIPE'].forEach(signal => {
    process.once(signal, async () => {
      if (!shutdownInitiated) {
        shutdownInitiated = true
        console.log(`Worker ${process.pid} received ${signal}. killing server`)
        try {
          await shutdownServer(server)
          console.log(`Server closed. Worker ${process.pid} exiting...`)
          process.exit(0)
        } catch {
          console.log(`Could not close connections in time, forcefully shutting down worker ${process.pid}`)
          process.exit(1)
        }

      }
    })
  })
}

function setUncaughtExceptionHandler() {
  process.once('uncaughtException', (err, origin) => {
    console.log(`Worker ${process.pid} - uncaught exception:`)
    console.log(err)
    console.log(origin)
    console.log(`Worker ${process.pid} exiting...`)
    process.exit(1)
  })
}
export default initWorker
