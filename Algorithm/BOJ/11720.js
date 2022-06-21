const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = input.shift();
let temp = input[0].split('').map(a => +a);

let result = temp.reduce((a, b) => a + b);

console.log(result);