import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  URL: string = 'http://localhost:8080/products';
  constructor(private http: HttpClient) {}

  getAllProducts() {

    return this.http.get(`${this.URL}`);
  }
  getProductById(productId: any) {
    return this.http.get(`${this.URL}/${productId}`);
  }
  addProduct(product: any) {
    return this.http.post(this.URL, product);
  }
  editProduct(productId: any, product: any) {
    return this.http.patch(`${this.URL}/${productId}`, product);
  }
  deleteProduct(productId: any) {
    return this.http.delete(`${this.URL}/${productId}`);
  }
}
