import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../model/cart';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[];
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.carts = this.cartService.getCart();
    console.log(this.carts);
  }

}
