import app from './app'

const port = process.env.PORT || 8000

const server = app.listen(port, () => {
  console.log('Application started on PORT', port)
})

process.on('SIGINT', () => {
  server.close(() => { process.exit(0) })
})

process.on('SIGTERM', () => {
  server.close(() => { process.exit(0) })
})
