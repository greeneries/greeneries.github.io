import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../model/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService,private cartService: CartService,private route: ActivatedRoute) { }
  cart : Book[] = [];
  book = {};
  id = '';

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.id = params['id'];
        this.goDetail(this.id);
    });
  }

  goDetail(book_id){
    this.bookService.getBook(book_id).then(data => {
        this.book = data;
    });
  }

  addCart(id){
  //  console.log('id:', id);
    this.bookService.getBook(id).then(data =>{
    //console.log('addCart: ',data);
      this.cartService.addCart(data);
      //  this.cartService.addCart();
    });
  //  this.cartService.addCart();
  }

}

// this.sub = this.route.params.subscribe(params => {
//       this.id = +params['id']; // (+) converts string 'id' to a number
//       // In a real app: dispatch action to load the details here.
//    });
//    https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
