import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  subject: string = 'I am HomeComponent';
  constructor() {
    console.log('1. HomeComponent & Constructor');
  }

  // Life Cycle Home Method
  // 컴포넌트가 화면에 표시되기 전에 초기 작업을 위한
  // life cycle 메소드 중 하나 입니다.
  ngOnInit() {
    console.log('2. HomeComponent & ngOnInit');
  }

}
