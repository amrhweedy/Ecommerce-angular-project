import { CustomersService } from './../Services/customers.service';
import { OrdersService } from './../Services/orders.service';
import { ProductsService } from './../Services/products.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  count_Products: any;
  price_sale: number = 0;
  orders: any;
  products: any;
  constructor(
    private productsService: ProductsService,
    private ordersService: OrdersService
  ) {
    this.countSales();
    this.countOrders();
  }
  countOrders() {
    this.ordersService.getAllOrders().subscribe((response) => {
      let data = Object.values(response);
      this.orders = data[0].length;
      console.log(this.orders);
    });
  }
  countSales() {
    this.productsService.getAllProducts().subscribe((response) => {
      this.products = Object.values(response);
      this.count_Products = this.products[0].length;
      let sum = 0;
      for (let i = 0; i < this.products.length; i++) {
        for (let j = 0; j < this.products[i].length; j++) {
          sum += this.products[i][j].price;
        }
      }
      this.price_sale = sum;
    });
  }
}
