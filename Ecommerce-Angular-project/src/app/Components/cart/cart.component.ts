import { Component, OnInit } from '@angular/core';
import { Cart } from './../Model/ICart';
import { CartService } from './../Services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart:any;
  id: any;
  constructor(public active: ActivatedRoute, public cartser: CartService) {
    this.id = this.active.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.cartser.getCartDetails().subscribe((response) => {
      this.cart = Object.values(response)[0];
      console.log(this.cart)
    });
  }
}
