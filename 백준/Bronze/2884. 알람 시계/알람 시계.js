const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split(' ').map(Number);

const minute = input[0] * 60 + input[1] - 45;

if (minute < 0) {
  console.log(`23 ${60 + minute}`);
} else {
  console.log(`${Math.floor(minute / 60)} ${minute % 60}`);
}
