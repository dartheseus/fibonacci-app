import express from 'express'

import fibonacciRouter from './routes/fibonacci'

const app = express()

app.use(express.json())

const SERVER_PORT = 3010

/**
 * Enabling CORS
 */
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'GET')
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
	next()
})

/**
 * Main Fibonacci Router
 */
app.use('/api/fibonacci', fibonacciRouter)

app.listen(SERVER_PORT, () => {
	console.log(`Server listening at port ${SERVER_PORT}`)
})

export {app}