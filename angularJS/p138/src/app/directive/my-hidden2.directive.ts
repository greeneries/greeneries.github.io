import { Directive, Input, ElementRef, Renderer, DoChec } from '@angular/core';

@Directive({
  selector: '[myHidden2]'
})
export class MyHidden2Directive {

  constructor(public el: ElementRef, public renderer: Renderer) { console.log('MyHidden2Directive # constructor() called.') }

  @Input() myHidden2: boolean;

  ngDoCheck() {
    if (this.myHidden2) {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', 'none');
    } else {
      this.renderer.setElementStyle(this.el.nativeElement, 'display', '');
    }
  }

}
