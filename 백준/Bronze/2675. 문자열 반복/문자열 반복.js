const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map((el) => el.split(' '));

const count = +input[0][0];
const array = input.slice(1);

for (let i = 0; i < count; i++) {
  const repeat = +array[i][0];
  const words = array[i][1].split('');
  const result = words.flatMap((word) => Array(repeat).fill(word)).join('');

  console.log(result);
}
