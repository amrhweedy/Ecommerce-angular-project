import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  register=new FormGroup({
    email: new FormControl("",[
      Validators.email,
      Validators.required,

    ]),
    pass:new FormControl("",[
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    ]),
    username:new FormControl("",[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(15),

    ])

  })

}
