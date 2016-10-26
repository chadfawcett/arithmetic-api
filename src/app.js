import express from 'express'
import addRouter from './router/add'
import subtractRouter from './router/subtract'

const app = express()

app.use('/add', addRouter)
app.use('/subtract', subtractRouter)

export default app
