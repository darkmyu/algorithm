const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map(Number);

const result = (input[0] * input[1] * input[2]).toString();
const array = Array(10).fill(0);

for (const value of result) {
  array[value]++;
}

array.forEach((value) => console.log(value));
