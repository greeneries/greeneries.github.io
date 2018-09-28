import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ListService {
  URL : string = "http://localhost:3000/books/";
  constructor() { }

  get(): Promise<any>{
    return axios.get(this.URL)
          .then(function(response){
            console.log('ListService : get' , response);
            return response.data;
    });
  }

}
