/*
  관객 ====> 가수
  관객 == 매니저 ==> 가수
  관객이 가수 객체를 사용하는 값은 똑같다.
  매니저(proxy)를 통해 가수 객체의 접근하게 되면
  매니저가 제공하는 부가 기능을 허용할 수 있는 혜택이 크다.

  메타 프로그래밍이란?
  자기 자신을 수정하는 것을 말한다.
 */


//const coefficients = {    a: 1,    b: 2,    c: 5, };

function evaluate(x, c) {
  return c.a + c.b * x + c.c * Math.pow(x, 2);
}

const coefficients = {    a: 1,    c: 3, };

//evaluate(5, coefficients);      // NaN

const betterCoefficients = new Proxy(coefficients, {
  // Get Trap
  // 객체의 property의 값을  가져가려 할 때 기동하는 trap() 객체입니다.
  // trap (미리 사용처가 정해진 proxy 로직 등 함수) 객체입니다.
  get(target, key) {
    return target[key] || 0;
  },
});


let result = evaluate(5, betterCoefficients);
