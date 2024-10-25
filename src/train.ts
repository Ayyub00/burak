// TASK X 
function countOccurrences(object: object, string: string) {
  let stringcount = 0
  for ()
}
  
  
    console.log(countOccurrences({model: 'Bugatti', steer: {model: 'HANKOOK', size: 30}}, 'model'));


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
