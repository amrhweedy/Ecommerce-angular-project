import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Cart } from '../Model/ICart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  URL: string = 'http://localhost:8080/cart';
  data: any;

  constructor(public http: HttpClient) {}

  getCartDetails() {
    return this.http.get(`${this.URL}`);
  }

  addProductToCart(product: any) {
    this.data = {
      product: [
        {
          img: product.img,
          _id: product._id,
          title: product.title,
          quantity: product.quantity,
          price: product.price,
        },
      ],
    };
    console.log(this.URL, product);
    return this.http.post(this.URL, this.data);
  }
}
