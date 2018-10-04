import { Injectable } from '@angular/core';
import { User } from '../model/user';
import axios from 'axios';
// import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class SignupService {
  URL: string = "http://localhost:3000/profiles/";

  constructor() { }

  signUp (user : User) : Promise<any>{
    return axios.post(this.URL, user)
        .then(function(response){
        console.log(response.data);
        return response.data;
    });
  }
}


// insertProfile(profile : User) : Promise<any>{
//   return axios.post(this.URL, User)
//       .then(function(response){
//       console.log(response.data);
//       return response.data;
//   });
// }



// auth(user): Promise<any> {
//   return axios.get(this.URL + user.id)
//         .then(function(response){
//           console.log('LoginService : auth' , response);
//           return response.data;
//   });
// }
