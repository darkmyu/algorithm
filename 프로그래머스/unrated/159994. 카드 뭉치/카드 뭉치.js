function solution(cards1, cards2, goal) {
    let left = 0;
    let right = 0;
    
    for (const g of goal) {
        if (left < cards1.length && cards1[left] === g) {
            left++;
        } else if (right < cards2.length && cards2[right] === g) {
            right++;
        } else {
            return 'No';
        }
    }
    return 'Yes'
}