const cook = {
  name: "Walt",
  redPhosphorus: 100, // dangerous
  water: 500, // safe
};

/*
property에 값을 할당하려 할 때 set 핸들러로 가로챌 수 있습니다.
객체에 위험한 property가 있어서 한단계를 더 거치지 않으면 값을 할당하거나
메서드를 호출할 수 없게 하려고 합니다.
거쳐야 할 단계는 allowDangerousOperations setter입니다.
 */
let count = 0;
const protectedCook = new Proxy(cook, {
  set(target, key, value) {
    console.log('count : ', ++count);
    if (key === 'redPhosphorus') {
      if (target.allowDangerousOperations)
        return target.redPhosphorus = value;
      else
        return console.log("Too dangerous!");
    } // all other properties are safe
    target[key] = value;
  },
});

// proeprty에 값 할당하려 할때 proxy가 가로채서 무언가를 가공한다. 
protectedCook.water = 550; // 550
protectedCook.redPhosphorus = 150; // Too dangerous!
protectedCook.allowDangerousOperations = true;
protectedCook.redPhosphorus = 150; // 150

console.log(cook);
