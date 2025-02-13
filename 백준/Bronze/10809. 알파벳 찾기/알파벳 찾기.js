const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim();

let result = Array(26).fill(-1);

for (let i = 0; i < input.length; i++) {
  const index = input.charCodeAt(i) - 97;

  if (result[index] === -1) {
    result[index] = i;
  }
}

console.log(result.join(' '));
