import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  URL: string = 'http://localhost:8080/users';
  constructor(private http: HttpClient) {}

  getAllUsers() {
    return this.http.get(this.URL);
  }
  getUserById(userId: any) {
    return this.http.get(`${this.URL}/${userId}`);
  }
  addUser(user: any) {
    return this.http.post(this.URL, user);
  }

  editUser(userId: any, user: any) {
    return this.http.post(`${this.URL}/${userId}`, user);
  }
  deleteUser(userId: any) {
    return this.http.delete(`${this.URL}/${userId}`);
  }
}
