const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n').trim().map(a => +a);

let temp = input.map(el => el%42);
const set = new Set(temp);

let answer = [...set];
console.log(answer.length);