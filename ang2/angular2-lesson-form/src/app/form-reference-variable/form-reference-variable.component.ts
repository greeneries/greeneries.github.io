import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'form-reference-variable',
  templateUrl: './form-reference-variable.component.html',
  styleUrls: ['./form-reference-variable.component.css']
})
export class FormReferenceVariableComponent implements OnInit {
  // user라는 객체 선언,
  //  html에서 metapolation을 사용해서 사용 가능하고
  //  양뱡향 바인딩을 사용해서 값을 설정할 수 있음 [(ngModel)]="user.id"
  user = { id: '', name: '', password: '' }

  constructor() { }

  ngOnInit() {
  }


  submitForm(f : NgForm) {
    // Angular에서도 순수 자바스크립트 코드를 사용 할 수 있다.
    // 이걸 보여주기 위한 예제
    // var name = (<HTMLInputElement>document.querySelector('#name')).value;
    // var name = (<HTMLInputElement>document.getElementById('name')).value;
  //  console.log('name = ', name);

    // 구태여 javascript를 사용할 필요가 없이 f.value에서 값 가져다가 사용하면 됨.
    // if(name){
    //   f.value.name = name;
    // }
    //
    // alert(JSON.stringify(f.value));
    // if(f.value.name){
    //   delete f.value.name; // delete는 javascript의 문법, 객체의 property를 삭제하겠다는 의미
    // }

    console.log(this.user.id);
  }

}
