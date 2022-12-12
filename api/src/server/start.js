import cluster from 'node:cluster'
import initPrimary from '#src/server/initPrimary.js'
import initWorker from '#src/server/initWorker.js'

if (cluster.isPrimary) {
  initPrimary()
} else {
  initWorker()
}


