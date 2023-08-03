import http from 'http'
import net from 'net'

async function initWorker(start: () => Promise<http.Server>,
                          makeStop: (server: http.Server) => (timeout?: number) => Promise<void>) {
  console.log(`Worker ${process.pid} started`)
  let server: http.Server
  try {
    server = await start()
    console.log(`Worker ${process.pid} - Server started. Listening for requests on port ${(server.address() as net.AddressInfo).port}...`)
  } catch (e: unknown) {
    console.log(`Error occured when initializing server: ${e}`)
    process.exit(1)
  }
  const shutdownFn: (timeout?: number) => Promise<void> = makeStop(server)
  setWorkerTerminateProcedures(shutdownFn)
}

function setWorkerTerminateProcedures(shutdownFn: (timeout?: number) => Promise<void>) {
  ignoreSignals()
  setTerminateHandler(shutdownFn)
  setUncaughtExceptionHandler()
}

function ignoreSignals() {
  const signalsHandledByPrimaryProcess: Array<string> = ['SIGINT', 'SIGUSR1', 'SIGUSR2', 'SIGHUP'] 
  signalsHandledByPrimaryProcess.forEach(signal => {
    process.on(signal, () => {})
  })
}

function setTerminateHandler(shutdownFn: (timeout?: number) => Promise<void>) {
  let shutdownInitiated: boolean = false;
  ['SIGTERM', 'SIGPIPE'].forEach(signal => {
    process.once(signal, async () => {
      if (!shutdownInitiated) {
        shutdownInitiated = true
        console.log(`Worker ${process.pid} received ${signal}. killing server`)
        try {
          await shutdownFn()
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
