import requireEnvVar from '#root/lib/utils/requireEnvVar.js'
import app from '#src/app.js'

export default function initWorker() {
  console.log(`Worker ${process.pid} started`)
  const port = parseInt(requireEnvVar('API_PORT'))
  const server = startExpressServer(app, port)
  setWorkerTerminateProcedures(server)
}

function startExpressServer(app, port) {
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
    process.once(async signal, () => {
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

  process.once('uncaughtException', (err, origin) => {
    console.log(`Worker ${process.pid} - uncaught exception:`)
    console.log(err)
    console.log(origin)
    console.log(`Worker ${process.pid} exiting...`)
    process.exit(1)
  })
}

function shutdownServer(server, timeout) {
  return new Promise((resolve, reject) => {
    server.close(() => {
      resolve()
    })
    setTimeout(() => {
      reject()
    }, timeout)
  })
}
