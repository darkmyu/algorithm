function solution(array, commands) {
  const result = [];

  commands.forEach(command => {
    const list = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);
    result.push(list[command[2] - 1]);
  });

  return result;
}
