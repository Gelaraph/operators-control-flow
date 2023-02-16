const num = 50;

const nearestPowerOfTwo = (num) => {
  // dealing only with non-negative numbers
  if (num < 0) {
    num *= -1;
  }
  let base = 1;
  while (base < num) {
    if (num - base < Math.floor(base / 2)) {
      return base;
    }
    base *= 2;
  }
  return base;
};

console.log(nearestPowerOfTwo(num));

const result = `The number ${nearestPowerOfTwo(
  num
)} is the power of 2 nearest to ${num}.`;

console.log(result);

function theTest(department) {
  if (science) {
  }
}
