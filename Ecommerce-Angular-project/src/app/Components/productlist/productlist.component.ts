import { ProductsService } from './../Services/products.service';
import { AddProductComponent } from './../add-product/add-product.component';
import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IProduct } from '../Model/IProduct';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent implements OnInit {
  products: any;

  constructor(
    private dialog: MatDialog,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((response: any) => {
      this.products = Object.values(response);
    });
  }
  openEditor(product: any) {
    this.dialog.open(AddProductComponent, {
      data: product,
      height: '80vh',
      width: '70vw',
    });
  }

  onNew() {
    const product = {
      _id: 0,
      title: '',
      desc: '',
      price: 0,
      quantity: 0,
      img: '',
    };
    this.openEditor(product);
  }
  @Input() product: IProduct = {
    _id: 0,
    title: '',
    desc: '',
    price: 0,
    quantity: 0,
    img: '',
    categories: '',
  };

  handlerDeleteProduct(productId: any) {
    this.productsService.deleteProduct(productId).subscribe((response) => {
      this.products =
        this.products.filter((data: any) => {
          return data._id != productId;
        });
    });
  }
}
