function solution(nums) {
    const max = nums.length / 2; // N/2 마리
    const maps = [...new Set(nums)];
    
    // 중복값을 제거한 폰켓몬 수 = 가져갈 수 있는 폰켓몬 수
    // 홍 박사가 가져갈 수 있는 폰켓몬 수를 N/2 마리로 정해놓음
    
    return maps.length >= max ? max : maps.length;
}