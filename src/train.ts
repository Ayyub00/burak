//task zj

function reduceNestedArray(arr: any[]): number {
  return arr.reduce((sum, item) => {
    if (Array.isArray(item)) {
      // If the item is an array, recursively calculate its sum
      return sum + reduceNestedArray(item);
    } else if (typeof item === "number") {
      // If the item is a number, add it to the sum
      return sum + item;
    }
    return sum; // Ignore non-numeric values
  }, 0);
}

// Example usage:
console.log(reduceNestedArray([1, [1, 2, [4]]])); // Output: 8


// TASK ZI

// function delayHelloWorld(message: string): Promise<string> {
//   return new Promise((resolve) => {
//       setTimeout(() => {
//           resolve(message);
//       }, 3000); 
//   });
// }


// delayHelloWorld("Hello World!")
//   .then((result: string) => {
//       console.log(result); 
//   });

// TASK ZH

// function findDisappearedNumbers(arr: number[]): number[] {
//   // Massivning eng kichik va eng katta qiymatlarini aniqlash
//   const min: number = Math.min(...arr);
//   const max: number = Math.max(...arr);

  // Natija massivini yaratish
//   const missingNumbers: number[] = [];


//   for (let i = min; i <= max; i++) {
//       if (!arr.includes(i)) {
//           missingNumbers.push(i); 
//       }
//   }

//   return missingNumbers;
// }


// const result = findDisappearedNumbers([1, 3, 4, 7]);
// console.log(result); // [2, 5, 6]


//task zg

// function convertToSnakeCase(input: string): string {
//   return input
//       .toLowerCase()              // Convert all letters to lowercase
//       .replace(/\s+/g, '_');       // Replace spaces with underscores
// }

// // Example usage:
// console.log(convertToSnakeCase('name should be a string')); // Output: 'name_should_be_a_string'

//Task: ZC
/*
function convertCelsiusToFahrenheit(selisy: number): number {
  const result =(selisy * 9 / 5) + 32;

  return result;
}

console.log(convertCelsiusToFahrenheit(0));
console.log(convertCelsiusToFahrenheit(10)); */

//Task: ZD
/*
function changeNumberInArray(index: number, array: number[], newValue: number) {
  if (index >= 0 && index < array.length) {
    array[index] = newValue;
  }
  return array;
}

console.log(changeNumberInArray(1, [1, 3, 7, 2], 2)); */

//Task: ze
// Task
function removeDuplicate(one: string): string {
  const result: string[] = [];
  const arr: string[] = one.split("");
  arr.map((e, index) => {
    if (arr.indexOf(e) === index) {
      return result.push(e);
    }
    return e;
  });
  return result.join("");
}
console.log(removeDuplicate("stringg"));

// TASK ZB 
// function randomBetween(min: number, max: number): number {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
//   console.log(randomBetween(30, 50));


  


// TASK ZA 
// interface Person {
//   age: number;
// }
//   function sortByAge(arr: Person[]): Person[] {
//     return [...arr].sort((a: Person, b: Person) => a.age - b.age);
//   }
  
//   console.log(sortByAge([{age: 23}, {age: 21}, {age: 13}])); 
  
  
  
  // // TASK Z
  // function sumEvens(numbers: number[]): number {
  //   let sum: number = 0;
  //   for (let i: number = 0; i < numbers.length; i++) {
  //     if (numbers[i] % 2 === 0) {
  //       sum += numbers[i];
  //     }
  //   }
  //   return sum;
  // }
  
  // console.log(sumEvens([1, 2, 3]));

// Task Y

// function findIntersection<T>(arr1: T[], arr2: T[]): T[] {
  
//   const intersection = arr1.filter(value => arr2.includes(value));
//   return intersection;
// }


// const result = findIntersection<number>([1, 2, 3], [3, 2, 0]);
// console.log(result); // [2, 3]

