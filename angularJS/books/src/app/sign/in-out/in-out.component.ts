import { Component, OnInit, EventEmitter, Output, Input  } from '@angular/core';
import { SignInOutService } from '../../services/sign-in-out.service';
import { Router } from '@angular/router';
// import { User } from '../model/user';

@Component({
  selector: 'app-in-out',
  templateUrl: './in-out.component.html',
  styleUrls: ['./in-out.component.css']
})
export class InOutComponent implements OnInit {

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

    this.signInOut.signIn(this.user.id, this.user.pwd)
        .then( data => {
        if(data !== null){
          sessionStorage.setItem('currentUser', this.user.id);
          this.isLogin  =  true;
          console.log(this.isLogin);
          this.router.navigate(['book']);
        }

        this.message = "Username or password is incorrect";
        this.user.id = ''; this.user.pwd = '';

    }).catch(function (err) {
      console.error(err); // Error 출력
    });
  }

  //
  // signOut(){
  //   sessionStorage.removeItem('currentUser');
  // }
}
