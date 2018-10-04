import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL: string = "http://localhost:3000/profiles/";
  constructor() { }

//   insertProfile(profile : User) : void {
//     return axios.post(this.URL, profile)
//     .then(function(response){
//
//     }
//
//   });

  getProfile(id: string) : Promise<User>{
    return axios.get(this.URL + id)
    .then(function (response){
      console.log(response.data);
      return response.data;
    });
  }


 }
