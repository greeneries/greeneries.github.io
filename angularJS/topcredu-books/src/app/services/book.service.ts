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
}
