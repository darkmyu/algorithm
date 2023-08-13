function solution(X, Y) {
  const tableX = new Array(10).fill(0);
  const tableY = new Array(10).fill(0);
  X.split('').forEach(x => tableX[x]++);
  Y.split('').forEach(y => tableY[y]++);

  const result = [];

  tableX.forEach((x, i) => {
    if (!!x && !!tableY[i]) {
      // X에는 5가 3개, Y에는 5가 2개 나타나므로 남는 5 한 개는 짝 지을 수 없음 => 둘 중 작은 수
      result.push(String(i).repeat(Math.min(x, tableY[i])));
    }
  });

  if (result.length === 0) return '-1';
  if (Number(result.join('')) === 0) return '0';

  return result.reverse().join('');
}
