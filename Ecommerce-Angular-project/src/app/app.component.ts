import { Component, Input } from '@angular/core';
import { AuthService } from './Components/Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Client';
  @Input() flag!: boolean;

  // flag: any;
  constructor(private authService: AuthService) {
    this.authService.change;
  }
  // flag = this.authService.change;
}
