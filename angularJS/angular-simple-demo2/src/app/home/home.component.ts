import { Component, OnInit } from '@angular/core';
import { StateService } from '../common/state.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Home Page';
  body: string = 'This is the about home body';
  message: string;

// 앵귤러가 미리 만들어 놓은 서비스 객체 중에서 자료형이
// StateService인 객체를 파라미터로 전달해 달라고 요청합니다.
  constructor(private _stateService: StateService) { }

  // 화면에 해당 컴포넌트가 실행되기 전에 먼저 기동
  // A lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
  // Define an ngOnInit() method to handle any additional initialization tasks.
  ngOnInit() {
  // message 변수는 값이 없었는데
  // 서비스 객체로부터 값을 전달받아 초기값으로 사용합니다.
    this.message = this._stateService.getMessage();
  }

  updateMessage(m: string): void {
    this._stateService.setMessage(m);
  }
}
