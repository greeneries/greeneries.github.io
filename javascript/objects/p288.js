function fact(n) {
  if (n === 1) return 1;
  return n * fact(n - 1);
}


var result1 = fact(4);
console.log(result1);
