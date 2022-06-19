const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map((a) => +a);

const temp = Array.from(new Set(input));

const A = input[0];
const B = input[1];
const C = input[2];

// ---

if(temp.length == 1) {
  console.log(10000 + A * 1000);
}
else if (temp.length == 2) {
  if(A == C || A == B) {
    console.log(1000 + A * 100);
  }
  else {
    console.log(1000 + B * 100);
  }
}
else if(3) {
  console.log(Math.max(...input) * 100);
}