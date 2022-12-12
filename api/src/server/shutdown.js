function shutdownServer(server, timeout=10000) {
  return new Promise((resolve, reject) => {
    server.close(() => {
      resolve()
    })
    setTimeout(() => {
      reject()
    }, timeout)
  })
}

export default shutdownServer
