import { Injectable } from '@angular/core';
import axios from 'axios';
import { Profile } from '../model/profile';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  URL: string = "http://localhost:3000/profiles/";

  constructor(private router: Router) { }

  getProfile(id: string) : Promise<Profile>{
    return axios.get(this.URL + id)
    .then(function (response){
      return response.data;
    });
  }

  updateProfile(profile : Profile): void{
    let self = this;
    axios.put(this.URL + profile.id, profile)
      .then( function (response){
        console.log('response.data : ' + response);
        self.router.navigate(['profile']);
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
