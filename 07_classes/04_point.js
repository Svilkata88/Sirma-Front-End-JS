class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let sideA = Math.abs(p1.x - p2.x);
        let sideB = Math.abs(p1.y - p2.y);

        let sideC = Math.pow(sideA, 2) + Math.pow(sideB, 2);
    
        sideC = Math.sqrt(sideC);
        return sideC;
    }
}

let point1 = new Point(5, 5);
let point2 = new Point(9, 8);
console.log(Point.distance(point1, point2));
