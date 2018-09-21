import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {
  text = '안녕하세요';
  weight = 'normal';
  style = 'normal';

  constructor() { }

  ngOnInit() {
  }
  changeWeight($event: any) {
    this.weight = $event.target.checked ? 'bold' : 'normal';
  }

}
