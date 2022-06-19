const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map((x) => +x);

const h = input[0];
const m = input[1];

if(m >= 45) {
  console.log(h, m - 45);
}
if(m < 45) {
  if(h > 0) {
    console.log(h - 1, 60 - (45 - m));
  }
  else {
    console.log(23, 60 - (45 - m))
  }
}