// Explanation 0

//  s="1234" is a string type, so it can be reversed without throwing an exception. Thus, we print the reversed value, 4321, as our answer.

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

/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
       s=s.split("").reverse().join("");
    }
     catch(error){
         console.log(error.message)
     }
       finally{
           console.log(s)
       }
    
}


function main() {
    const s = eval(readLine());
    
    reverseString(s);
}
