import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // 화면  담당
  styleUrls: ['./app.component.css'] // 화면 디자인
})
export class AppComponent { // 화면에 사용할 데이터와 로직을 담당
  title = 'Hello World';
  message: string ="안녕하세요.";
  popup(data, t, event, $e){
    console.log(data);
    console.log(t); // AppComponent {title: "Hello World", message: "안녕하세요."}
    console.log(event); // undefined
    console.log($e); // MouseEvent {isTrusted: true, screenX: 60, screenY: 794, clientX: 60, clientY: 697, …}
    alert('^---------^');
  }
}


/*
< angular 처리 순서 >
main.js ==> appModule ==> appComponent.ts
1. ./app.component.html (html)
2. ./app.component.css (CSS)
3. AppComponent

코드에서는 AppComponent라는 자료형을 사용하고
HTML에서는 selector, app-rent에서 지정한
app-root를 태그로 사용할 수 있다.
<app-root></app-root>라고 selector 문자열을 태그처럼 사용할 수 있습니다.
}
*/
