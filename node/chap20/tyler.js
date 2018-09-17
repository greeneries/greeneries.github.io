function calculate(a, x, n) {
  if (x === 1) return a * n;
  return a * (1 - Math.pow(x, n)) / (1 - x);
}

// exports 이 파일에 존재하는 자원 중에
// 외부에 제공하고 싶은 자원을 등록하는 예제
// 노드 내장 모듈, third party 모듈 폴더(node_modules/) 아래  ./ 기호없이 사용한다.
module.exports = calculate;
