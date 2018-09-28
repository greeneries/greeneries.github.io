import { FormControl } from '@angular/forms';

// 데코레이터도 없고 인터페이스도 없다.
// 함수는 개발자 마음대로 작성할 수 있다는 의미가 있다.
// 단, FormControl 객체를 파라미터로 받는다.
// 그리고, (함수형,: 불린 값) 형태의 객체를 리턴해야 한다.
// custom 함수
export class InputValidator {
  static startWithNumber(control: FormControl) {
    // 값이 숫자면 True
    let valid = /^\d/.test(control.value);


    if (valid && control.value !== '' && !isNaN(control.value.charAt(0))) {
      // 데이터가 작성 규칙에 위반되면 true를 리턴하세요.
      return { startWithNumber: true };
    }

    return null;
  }
}
