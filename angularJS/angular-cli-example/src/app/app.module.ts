import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular는 코드를 레고블록처럼 모두 모듈화하여 사용합니다.
// 모듈은 다수가 있을 수 있으며 시작하는 기동 모듈을 한개만 지정합니다.

// @NgModule 형태의 키워드는 자바에서 Annotation 이라고 부르는 문법입니다.
// angular는 이것을 decorator라고 부릅니다.
// 자바의 Annotation이 클래스 이듯이 angular 함수를 호출하면서 객체를 전달한다는 뜻입니다.

/*
< angular 처리 순서 >
main.js ==> appModule ==> appComponent.ts ==>
1. html
2. CSS
3.Javascript
}
*/

/*
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


// Appmodule 생성자 함수를 new 객체로 만들고 처리하는 작업은
// 개발자 대신 angular framework으 코드가 대신 합니다.
@NgModule({
  declarations: [ // 화면 처리 기술 (Component, Direrctive, Pipe)
    AppComponent
  ],
  imports: [ // 다른 모듈의 자원을 사용할 때 해당 모듈을 선언합니다.
    BrowserModule
  ],
  providers: [], // 공통로직, 즉 서비스 뿐
  bootstrap: [AppComponent] // 시작화면에서 사용할 화면 지정(Component)
})
export class AppModule { }


 */
