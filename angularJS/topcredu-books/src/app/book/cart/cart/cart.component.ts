import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { Cart } from '../../../model/cart';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  carts: Cart[];
  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.carts = this.cartService.getCart();
    console.log(this.carts);
  }

  goCharge(){
    if(confirm("정말로 결제하시겠습니까?")){
        this.router.navigate(['payment']);
    }
  }

}
