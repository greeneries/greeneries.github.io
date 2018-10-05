import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.css']
})
export class SignInFormComponent implements OnInit {

  constructor(private authService: AuthService) { }
  user = {id:'',
          name:'',
          pwd:'',
          email:'',
          gender: ''};

  message: string ="ID is required";
  hidden = true;

  ngOnInit() {
  }


  signIn(){
    this.authService.signIn(this.user.id, this.user.pwd)
        .then( data => {
          this.message = data;
          this.hidden = false;
    }).catch(function (err) {
      console.error(err); // Error 출력
    });

  }

}
