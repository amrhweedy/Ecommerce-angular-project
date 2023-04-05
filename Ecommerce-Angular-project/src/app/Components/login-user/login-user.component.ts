import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css'],
})
export class LoginUserComponent implements OnInit {
  constructor(private dialog: MatDialog) {}
  login!: FormGroup;
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      pass: new FormControl('', [Validators.required]),
    });
  }

  register = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    pass: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    console.log(this.login.value);
    this.dialog.closeAll();
  }
  onRegister() {
    console.log(this.register.value);
    this.dialog.closeAll();
  }
}
