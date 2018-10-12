import { Component, OnInit } from '@angular/core';
import { BookService } from '../../../services/book.service';
import { CartService } from '../../../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../../model/book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  constructor(private bookService: BookService,private cartService: CartService,private route: ActivatedRoute, private router: Router) { }
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


/*
    async : https://medium.com/@balramchavan/using-async-await-feature-in-angular-587dd56fdc77
*/
  async addCart(id){
     await this.bookService.getBook(id).then(data =>{
      this.cartService.addCart(data);
      if(confirm("장바구니에 담겼습니다. Do you want to confirm?")){
          this.router.navigate(['cart-list']);
      }
    });
  }
}


// this.sub = this.route.params.subscribe(params => {
//       this.id = +params['id']; // (+) converts string 'id' to a number
//       // In a real app: dispatch action to load the details here.
//    });
//    https://angular-2-training-book.rangle.io/handout/routing/routeparams.html
