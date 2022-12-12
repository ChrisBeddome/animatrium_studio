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

function startServer() {
  const port = parseInt(requireEnvVar('API_PORT'))
  return new Promise ((resolve, reject) => {
    try {
      const server = app.listen(port, () => {
        resolve(server)
      })
    } catch {
      reject()
    }
  })
}

function makeShutdownServerFn(server) {
  return function(timeout=10000) {
    return new Promise((resolve, reject) => {
      server.close(() => {
        resolve()
      })
      setTimeout(() => {
        reject()
      }, timeout)
    })
  }
}
