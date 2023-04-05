import { IProduct } from './../Model/IProduct';
import { ProductsService } from './../Services/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  productId: any;
  productData: any;
  products: any;
  categories: string[] = [
    'Accessories',
    'Chair',
    'Decoration',
    'Furniture',
    'Table',
  ];
  productForm = new FormGroup({
    title: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
    ]),
    desc: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
      Validators.maxLength(100),
    ]),
    quantity: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    categories: new FormControl('', [Validators.required]),
    img: new FormControl('', [Validators.required]),
  });

  constructor(
    public activatedRoute: ActivatedRoute,
    private productsService: ProductsService,
    public router: Router
  ) {
    this.productId = this.activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.productId) {
      console.log(this.productId);
      this.productsService
        .getProductById(this.productId)
        .subscribe((response) => {
          this.productData = Object.values(response);
          this.productForm.setValue({
            title: this.productData[0].title,
            desc: this.productData[0].desc,
            quantity: this.productData[0].quantity,
            price: this.productData[0].price,
            categories: this.productData[0].categories,
            img: this.productData[0].img,
          });
        });
    }
  }
  loadProducts() {
    this.productsService.getAllProducts().subscribe((response) => {
      let productInfo = Object.values(response);
      productInfo.forEach((e) => {
        this.products = e;
      });
    });
  }

  onSubmit(e: Event) {
    e.preventDefault();
    this.productData = this.productForm.value;

    if (this.productId) {
      console.log(this.productData);
      this.productsService
        .editProduct(this.productId, this.productData)
        .subscribe((response) => {
          this.productData = Object.values(response);
          this.loadProducts();
          this.router.navigate(['home/products']);
        });
    } else {
      this.productsService
        .addProduct(this.productData)
        .subscribe((response) => {
          this.productData = Object.values(response);
          this.loadProducts();
          this.router.navigate(['home/products']);
        });
    }
  }

}
