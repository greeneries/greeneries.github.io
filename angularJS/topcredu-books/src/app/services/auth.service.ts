import { Injectable } from '@angular/core';
import axios from 'axios';
import { Profile } from '../model/profile';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //private login: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private login = false;
  URL: string = "http://localhost:3000/profiles/";
  constructor(private router: Router) { }

  get isLogin(){
    //return this.login.asObservable();
    if(sessionStorage.getItem('currentUser')){
      return true;
    }
    return this.login;
  }

  set isLogin(isLogin){
    this.login = isLogin;
  }

  signIn(id : string, pwd : string){
    return axios.get(this.URL + id)
        .then(response => {
          if(response.data.id === id && response.data.pwd === pwd){
              sessionStorage.setItem('currentUser', response.data.id);
              //this.login.next(true);
              this.login = true;
              this.router.navigate(['/']);
              // return response.data;
          }else if(response.data.id !== id || response.data.pwd !== pwd){
              return "ID or Password is incorrect.";
          }
        return null;
    }).catch(function (error) {
      console.log(error);
      return "ID or Password is incorrect.";
    });
  }

  // signIn(id : string, pwd : string): Promise<Profile>{
  //   return axios.get(this.URL + id)
  //       .then(response => {
  //         if(response.data.id === id && response.data.pwd === pwd){
  //             sessionStorage.setItem('currentUser', response.data.id);
  //             //this.login.next(true);
  //             this.login = true;
  //             return response.data;
  //         }
  //       return null;
  //   });
  // }


  signOut(){
      sessionStorage.removeItem('currentUser');
        this.login = false;
      //this.login.next(false);
  }

}
