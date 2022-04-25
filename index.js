// decide on a target number
// if two numbers in the array are added and equal the target number, return true
// otherwise continue adding the number

function hasTargetSum(array, target) {
//   // Write your algorithm here
// for (let i = 0; i < array.length; i++) {
//   for (let j = i++; i < array.length; j++) {
//     if (array[j] === target - array[i]) return true
//   };
// };

// return false
}


  // let numbers = []

  // let previousNumbers = []

  // for(let x in array){
  //   for(let y in array){
  //     if (array[x] + array[y] === target){
  //       if(!!numbers.length){
  //         if(!previousNumbers.includes(array[x])
  //         && !previousNumbers.includes(array[y])) {
  //           previousNumbers.push(array[x])
  //           numbers.push([array[x],array[y]])
  //         }else {
  //           numbers.push([array[x], array[y]])
  //           previousNumbers.push(array[x])
  //         }
  //       }
  //     }
  //   }

  //   if(array[x] + array[y] === target){
  //     return true
  //   }else{
  //     return false
  //   }
// }

// array = [3, 8, 12, 4, 11, 7];
// target = 10
// hasTargetSum(array, target);






  // let result = []
  // let numIndex = new Map();

  // for(var i=0; i < array.length; i++){
  //   let num = arr[i];
  //   let compliment = target - num;

  //   if(numIndex.has(compliment)){
  //     result[0] = numIndex.get(compliment);
  //     result[1] = i;
  //     console.log(result[0], result[1])
  //     return result; 
  //   }
  //   numIndex.set(num, i)
  // }

  // return result;

  // if(result === target){
  //   return true
  // } else()
  
  // let number1 = array[0]
  // let number2 = array.length
  // function addingTwoNumbers() {
  //   number1 + number2
  // }

  // if(addingTwoNumbers() === target) {
  //   return true
  // } else{
  //   addingTwonNumbers()
  // }
//}


// const target1 = 10

// hasTargetSum(arrayTest1, target1)

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  array of numbers
  target number
  itterate through array adding 2 numbers
  if those 2 numbers equal target number, return true
  if else continue itterating
*/

/*
  Add written explanation of your solution here

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
