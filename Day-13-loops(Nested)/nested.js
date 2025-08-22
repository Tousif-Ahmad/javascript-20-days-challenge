// q1. Star pattern banayo.
// for (let i = 1; i<=5; i++){
//     let rows = ""
//     for (let j = 1; j<=i; j++){
//         rows += "*";
//     }
//     console.log(rows);
// }

// q2. Multiplication table 1 se 10 tak print karo.
// for (let i = 1; i<=10; i++){
//     console.log(`Multiplication Table of ${i}:`);
//     for (let j = 1; j<=10; j++){
//         const result = i * j;
//         console.log(`${i} * ${j} = ${result}`);
//     }
// }

// q3. Array ke andar array print karo.
// const nestedArr = [1,2,3,["ali", "ahmad", "khan",], ["hii", "how", "are", "you"], 4];
// for (let i = 0; i < nestedArr.length; i++){
//     // console.log(nestedArr[i]);
//     if (Array.isArray(nestedArr[i])){
//         console.log("printing Nesting array");
//     }

//     for (let j = 0; j < nestedArr[i].length; j++){
//         console.log(nestedArr[i][j]);
//     }
// }

// q4. Nested loop ka use karke matrix print karo.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// // outer loop
// for (let i = 0; i<matrix.length; i++){
//     // inner loop
//     for (let j = 0; j<matrix[i].length; j++){
//         console.log(matrix[i][j] + " ");
//     }
//     console.log("\n");
// }

// q5. 1-100 me prime numbers find karo.
// Function to check if a number is prime
function isPrime(num) {
  // Prime numbers are greater than 1
  if (num <= 1) {
    return false;
  }

  // Check for divisibility from 2 up to the square root of the number
  // We only need to check up to the square root because any factor
  // larger than the square root would have a corresponding smaller factor
  // that we would have already found.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      // If the number is divisible by i, it's not prime
      return false;
    }
  }

  // If the loop completes, the number is prime
  return true;
}

console.log("Prime numbers from 1 to 100 are:");

// Loop through numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
  // Use the isPrime function to check each number
  if (isPrime(i)) {
    console.log(i);
  }
}