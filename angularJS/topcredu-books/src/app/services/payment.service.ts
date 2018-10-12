import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';
@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor() { }
  cart : Cart[] = [];

  charge(){
    this.cart = JSON.parse(sessionStorage.getItem('mycart'));
    console.log('this.cart: ',this.cart);
  }
}
