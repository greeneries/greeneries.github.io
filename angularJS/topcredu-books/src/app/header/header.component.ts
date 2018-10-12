import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
//import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  message: string ="Password is required";
  user = {id:'purple',
          name:'',
          pwd:'test',
          email:'',
          gender: ''};

  isLogin = false;

  ngOnInit() {
    this.signIn();
    this.isLogin = this.authService.isLogin;
  }

  signIn(){
    // 로그인 또는 로그아웃 상태 값 변경 감지
    this.authService.getObservable().subscribe(
      message => {
        console.log('message.next: ',message.type);
        if (message.type === 'success') {
          this.isLogin = true;
          console.log('success');
        } else {
          this.isLogin = false;
          console.log('fail');
        }
      }
    );

  }


  // ngAfterContentChecked(){
  //   this.isLogin = this.authService.isLogin;
  //   console.log('ngAfterContentChecked');
  // }

  ngAfterContentInit(){
    //this.isLogin = this.authService.isLogin;
  }

  signOut(){
    this.authService.signOut();
    this.router.navigate(['signInForm']);
  }

}
