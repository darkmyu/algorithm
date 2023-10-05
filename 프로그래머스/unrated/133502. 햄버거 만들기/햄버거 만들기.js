function solution(ingredient) {
  let answer = 0;
  const stack = [];

  ingredient.forEach(ing => {
    stack.push(ing);

    if (stack.length >= 4) {
      if (stack.slice(-4).join('') === '1231') {
        stack.splice(stack.length - 4, stack.length);
        answer++;
      }
    }
  });

  return answer;
}
