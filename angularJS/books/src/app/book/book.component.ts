import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : Book[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService.list().then(data => {
      this.books = data;
      console.log(data)
    });
  }


}
