import { Pipe, PipeTransform } from '@angular/core';

// myDate는 사용하기 위한 닉네임이고 실제 동작은 transform이 동작한다.
@Pipe({
  name: 'myDate'
})
export class MyDataPipe implements PipeTransform {
  strDate = "2018-0921";
  // {{str | myDate:'/'}} 에서
  // str : 첫 번째 파라미터
  // /' : 두 번째 파라미터

  // PipeTransform을 implements했고 transform이라는 추상메소드를 가지고 있음
  // transform(value: any, exponent: any = '-'): any {
  // {{str | myDate:'/'}}
  // str ===> 첫번째 파라미터
  // myDate:'/' ==> 두번째 파라미터
  transform(value: any, exponent?: any): any {

   // exponent가 존재하지 않는다면 '-'를 붙여라
   // 결국 외부에서 파라미터를 하나만 준다면 exponent에 '-'를 붙여라
   // exponent?: any
   //? : 이 파라미터는 optional. 주어도 되고 주지 않아도 된다.
    if (!exponent) {
      exponent = '-';
    }

    if (value.length == 8) {
      return value.substring(0, 4) + exponent + value.substring(4, 6) + exponent + value.substring(6, 8);
    }

    else {
      return value;
    }
  }
}
