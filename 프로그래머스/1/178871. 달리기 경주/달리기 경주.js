function solution(players, callings) {    
    const maps = players.reduce((map, player, index) => {
        map[player] = index;
        return map;
    }, {});
    
    callings.forEach((calling) => {
        const index = maps[calling];
        const prevCalling = players[index - 1];
    
        [players[index - 1], players[index]] = [calling, players[index - 1]];    
        maps[prevCalling]++;
        maps[calling]--;
    });
    
    return players;
}