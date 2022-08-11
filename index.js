let x = 5;
let y = 10;
let z = 20;

function add(x, y){
return x + y;
}

function subtract(z,y){
  return z - y;
}

function multiply(x,z){
  return x * z; 
}

function divide(z,y){
  return z / y;
}

function increment(n){
  return (n += 1);
}

function decrement(n){
  return (n -= 1);
}

function makeInt(n){
  return parseInt(n,10)
}
function preserveDecimal(n){
  return parseFloat(n)
}
