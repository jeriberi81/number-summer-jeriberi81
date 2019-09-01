// Write a program that sums the numbers from 1 to 10.

let counter = 1;
let sum = 0;

// `<=` is  COMPARISON OPERATOR
while (counter <= 10) {
  sum += counter; // sum = sum + counter;

  // `+=` is an ASSIGNMENT OPERATOR
  counter += 1; // counter = counter + 1;
}

console.log(sum);
