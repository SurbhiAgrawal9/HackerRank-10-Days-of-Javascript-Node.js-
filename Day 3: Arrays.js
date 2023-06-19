// Explanation 0
//Second Largest Value

// Given the array , we see that the largest value in the array is  and the  second largest value is . Thus, we return  as our answer.


'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/


function getSecondLargest(nums) {
    // Complete the function
    nums.sort((a,b) =>{
        return a-b;
    } )
       for(let i=nums.length-1; ; i--){
           if(nums[i] != nums[i-1] ) return nums[i-1];
       }
}


function main() {
    const n = +(readLine());
    const nums = readLine().split(' ').map(Number);
    
    console.log(getSecondLargest(nums));
}
