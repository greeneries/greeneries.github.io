import { Component } from '@angular/core';
//import { SignInOutService } from './services/sign-in-out.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'books';


  constructor(){

  }
  ngOnInit() {

    console.log("AppComponent is called. ngOnInit()");
  }



}
