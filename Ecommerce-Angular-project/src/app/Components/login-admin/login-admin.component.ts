import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css'],
})
export class LoginAdminComponent {
  email: any;
  password: any;
  public loginForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private dialog: MatDialog
  ) {
    this.loginForm = formBuilder.group({
      uemail: ['', [Validators.required]],
      upassword: ['', [Validators.required]],
    });
  }
  get form() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.authService.login(this.email,this.password).subscribe((response: any) => {
      if (response != "Not Authenticated") {
        localStorage.setItem('admin', response);
        this.dialog.closeAll();
        this.router.navigate(['home']);
      }
    });
  }
}
