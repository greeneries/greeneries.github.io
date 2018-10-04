import { Injectable } from '@angular/core';
import axios from 'axios';
import { Book } from '../model/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  URL: string = "http://localhost:3000/books/";

  constructor() { }

  list(): Promise<Book[]>{
    return axios.get(this.URL)
        .then(function(response){
    return response.data;
  });

}

  // list() : Promise<Book>{
  //   return axios.get(this.URL)
  //       .then(function(response){
  //
  //       return null;
  //   });
  // }

}
