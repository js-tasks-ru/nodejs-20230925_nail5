function sum(a, b) {
  const isANumber = typeof a === 'number';
  const isBNumber = typeof b === 'number';

  if (!isANumber) {
    throw new TypeError(`TypeError: ${a} is not a Number`);
  }

  if (!isBNumber) {
    throw new TypeError(`TypeError: ${b} is not a Number`);
  }

  return a + b;
}

module.exports = sum;
