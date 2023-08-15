function reverse(n){

    return +[...String(n)].reverse().join("");
}
console.log(reverse(2345678));