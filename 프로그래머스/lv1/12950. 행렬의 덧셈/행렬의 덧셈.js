function solution(arr1, arr2) {
    let answer = [];

    for (let a = 0; a < arr1.length; a++) {
        answer[a] = [];
        for (let b = 0; b < arr1[0].length; b++) {
            answer[a][b] = arr1[a][b] + arr2[a][b];
        }
    }

    return answer;
}