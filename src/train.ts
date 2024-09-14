//task-J

function findWord(getWord: string) {
  const words = getWord.split(" ");
  let no = "";
  words.forEach((ele) => {
    if (ele.length > no.length) {
      no = ele;
    }
  });
  return no;
}
const word = "I wanna go to Burkina-Faso!";
console.log(findWord(word));

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
function getDigits(a: string): string {
  let numbers: string[] = [];
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(parseInt(a[i]))) {
      numbers.push(a[i]);
    }
  }
  return numbers.join("");
}

// H-TASK
function getPositive(a: number[]): string {
  const positives = a.filter((num) => num > 0);
  return positives.join("");
}


/*
Traditional FD => SSR => EJS
Modern FD      => SPA  = REACT 



*/





console.log(getPositive([1, -4, 2, 1]));
