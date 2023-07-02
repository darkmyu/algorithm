function solution(wallpaper) {
    const x = [];
    const y = [];
    
    wallpaper.forEach((v, i) => {
        v.split('').forEach((v2, i2) => {
            if (v2 === '#') {
                x.push(i);
                y.push(i2);
            }
        })
    });
    
    x.sort((a, b) => a - b);
    y.sort((a, b) => a - b);
    
    const lux = x[0];
    const luy = y[0];
    const rdx = x[x.length - 1] + 1;
    const rdy = y[y.length - 1] + 1;
    
    return [lux, luy, rdx, rdy];
}