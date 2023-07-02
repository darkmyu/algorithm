function solution(park, routes) {
    const maxY = park.length - 1;
    const maxX = park[0].length - 1;
    
    let y = park.findIndex((v) => v.includes('S'));
    let x = park[y].indexOf('S');
    
    routes.forEach((v, i) => {
        let positionX = x;
        let positionY = y;
        const [direction, distance] = v.split(' ');
    
        for (let i = 0; i < distance; i++) {
            if (direction === 'W') positionX--;
            if (direction === 'E') positionX++;
            if (direction === 'S') positionY++;
            if (direction === 'N') positionY--;
            
            if (positionX > maxX || positionX < 0 || positionY > maxY || positionY < 0 || park[positionY][positionX] === 'X') {
                return;
            }
        }
        
        x = positionX;
        y = positionY;
    })
    
    return [y, x];
}