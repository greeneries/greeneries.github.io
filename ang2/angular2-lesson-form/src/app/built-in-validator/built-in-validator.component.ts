import { Component, OnInit, Directive, HostListener } from '@angular/core';


@Directive({
  selector: 'mevent'
})
export class Mevent {

  @HostListener('mousedown') onMouseMove() {
    //this.el.style.backgroundColor = "blue";
  //  this.el.style.color = "white";
    console.log('mouse down');
  }

}


@Component({
  selector: 'built-in-validator',
  templateUrl: './built-in-validator.component.html',
  styleUrls: ['./built-in-validator.component.css']
})


export class BuiltInValidatorComponent implements OnInit {
  // user라는 객체를 가지고 있습니다.
  // user 객체에는 id, name이 있어요.
  // 객체에 초기 값을 설정하면 html에서 양뱡향 바인딩 사용 시 초기 값이 설정된다.
  user = { id: '아이디', name: '이름', email: '이메일'};
  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log('test');
  }

}
