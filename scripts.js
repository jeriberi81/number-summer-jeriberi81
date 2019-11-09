/*PREVIOUS PROGRAM
Write a program that sums the numbers from any given starting point and any given ending point.
A function can accept some named parameters*/

/*Update your code to use reduce(). So, it should still take in a 'starting number' and an 'ending number' and perform the same way, but should reduce instead of the other looping techniques. Be sure to add, commit and push.*/

function numberSummer(start = 1, end = 10, interval = 1) {
  const nums = [];

  for (let i = start; i <= end; i += interval) {
    nums.push(i);
  }

  console.log(nums);

  const sum = nums.reduce((sum, num) => sum + num);
  return sum;
  //console.log(sum);
}

// We invoke a function and pass in arguments
const total = numberSummer(1, 11, 1);
console.log(total);
