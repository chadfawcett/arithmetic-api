import express from 'express'
import addRouter from './router/add'

const app = express()

app.use('/add', addRouter)

export default app
