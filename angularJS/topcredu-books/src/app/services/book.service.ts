import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import axios from 'axios';

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

  getBook(id) : Promise<Book>{
    return axios.get(this.URL + id)
          .then(function(response){
            return response.data;
    });
  }



  goSearch(title) : Promise<Book>{
      return axios.get(this.URL + title)
          .then(function(response){
      return response.data;
    });
  }

}
