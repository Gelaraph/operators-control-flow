// Question 3

let classGroup = "Arts"; // Set Bolatito's class group here

if (classGroup === "Science") {
  console.log(
    "Your science subjects are: Physics, Chemistry, Biology, Technical Drawing"
  );
} else if (classGroup === "Social Science") {
  console.log(
    "Your social science subjects are: Accounting, Commerce, Marketing, Geography"
  );
} else if (classGroup === "Arts") {
  console.log(
    "Your arts subjects are: Government, Economics, Literature, History"
  );
} else {
  console.log(
    "Invalid class group. Your general subjects are: English, Mathematics"
  );
}

// Question 5

const numb = 50;

const nearestPowerOfTwo = (numb) => {
  // dealing only with non-negative numbers
  if (numb < 0) {
    numb *= -1;
  }
  let base = 1;
  while (base < numb) {
    if (numb - base < Math.floor(base / 2)) {
      return base;
    }
    base *= 2;
  }
  return base;
};

console.log(nearestPowerOfTwo(numb));

const result = `The number ${nearestPowerOfTwo(
  numb
)} is the power of 2 nearest to ${numb}.`;

console.log(result);

// OR

let num = 3; // Set num to the desired value
let pwr = Math.pow(2, Math.round(Math.log2(num))); // Compute the power of 2 nearest to num

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
