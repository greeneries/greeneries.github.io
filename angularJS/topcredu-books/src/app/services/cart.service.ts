import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Cart } from '../model/cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart : Cart[] = [];
  header_total = 0;
  //book = {id:'', title: '', publisher: '', date: '', author: '', price: 0, url: ''};

  constructor() { }

  addCart(book : Book){

    let cartInStorage = sessionStorage.getItem('mycart');

    if(cartInStorage === null ){
      this.cart.push({id:book.id, title: book.title, price: book.price, quantity: 1, total: book.price});
      let temp = JSON.stringify(this.cart);
      sessionStorage.setItem('mycart',temp);

    }else{
      this.cart = JSON.parse(cartInStorage);
      let i = this.cart.findIndex(x => x.id == book.id);

      if(i <= -1){ // 장바구니에 없다면
        this.cart.push({id:book.id, title: book.title, price: book.price, quantity: 1, total: book.price});
        let temp = JSON.stringify(this.cart);
        sessionStorage.setItem('mycart',temp);

      }else{ // 장바구니에 있다면
        this.cart[i].quantity = this.cart[i].quantity + 1;
        this.cart[i].total = this.cart[i].price * this.cart[i].quantity;
        let temp = JSON.stringify(this.cart);
        sessionStorage.removeItem('mycart');
        sessionStorage.setItem('mycart', temp);
      }

    }

  }

  getCart(){
    this.cart =  JSON.parse(sessionStorage.getItem('mycart'));
    return this.cart;
  }


  calculate(cart : Cart[]): number{
    let sum = 0;
    for(let i =0; i < cart.length; i++){
      sum += cart[i].total;
    }
    return sum;
  }

}
