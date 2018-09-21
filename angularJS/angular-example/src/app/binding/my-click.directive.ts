
import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[myClick]' })

export class MyClickDirective {
    toggle = false;

    // @Output('myClick') 은 key 값임
  @Output('myClick') clicks = new EventEmitter<boolean>();

  constructor(el: ElementRef) {
    el.nativeElement.addEventListener('click', (event: Event) =>
    {
      this.toggle = !this.toggle;
      this.clicks.emit(this.toggle ? true : false);
     });
    }
}
