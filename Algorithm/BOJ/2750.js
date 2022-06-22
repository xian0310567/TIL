const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim().split("\n").map((a) => +a);

let count = input.shift();
const ac = Array.from(new Set(input));
let temp = ac.sort((a, b) => a - b);

// console.log(input);

for(let i = 0; i < count; i++) {
  console.log(temp[i])
}