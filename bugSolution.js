function foo(a, b) {
  const numA = a === null ? 0 : a; //Handle nulls by converting to 0
  const numB = b === null ? 0 : b;
  return numA + numB;
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
//Alternative solution that throws an error for null inputs
function foo2(a,b){
  if(a === null || b === null){
    throw new Error("Null values are not allowed");
  }
  return a + b;
}
console.log(foo2(1,2)); // Output: 3
//console.log(foo2(null,2)); // Throws an error