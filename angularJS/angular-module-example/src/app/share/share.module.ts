import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MyUpperPipe } from './my-upper.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MyUpperPipe,
    HighlightDirective,
    CommonModule,
    FormsModule
  ],
  declarations: [MyUpperPipe, HighlightDirective]
})
export class ShareModule {
  constructor(){
    console.log('ShareModule # constructor() called.');
  }
}
// CommonModule,FormsModule 모듈을 exports 하게 되면
// ShareModule 모듈을 임포트하는 특징 모듈에서
// CommonModule,FormsModule 모듈을 imports 하지 않아도 사용가능하다.
