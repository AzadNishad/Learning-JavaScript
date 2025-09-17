export default function fibonacci(n) {
    const fib = [0, 1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib.slice(0, n);
}

// other way to do it
export function fibonacci2(n) { 
    let n1 = 0, n2 = 1, nxtN;
    let i = 1;
    let fibSeries = [];
    if(n < 1) return;
    console.log('Fibonacci Series:');

    do{
        fibSeries.push(n1);
        nxtN = n1 + n2;
        n1 = n2;
        n2 = nxtN;
        i++;
    } while(i < n);
    return fibSeries;
}

// Example usage:
// console.log(fibonacci(10));
// console.log(fibonacci2(10));