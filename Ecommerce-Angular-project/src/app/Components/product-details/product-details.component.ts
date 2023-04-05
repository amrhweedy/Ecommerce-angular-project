import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from './../Services/cart.service';
import { Component } from '@angular/core';
import { ProductsService } from '../Services/userproducts.service';
import { IProduct } from '../Model/IProduct';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  constructor(
    private productservice: ProductsService,
    private service: CartService,
    private router: Router,
    public activatedRoute: ActivatedRoute
  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  product!: IProduct;
  products: any[] = [];
  id: any;
  counter: number = 1;
  ngOnInit(): void {
    this.productservice.getProductById(this.id).subscribe((response) => {
      this.product = Object.values(response)[0];
    });
  }

  changeQuantity(txt: string) {
    if (txt == 'plus') {
      this.counter++;
      console.log(this.counter);
    } else {
      if (this.counter != 1) this.counter--;
    }
  }

  addToCart() {
      console.log(this.id);

    this.productservice.getProductById(this.id).subscribe((response) => {
      this.product = Object.values(response)[0];
      console.log(this.product);
    });

    this.service.addProductToCart(this.product).subscribe((response) => {
      this.products = Object.values(response);
      console.log(this.products);
    });
  }
}
