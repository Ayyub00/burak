"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("EXUCUTED");
var moment_1 = require("moment");
var currentTime = (0, moment_1.default)().format("YYYY MM DD");
console.log(currentTime);
var person = "MARTIN";
var count = 100;


Task-G method 2
function getHighestIndex(arr) {
    let maxValue = arr[0];
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }

    return maxIndex;
}

let index = getHighestIndex([5, 21, 12, 21, 8]);
console.log('method_1:', index);