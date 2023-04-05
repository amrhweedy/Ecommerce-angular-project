import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../Services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  displayedColumns: string[] = ['Name', 'Email', 'Password', 'Actions'];
  users: any;
  constructor(private customersService: CustomersService) {}
  ngOnInit(): void {
    this.loadUsers();
  }
  loadUsers() {
    this.customersService.getAllUsers().subscribe((response) => {
      this.users = Object.values(response);
    });
  }
  onDelete(id: any) {
    this.customersService.deleteUser(id).subscribe((response) => {
      console.log(this.users[0]);
      this.users[0] = this.users[0].filter((data: any) => {
        console.log(data._id);
        return data._id != id;
      });
      this.loadUsers();
    });
  }
}
