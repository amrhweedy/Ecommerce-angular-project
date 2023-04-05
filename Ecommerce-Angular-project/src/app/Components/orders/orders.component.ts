import { OrdersService } from './../Services/orders.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  displayedColumns: string[] = [
    'UserID',
    'Quantity of Products',
    'Amount',
    'Actions',
  ];
  orders: any;
  constructor(private ordersService: OrdersService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.ordersService.getAllOrders().subscribe((response) => {
      this.orders = Object.values(response);
      console.log(this.orders)
    });
  }
  onDelete(userId: any) {
    this.ordersService.deleteOrder(userId).subscribe((response) => {
      console.log(response);
      this.orders = this.orders.filter((order: any) => {
        return order.userid != userId;
      });
      alert(`Deleted`);
    });
  }
}
