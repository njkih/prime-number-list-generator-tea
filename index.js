// index.js

function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function generatePrimeNumbers(count) {
    const primeNumbers = [];
    let number = 2;
    while (primeNumbers.length < count) {
      if (isPrime(number)) {
        primeNumbers.push(number);
      }
      number++;
    }
    return primeNumbers;
  }
  
  const count = 10;
  const primeNumbers = generatePrimeNumbers(count);
  console.log(`First ${count} prime numbers:`, primeNumbers);
  