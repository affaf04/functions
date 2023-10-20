// //(completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
}
  console.log(maxOfTwoNumbers(3, 9));
  
  // Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  const maxOfThreeNumbers = function (x, y, z) {
    if (x > y && x > z) {
      return x;
    } else if (y > x && y > z) {
      return y;
    } else {
      return z;
    }
  };
  
  console.log(maxOfThreeNumbers(3, 9, 6));
  
  // Define a function, as a function declaration, isCharAVowelthat takes a character
  //as an argument and returns true if it is a vowel, false otherwise.
  function isCharAVowel(x) {
    const vowels = ["a", "e", "i", "o", "u"];
  
    if (typeof x === "string") {
      for (let i = 0; i < vowels.length; i++) {
        if (x === vowels[i]) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  console.log(isCharAVowel("r"));
  
  // Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
  
   const sumArray= function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
     }
     return sum;
   }
  
   let arr = [2, 4, 5];
  
  console.log(sumArray(arr));
  
  // Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  // function multiplyArray(arr) {
  //   let multiply = 1; 
  //   for (let i = 0; i < arr.length; i++) {
  //     multiply *= arr[i];
  //   }
  //   return multiply;
  // }
  // let arr = [2, 4, 5];
  // console.log(multiplyArray(arr));
  
  // Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
  
  function reverseString(input) {
    let newString = '';
    for (let i = input.length - 1; i >= 0; i--) {
      newString += input[i];
    }
    return newString;
  }
  
  let input = 'rockstar';
  console.log( reverseString(input));
  




