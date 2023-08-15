// 2차원 공간의 한 점(x,y)을 나타내는 클래스 point 정의
class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toString(){return (`${this.x}, ${this.y}`)}
}
class Point3D extends Point{
    constructor(x,y,z){
    super(x,y);
    this.z=z;
    }
    toString(){return (`${this.x}, ${this.y},${this.z}`)}
    toJSON(){ return this.toString()}
}
p1=new Point(2,3);
console.log(String(p1));
p2=new Point3D(2,3,4);
p3=new Point3D(1,3,2);
p4=new Point3D(3,4,5);
let A=[p2,p3,p4];

console.log(JSON.stringify(A));