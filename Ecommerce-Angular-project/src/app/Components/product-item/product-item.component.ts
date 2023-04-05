import { Router } from '@angular/router';
import { ProductsService } from './../Services/products.service';
import { Component, Input } from '@angular/core';
import { IProduct } from '../Model/IProduct';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  products: any;
  constructor(
    private productsService: ProductsService,
    private router: Router,
  ) {}

}
