

function divide(a,b){
  return a/b;
}

console.log(divide(3,2));
console.log(divide(3,0));


let arr = [10,20];
let value1 = arr[arr.length - 1];
console.log(value1);

let value2 = arr[arr.length];
console.log(value2);

function getElement(index){
  let value = arr[index];
  if(value === undefined){
    throw new Error('Array Index Out Of Bound Error');
  }
  return value;
}

try{
  let value3 = getElement(2);
  console.log(value3);
}catch(e){
  console.log(e.message);
}finally{
  console.log('정상이든 비정상이든 항상 수행해야 할 코드');
}

let value3 = getElement(2);
console.log(value3);
