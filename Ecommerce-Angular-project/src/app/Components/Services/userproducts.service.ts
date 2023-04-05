import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  id: any;
  url: string = 'http://localhost:8080/userProducts';
  getAllProducts() {
    return this.http.get(this.url);
  }
  getId(_id: number) {
    this.id = _id;
  }
  getProductById(id:any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
