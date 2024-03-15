// Q no. -: 1.. Calculating sum of all numbers in an integer array

function sumArray(numbers) { 
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) { 
    sum += numbers[i];
  }
  return sum;
} 
const numbers = [80, 15, 10, 35];
const total = sumArray(numbers);
console.log(total);


//Q no. -: 2.. Reversing input of a string using For loop in decrement

let string = "Rider";
let newString = "";

for (i = string.length-1; i >= 0; i--) { 
  newString += string[i];
}
console.log(newString);

//Q no. -: 3.. Converting Characters of string to all upperCase

let hobbie = "Ride faster then others";
let upperCaseHobbie = hobbie.toUpperCase();
console.log(upperCaseHobbie);
