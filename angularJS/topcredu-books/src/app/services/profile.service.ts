import { Injectable } from '@angular/core';
import axios from 'axios';
import { Profile } from '../model/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL: string = "http://localhost:3000/profiles/";
  constructor() { }


  getProfile(id: string) : Promise<Profile>{
    return axios.get(this.URL + id)
    .then(function (response){
      return response.data;
    });
  }

  updateProfile(profile : Profile): void{
    axios.put(this.URL + profile.id, profile)
    .then( function (response){
      console.log('update!!!');
      console.log('response.data : ' + response);
      console.log(typeof response.data);
      console.log('response.data : ' + response.data);
    }).catch(function(error){
      console.log(error);
    });

  }

  signUp (profile: Profile) : Promise<any>{
    return axios.post(this.URL, profile)
        .then(function(response){
        console.log(response.data);
        return response.data;
    });
  }

}
