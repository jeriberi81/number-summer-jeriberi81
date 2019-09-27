//Write a program that sums the numbers from any given starting point and any given ending point.
//A function can accept some named parameters
function numberSummer(start = 1, end = 10, interval = 2) {
  let sum = 0;

  for (let i = start; i <= end; i += 1) {
    sum += interval;
  }

  return sum;
}

// We invoke a function and pass in arguments
const total = numberSummer(2, 100, 2);
console.log(total);
