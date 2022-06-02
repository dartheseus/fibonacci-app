export const getFibonacci = (number: number, cache: number[] = []):number => {
    if (number <= 1) return number;
    if (cache[number]) return cache[number]
    cache[number] = getFibonacci(number-1, cache) + getFibonacci(number-2, cache)
    return cache[number]
}
