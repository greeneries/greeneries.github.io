

const words = ["Beachball", "Rodeo", "Angel",    "Aardvark", "Xylophone", "November", "Chocolate",    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
  // console.log(a[x[0]]);
   if(!a[x[0]]){ // undefined이면은 객체 초기화
     a[x[0]] = [];  // 객체 초기화
    // console.log(x[0] +':'+a[x[0]]);
   }
    
    a[x[0]].push(x);
    return a; }, {});


console.log(alphabetical);
