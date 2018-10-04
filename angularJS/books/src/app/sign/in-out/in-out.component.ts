import { Component, OnInit, EventEmitter, Output  } from '@angular/core';
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

  message: string ="";

  user = {id:'purple',
          name:'',
          pwd:'test',
          email:'',
          gender: ''};

   isLogin = false;
   @Output() isLoginEvent = new EventEmitter<boolean>();

  ngOnInit() {

  }

  signIn(){
    this.signInOut.signIn(this.user.id, this.user.pwd)
        .then( data => {

        if(data !== null){
          sessionStorage.setItem('currentUser', this.user.id);
          this.isLogin  =  true;
          console.log(this.isLogin);
          this.isLoginEvent.emit(this.isLogin);
          this.router.navigate(['book']);
        }

        this.message = "아이디 또는 패스워드가 일치하지 않습니다.";
        this.user.id = ''; this.user.pwd = '';

    }).catch(function (err) {
      console.error(err); // Error 출력
    });
  }

  // signIn() {
  //   return new Promise(function (resolve, reject) {
  //     var data = 100;
  //     resolve(data);
  //   });
  // }

  // //resolve()의 결과 값 data를 resolvedData로 받음
  // signIn().then(function (resolvedData) {
  //   console.log(resolvedData); // 100
  // });


  // this.authenticationService.login(this.model.username, this.model.password)
  //             .subscribe(
  //                 data => {
  //                     this.router.navigate([this.returnUrl]);
  //                 },
  //                 error => {
  //                     this.alertService.error(error);
  //                     this.loading = false;
  //                 });
  //

  signOut(){
    console.log(':::::::::::::::::::::::::signOut');
    sessionStorage.removeItem('currentUser');
    //this.signInOut.signOut();
  }
}
