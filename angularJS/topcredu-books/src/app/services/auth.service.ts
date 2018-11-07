import { Injectable } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private subject = new Subject<any>();
  private login = false;
  URL: string = "http://localhost:3000/profiles/";

  constructor(private router: Router) {
  }

  get isLogin(){
    console.log('AuthService: isLogin getter() is called.');
    if(sessionStorage.getItem('currentUser')){
      return true;
    }
    return this.login;
  }

  set isLogin(isLogin){
    console.log('AuthService: isLogin setter() is called.');
    this.login = isLogin;
  }

  signIn(id : string, pwd : string){
    console.log('AuthService: sign() is called.');
    return axios.get(this.URL + id)
        .then(response => {
          if(response.data.id === id && response.data.pwd === pwd){
              sessionStorage.setItem('currentUser', response.data.id);
              this.subject.next({ type: 'success' }); // 로그인 성공 알리기
              this.router.navigate(['/']);
          }else{
              this.subject.next({ type: 'fail' }); // 로그인 실패 알리기
              return "ID or Password is incorrect.";
          }

    }).catch(function (error) {
      //console.log(error);
      return "ID or Password is incorrect.";
    });
  }

  signOut(){
      sessionStorage.removeItem('currentUser');
      // this.login = false;
      this.subject.next({ type: 'fail' }); // 로그인 실패 알리기
  }

  getObservable(): Observable<any> {
    return this.subject.asObservable();
  }

}