// // TASK X
// function countOccurrences(object: object, string: string) {
//   const result: string[] = [];
//   const keys = Object.keys(object).concat(Object.values(object));
//   keys.map((ele) => {
//     if (typeof ele === "string") {
//       if (ele === string) {
//         return result.push(ele);
//       }
//       return ele;
//     }
//     return Object.keys(ele).map((ele) => {
//       if (ele === string) {
//         return result.push(ele);
//       }
//       return ele;
//     });
//   }); return result.length;
// }

// console.log(
//   countOccurrences(
//     { model: "Bugatti", steer: { model: "HANKOOK", size: 30 }},
//     "model"
//   )
// );



// W-Task

// function chunkArray(numbers: number[], num: number) {
//   const flex: number = parseInt(`${numbers.length / num}`);
//   const result: any = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers.length > flex) {
//       result.push(numbers.slice(0, flex));
//       numbers.splice(0, flex);
//     }
//   }
//   result.push(numbers.slice(0, numbers.length));

//   return result;
// }
// console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));


// v-Task
// interface T {
//   [text: string]: number;
// }
// function countChars(input: string) {
//   const result: T = {};
//   const text: string[] = input.split("");
//   text.map((ele, index) => {
//     if (text.indexOf(ele) === index) {
//       result[ele] = 1;
//       return result;
//     }
//     result[ele] = result[ele] + 1;
//   });
//   return result;
// }

// // U-Task
// function sumOdds(number: number): Promise<number> {
//   const numbers: number[] = [];
//   const rnumbers: number[] = [];
//   return new Promise((resolse) => {
//     let count: number = 0;
//     const set = setInterval(() => {
//       count++;
//       numbers.push(count);
//       if (count === number) {
//         clearInterval(set);
//         numbers.map((ele) => {
//           if (ele % 2 !== 0) {
//             return rnumbers.push(ele);
//           }
//           return ele;
//         });
//         resolse(rnumbers.length - 1);
//       }
//     });
//   });
// }
// sumOdds(11).then((result) => {
//   console.log(result);
// }); //return 4

//  T-Task
// function mergeSortedArrays(numbers1: number[], numbers2: number[]): number[] {
//   return numbers1.concat(numbers2).sort((a, b) => a - b);
// }
// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); 

// [0, 3, 4, 4, 6, 30, 31]


// // S-Task
// function missingNumber(numbers: number[]): number {
//   const notnum: number[] = [];
//   numbers
//     .sort((a, b) => a - b)
//     .map((num, index) => {
//       if (num !== index) {
//         notnum.push(index);
//       }
//       return num;
//     });
//   return notnum[0];
// }
// console.log(missingNumber([0, 3, 1])); // return 2

// R-Task
// function calculate(input: string): number {
//   const numberAdd: number[] = [];
//   const numbers = input.split(" ").map((num) => {
//     if (!parseInt(num)) {
//       return num;
//     }
//     return numberAdd.push(parseInt(num));
//   });
//   return numberAdd.reduce((total, num) => {
//     return total + num;
//   }, 0);
// }
// console.log(calculate("1 + 2 + 1"));

// Q-Task
// interface Object {
//   [key: string]: string;
// }
// function hasProperty(inputObject: Object, inputString: string): boolean {
//   const keys: string[] = Object.keys(inputObject);
//   if (!keys.includes(inputString)) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(hasProperty({ name: "BMW", model: "M3" }, "model"));

// // P-Task
// interface Obj {
//   [key: string]: any;
// }
// function objectToArray(object: Obj) {
//   const result: any[] = [];
//   const keys = Object.keys(object);
//   const values = Object.values(object);
//   keys.map((ele, index) => {
//     const arr: Obj = [];
//     arr.push(ele, values[index]);
//     result.push(arr);
//   });
//   return result;
// }
// console.log(objectToArray({ a: 10, b: 20, c: 90})); // return [['a', 10], ['b', 20]]
// O-Task
// function calculateSumOfNumbers(getAny: any[]): number {
//   const numbers: number[] = [];
//   getAny.map((ele) => {
//     if (typeof ele !== "number") {
//       return ele;
//     }
//     numbers.push(ele);
//   });
//   const result: number = numbers.reduce((total, curValue) => {
//     return total + curValue;
//   });
//   return result;
// }
// console.log(calculateSumOfNumbers([10, "10", { son: 10 }, true, 35]));


