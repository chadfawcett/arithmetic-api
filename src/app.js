import express from 'express'
import addRouter from './router/add'
import homeRouter from './router/home'

const app = express()

app.use('/', homeRouter)
app.use('/add', addRouter)

export default app
