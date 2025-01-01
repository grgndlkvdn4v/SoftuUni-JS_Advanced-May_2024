//* asdas

class Point {
  constructor(x, y) {
    this.x = Number(x);
    this.y = Number(y);
  }

  // c^2 = a^2 + b^2
  // c = Math.sqrt(a^2 + b^2);
  static distance(pointA, pointB) {
    let a = Math.abs(pointA.x - pointB.x);
    let b = Math.abs(pointA.y - pointB.y);
    let c = Math.sqrt( a**2 + b**2 );
    return c
  }
}

const p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

log