const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n').map(a => +a);

let max = Math.max(...input);

for(let i = 0; i < input.length; i++) {
  if(max == input[i]) {
    console.log(input[i] + "\n" + Number(i + 1));
    break;
  }
}