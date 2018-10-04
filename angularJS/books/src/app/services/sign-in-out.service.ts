import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../model/user';


// https://stackoverflow.com/questions/41241835/how-to-get-the-local-storage-data-into-the-view-file-using-angular-js

@Injectable({
  providedIn: 'root'
})
export class SignInOutService {
  URL: string = "http://localhost:3000/profiles/";


  constructor() { }

  signIn(id : string, pwd : string) : Promise<User>{
    return axios.get(this.URL + id)
        .then(function(response){
          if(response.data.id == id && response.data.password == pwd){
              //localStorage.setItem('currentUser', JSON.stringify(response.data));
              return response.data;
          }
        return null;
    });
  }

  signOut(){
    console.log('로그 아웃 했음');
    localStorage.removeItem('currentUser');
  }



}
