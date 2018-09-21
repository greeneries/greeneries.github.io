import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-custom-directive2',
  templateUrl: './custom-directive2.component.html',
  styleUrls: ['./custom-directive2.component.css']
})
export class CustomDirective2Component implements OnInit, DoCheck {

  isShow = true;

  constructor() { }

  ngOnInit() {   }

  ngDoCheck() {
    console.log(this.isShow);
  }
}
