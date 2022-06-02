import express from 'express'
import * as fibonacciController from '../controllers/fibonacci'

const router = express.Router()

router.get('/:number', (req, res) => {
	console.log(`Receiving number parameter = ${req.params.number}`)
	const number = +req.params.number
	if (!Number.isInteger(number) || number < 0) {
		res.status(400).send({
			error: 'Bad Request',
			reason: 'The parameter number must be >= 0',
		})
		return
	}
    let fibonacciResult = fibonacciController.getFibonacci(number);
    if (!Number.isFinite(fibonacciResult)) {
        fibonacciResult = Number.MAX_VALUE;
    }
	const response = {
		result: fibonacciResult,
	}
	res.status(200).send(response)
})

export default router
