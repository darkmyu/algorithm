const input = require('fs').readFileSync(process.platform === "linux" ? "/dev/stdin" : "./input.txt").toString().trim().split('\n').map((el) => el.split(' ').map(Number));

for (let i = 1; i <= input[0][0]; i++) {
  const [H, W, N] = input[i];

  const floor = N % H || H; // 층수 (10층 10번째 손님일 경우 H = 10 예외 처리)
  const room = Math.ceil(N / H); // 방

  console.log(floor * 100 + room);
}
