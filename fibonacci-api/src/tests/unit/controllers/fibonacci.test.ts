import {getFibonacci} from './../../../controllers/fibonacci'

test('Fibonacci output for number 7', ()=> {
    const fibonacciResult = getFibonacci(7)
    expect(fibonacciResult).toBe(13)
})


test('Fibonacci output for number 19', ()=> {
    const fibonacciResult = getFibonacci(19)
    expect(fibonacciResult).toBe(4181)
})


test('Fibonacci output for number 57', ()=> {
    const fibonacciResult = getFibonacci(57)
    expect(fibonacciResult).toBe(365435296162)
})

