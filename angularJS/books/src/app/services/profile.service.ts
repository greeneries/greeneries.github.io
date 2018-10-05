import { Injectable } from '@angular/core';
import axios from 'axios';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL: string = "http://localhost:3000/profiles/";
  constructor() { }


  getProfile(id: string) : Promise<User>{
    return axios.get(this.URL + id)
    .then(function (response){
      console.log(response.data);
      return response.data;
    });
  }

  updateProfile(user : User): void{
    console.log('updateProfle');
    // user를 json으로
    console.log('to JSON: ',JSON.stringify(user));
    axios.put(this.URL + user.id, user)
    .then( function (response){
      console.log('update!!!');
      console.log('response.data : ' + response.data);
    }).catch(function(error){
      console.log(error);
    });

  }

 }
