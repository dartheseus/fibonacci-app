import React, { useState } from 'react'
import './Fibonacci.css'

const Fibonacci = () => {
	const [enteredNumber, setEnteredNumber] = useState(0)
	const [fibonacciResult, setFibonacciResult] = useState(-1)

	const getEnteredNumber = (event: React.FocusEvent<HTMLInputElement>) => {
		setEnteredNumber(+event.target.value)
	}

	const calculateFibonacci = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		fetch('http://localhost:3010/api/fibonacci/' + enteredNumber, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
			.then(data => {
				setFibonacciResult(data.result)
			})
			.catch(error => {
				console.error(
					`There was an error retrieving fibonacci number for ${enteredNumber}: ${error} `
				)
			})
	}
	return (
		<div className='fibonacci__container'>
			<form id="fibonacci_form" onSubmit={calculateFibonacci}>
				<h2 className='fibonacci__title'>Calculate Fibonacci!</h2>
				<div className='fibonacci__fields'>
					<input type='number' id='number' onBlur={getEnteredNumber} min='0' />
					<button type='submit'>Calculate</button>
				</div>
			</form>
			<div className='fibonacci__result'>
				{fibonacciResult !== -1 && (
					<p>
						Fibonacci result:
						<p className='fibonacci__result_value'>{fibonacciResult}</p>
					</p>
				)}
			</div>
		</div>
	)
}

export default Fibonacci