// // // N-Task

// function palindromCheck(string: string): boolean {
//   const array: string[] = string.split("");
//   const rever: string = array.reverse().join("");
//   if (string !== rever) {
//     return false;
//   }

//   return true;
// }
// console.log(palindromCheck("boy"));

// // L-Task
// function reverseSentence(getWords: string) {
//   const words = getWords.split(" ");
//   const revers = words.map((ele) => {
//     const word = ele.split("");
//     const result = word.reverse();
//     return result.join("");
//   });
//   return revers.join(" ");
// }
// console.log(reverseSentence("success"));

// // Tack K
// function unliFind(words: string): number {
//   const getWord: string[] = words.split("");
//   let count: number = 0;
//   for (let i = 0; i < getWord.length; i++) {
//     if (
//       getWord[i] === "i" ||
//       getWord[i] === "a" ||
//       getWord[i] === "u" ||
//       getWord[i] === "o" ||
//       getWord[i] === "e" ||
//       getWord[i] === "o'"
//     ) {
//       count++;
//     }
//     count;
//   }
//   return count;
// }
// console.log(unliFind("success"));

// //task-J

// function findWord(getWord: string) {
//   const words = getWord.split(" ");
//   let no = "";
//   words.forEach((ele) => {
//     if (ele.length > no.length) {
//       no = ele;
//     }
//   });
//   return no;
// }
// const word = "I wanna go to Burkina-Faso!";
// console.log(findWord(word));

// // TASK - I
// function findMostFrequentNumber(numberArr: number[]) {
//   const sortedNum: number[] = numberArr.sort((a, b) => a - b);
//   let mostFrequentNum: number = sortedNum[0];
//   let maxCount: number = 1;
//   let currentCount: number = 1;

//   for (let i = 1; i < sortedNum.length; i++) {
//     if (sortedNum[i] === sortedNum[i - 1]) {
//       currentCount++;
//     } else {
//       currentCount = 1;
//     }

//     if (currentCount > maxCount) {
//       maxCount = currentCount;
//       mostFrequentNum = sortedNum[i];
//     }
//   }

//   return mostFrequentNum;
// }

// const numbers: number[] = [1, 2, 1, 1, 4, 3, 6, 3, 4];
// console.log(findMostFrequentNumber(numbers));

// * Project Standards:
//    - Logging standards
//    - Naming standards
//        function, method, variable => CAMEL   goHome
//        class => PASCAL                       MemberService
//        folder => KEBAB           
//        css => SNAKE                          button_style
//    - Error handling

//  */



 // // H2-TASK
 // function getDigits(a: string): string {
 //   let nums: string[] = [];
 //   for (let i = 0; i < a.length; i++) {
 //     if (!isNaN(parseInt(a[i]))) {
 //       nums.push(a[i]);
 //     }
 //   }
 //   return nums.join("");
 // }

 // console.log(getDigits("m1312uihryu8qtryu123412312312jigaw8of"));

// H2-TASK
// function getDigits(a: string): string {
//   let numbers: string[] = [];
//   for (let i = 0; i < a.length; i++) {
//     if (!isNaN(parseInt(a[i]))) {
//       numbers.push(a[i]);
//     }
//   }
//   return numbers.join("");
// }

// // H-TASK
// function getPositive(a: number[]): string {
//   const positives = a.filter((num) => num > 0);
//   return positives.join("");
// }


/*
Traditional FD => SSR => EJS
Modern FD      => SPA  = REACT 


/* Requests:
    traditional API (form POST)
    Rest API	
    GraphQL API
 */


// // validation: 
// backend, 
// frontend,
//  databse,
//   type





// console.log(getPositive([1, -4, 2, 1]));
