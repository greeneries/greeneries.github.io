import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadRoutingModule }   from './lazy-load-routing.module';

import { LazyLoadComponent } from './lazy-load.component';



@NgModule({
  imports: [
    CommonModule,
    LazyLoadRoutingModule
  ],
  declarations: [LazyLoadComponent]
})
export class LazyLoadModule {
  constructor(){
    console.log('LazyLoadModule # constructor() called.');
  }
}


// 문자열로 모듈을 레이징 로딩했습니다.
// lazy-load/lazy-load 이 경우 path=""로 설정하면 URL 패턴이 lazy-load/lazy-load 인 걸로 인정됩니다.
//{path : '' , component : LazyLoadComponent }
//exports: [RouterModule]

// 이 부분은 다시 봐야 할 부분
//
