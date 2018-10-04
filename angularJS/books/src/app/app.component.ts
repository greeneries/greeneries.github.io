import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';
  isLogin = false;

  ngOnInit() {
    console.log("AppComponent is called. ngOnInit()");
  }

  // changeTitleBar(){
  //   console.log('changeTitleBar is called');
  // }

}
