//배열 A에 존재하는 모든 x를 발견하여 그 위치를 저장한 배열을 반환하는 함수 findAll(A,x)작성
function findAll(A,x) {
    let result=[];
    let start=0;
    while(true){
        let pos= A.indexOf(x,start);
        if(pos==-1)
        return result;
    result.push(pos);
    start=pos+1;
    }
}
console.log(findAll([24,6,6,8,5,3,6,8,431,6985,6,2],6));

//대소문자 구분없이 정렬
a=["ant","Bug","cat","Dog"];
console.log(a.sort((x,y)=>{
if(x.toLowerCase()<y.toLowerCase())
    return -1;
else if(x.toLowerCase()>y.toLowerCase())
    return 1;
return 0;
}));

// 배열의 처음 n개의 원소 리턴하는 함수 first(). n이 생략될 경우에는 첫번째 원소만 return/ last는 끝에서부터 가져옴
function first(A,n=1){
    return A.slice(0,n);
}
function last(A,n=1){
    if(n>A.length)
    n=A.length;
    return A.slice(A.length-n,A.length)
}
console.log(first([1,2,3,4,5,6]));
console.log(first([2,3,4,]));


//배열에서 없는 원소의 합을 구하는 함수
function sum1(A){
    let result=0;
    for(let x=0; x<=0; x++){
    if(!A.includes(x))
        result+=x;
    return result;
    }
}

function sum2(A){
    A.sort((x,y)=>x-y);
    let result=0;
    let index=0;
    for(let x=0; x<=9; x++){
        if(A[index]==x)
            index++;
        else
            result+=x;
    }
}
console.log(sum1([4,5,6]));
console.log(sum2([3,4,5,6]));

function sum3(A){
    return 45-A.reduce((a,v)=>a+v);
}

// 숫자를 입력받아 이를 뒤집은 숫자를 리턴
function reverse(n){
    return Number([...String(n)].reverse().join());
   // return Number([...String(n)].reverse().join()); split(') 사용
}
console.log(reverse(123456789));

// 문자열 입력받아 각 문자에 대해 발생 빈도수를 객체로 저장->리턴/발생 빈도수가 가장 많은 문자와 빈도수 출력
/*function frequency(str){
    let f={};
    for(let ch of str)
    f[ch]=(ch in f)?f[ch]+1:1;
    console.log(f);

    max_value=Math.max(...Object.values(f));
    for(let [key,value] of Object.entries(f));
    if(value==max_value)
    console.log(`가장 많이 나온 문자=${key} (빈도수 =${value})`)
}
console.log(frequency('strsfasvsdjfljsagw'));*/

//학생의 정보를 저장하는 객체
function Student(id,name,grade){
    this.id=id;
    this.name=name;
    this.grade=grade;
    this.toString=function() {return `(${this.id},${this.name},${this.grade})`}
    this.toJson=function(){return this.toString();}
}
const s1=new Student(21910998,'lcty',3.5);
const s2=new Student(23523998,'ty',3.7);
const s3=new Student(2194645998,'lty',3.8);
const A=[s1,s2,s3];

console.log(JSON.stringify(A));
A.sort((x,y)=>{
    if(x.name<y.name)
    return -1;
if(x.name>y.name)
    return -1;
if(x.name<y.name)
    return 1;
else
    return 0;

});


