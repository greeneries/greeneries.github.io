import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c-control',
  templateUrl: './c-control.component.html',
  styleUrls: ['./c-control.component.css']
})
export class CControlComponent implements OnInit {
  counter = 0;
  constructor() { }

  ngOnInit() {
  }

}
