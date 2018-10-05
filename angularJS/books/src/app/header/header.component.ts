import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { SignInOutService } from '../services/sign-in-out.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private signInOut : SignInOutService, private router: Router) { }

  message: string ="Password is required";
// Username or password is incorrect
// Username is required

  user = {id:'purple',
          name:'',
          pwd:'test',
          email:'',
          gender: ''};

   isLogin = false;


  ngOnInit() {

  }

  signIn(){
    console.log('login test');
    this.signInOut.signIn(this.user.id, this.user.pwd)
        .then( data => {
        if(data !== null){
          sessionStorage.setItem('currentUser', this.user.id);
          this.isLogin  =  true;
          this.router.navigate(['book']);
        }

        this.message = "Username or password is incorrect";
        this.user.id = ''; this.user.pwd = '';

    }).catch(function (err) {
      console.error(err); // Error 출력
    });
  }


  signOut(){
    //  sessionStorage.removeItem('currentUser');
    //this.signInOut.signOut();
    sessionStorage.removeItem('currentUser');
    this.router.navigate(['login']);
  }

}
