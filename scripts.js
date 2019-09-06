// Write a program that sums the numbers from 1 to 10.

let counter = 1;    // variable that allows us to keep track of how many times we loop
let sum = 0;     //variable to hold the running total

// `<=` is  COMPARISON OPERATOR
// loop to continue until we reach a number higher than 10
while (counter <= 10) {
  sum += counter; // sum = sum + counter;

  // `+=` is an ASSIGNMENT OPERATOR
  /**increment the loop so it will eventually
  get to be greater than 10 and can stop**/
  counter += 1; // counter = counter + 1;
}
//display the running total to console
console.log(sum);
