import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myReverse'
})
export class MyReversePipe implements PipeTransform {

  transform(value: string): string {
    if(value){
      return value.split('').reverse().join('');
    }
    return null;
  }


}
