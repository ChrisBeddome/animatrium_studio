import cluster from 'node:cluster'
import requireEnvVar from '#root/lib/utils/requireEnvVar.js'
import app from '#src/app.js'
import initPrimary from '#src/server/initPrimary.js'
import initWorker from '#src/server/initWorker.js'

if (cluster.isPrimary) {
  initPrimary()
} else {
  initWorker(startServer, makeShutdownServerFn)
}

function startServer(): Promise<node.Server> {
  const port = parseInt(requireEnvVar('API_PORT'))
  return new Promise<node.Server> ((resolve, reject) => {
    try {
      const server: node.Server = app.listen(port, () => {
        resolve(server)
      })
    } catch {
      reject()
    }
  })
}

function makeShutdownServerFn(server: node.http.server): Function {
  return function(timeout: number = 10000):Promise<void> {
    return new Promise<void>((resolve, reject) => {
      server.close(() => {
        resolve()
      })
      setTimeout(() => {
        reject()
      }, timeout)
    })
  }
}
