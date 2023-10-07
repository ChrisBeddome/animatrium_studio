import http from 'http'
import express from 'express'
import cluster from 'node:cluster'
import app from '../app.js'
import initPrimary from './initPrimary.js'
import initWorker from './initWorker.js'
import requireEnvVar from '../../lib/utils/requireEnvVar.js'

if (cluster.isPrimary) {
  initPrimary()
} else {
  initWorker(startServer, makeShutdownServerFn)
}

function startServer(): Promise<http.Server> {
  const port: number = parseInt(requireEnvVar('API_PORT'))
  return new Promise<http.Server> ((resolve: Function, reject: Function) => {
    try {
      const server: http.Server = app.listen(port, () => {
        resolve(server)
      })
    } catch(e: unknown) {
      reject(Error)
    }
  })
}

function makeShutdownServerFn(server: http.Server): (timeout?: number) => Promise<void> {
  return function(timeout: number = 10000):Promise<void> {
    return new Promise<void>((resolve: Function, reject: Function) => {
      server.close(() => {
        resolve()
      })
      setTimeout(() => {
        reject()
      }, timeout)
    })
  }
}
