function solution(n)
{
    return String(n).split('')
            .map(n => Number(n))
            .reduce((pre, current) => pre + current, 0);
}