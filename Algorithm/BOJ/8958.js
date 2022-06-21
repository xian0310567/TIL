const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');
const T = input.shift();

let temp = [];
let answer = 0;
let count = 0;


for(let i = 0; i < T; i++) {
  temp = input[i].split('');
  for(let j = 0; j < temp.length; j++) {
    if(temp[j] == 'O') {
      count += 1;
      answer += count;
    }
    else if(temp[j] == 'X') {
      count = 0;
    }
  }
  console.log(answer);
  answer = 0;
  count = 0;
}