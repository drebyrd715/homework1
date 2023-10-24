// 1. 
function maxOfTwoNumbers(a, b) {
    if (a >= b) {
      return a;
    } else {
      return b;
    }
  }
//   console.log(maxOfTwoNumbers(10, 6));
  
// 2. 
function maxOfthree(x, y, z) {
    if (x >= y && x >= z) {
      return x;
    } else if ( y >= x && y >= z) {
      return y;
    }  else {
        return z;
    }
      }
  
//   console.log(maxOfthree(3, 56, 6));

// 3. Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel (char) {
 
    if (char === 'a'||'e'||'i'||'o'||'u') {
        return "The character is a Vowel";
    }
    else {
    return "The character is not a vowel";
    }
}
 
// console.log (isCharAVowel ("r"));
     
  

// 4. Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. 
// For example, sumArray([2, 4, 5]);would return 11.

const data = [2, 25, 1, 12];
 function sumArray (input) {
    let results = 0; 
    for (const element of input) {
        // console.log(element)
        results += element
    }
    return results;
 } 
//  console.log(sumArray(data))


// 5. Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. 
//For example, multiplyArray([2, 4, 5]);would return 40.


// Recursion
const multiplyArray = (arr) => {
    if (arr.length === 0) {
      return 1;
    }
    return arr[0] * multiplyArray(arr.slice(1));
  }
  
//   console.log(multiplyArray([3,1,10,5])); 