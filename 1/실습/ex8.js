a=["ant", "Bug","Cat","Dog"];
console.log(["ant", "Bug","Cat","Dog"].sort());
a.sort((x,y)=>(x.toLowerCase()<y.toLowerCase())?-1:
(x.toLowerCase()>y.toLowerCase()? 1: 0));
console.log(a);