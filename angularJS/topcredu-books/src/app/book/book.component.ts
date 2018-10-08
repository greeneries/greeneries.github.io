import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book.service';
import { Book } from '../model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books : Book[] = [];
  book = {};
  search_text = '';

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.bookService.list().then(data => {
      this.books = data;
    });
  }

  /* 일단 id로 검색 */
  goSearch(){
    console.log(this.search_text);
    //console.log(this.route.params['title']);
    this.bookService.goSearch(this.search_text).then(data => {
       this.book = data;
       console.log(data);
    });
  }

}
