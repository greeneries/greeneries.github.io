// 우리가 만든 서비스는 반드시 app.module.ts 파일의 provider에 등록해야 하지만
// angualr가 이미 만들어놓은것은 import만 해서 사용하면 된다.
import { Directive , ElementRef, Renderer,  Output} from '@angular/core';

// 컴포넌트는 뷰가 있지만 디렉티브는 뷰를 갖고 있지 않다.
// 디렉티브는 이미 존재하는 엘리먼트에 특정 행동을 추가하는 역할
@Directive({
  selector: '[myHidden]'
})
export class MyHiddenDirective {

  // myHidden을 속성으로 가지고 있는 엘리먼트를 갖고 있는 ElementRef 자료형의 객체
  // Renderer는 엘리먼트를 조작할 때 사용하는 객체
  // native 엘리먼트에 style='display:none'라는 속성을 추가한다.
  constructor(el: ElementRef, renderer: Renderer) {
      // <h1 _ngcontent-c1="" myhidden="" style="display: none;">Hidden Welcome</h1>
      renderer.setElementStyle(el.nativeElement, 'display', 'none');
   }
}
