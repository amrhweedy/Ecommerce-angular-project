import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  URL: string = 'http://localhost:8080/orders';
  constructor(private http: HttpClient) {}

  getAllOrders() {
    return this.http.get(this.URL);
  }
  getOrderById(id: any) {
    return this.http.get(`${this.URL}/${id}`);
  }
  addOrder(order: any) {
    return this.http.post(this.URL, order);
  }

  editOrder(id: any, order: any) {
    return this.http.post(`${this.URL}/${id}`, order);
  }
  deleteOrder(id: any) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
