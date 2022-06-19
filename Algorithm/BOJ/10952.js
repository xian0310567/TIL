const input = require('fs').readFileSync('dev/stdin').toString().split('\n');

let temp = [];
for(let i = 0; i < input.length; i++) {
  temp = input[i].split(' ').map(element => +element);
  if(temp[0] == 0 && temp[1] == 0) {
    break;
  }
  
  console.log(temp[0] + temp[1]);
}