import cluster from 'node:cluster'
import requireEnvVar from '#root/lib/utils/requireEnvVar.js'
import app from '#src/app.js'
import initPrimary from '#src/server/initPrimary.js'
import initWorker from '#src/server/initWorker.js'

if (cluster.isPrimary) {
  initPrimary()
} else {
  initWorker(startExpressServer)
}

function startExpressServer() {
  const port = parseInt(requireEnvVar('API_PORT'))
  return app.listen(port, () => {
    console.log(`Worker ${process.pid} - Server started. Listening for requests on port ${port}...`)
  })
}
