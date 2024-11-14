import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as AuthActions from '../../store/auth.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private store:Store){}
  formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Form Submitted:', this.formGroup.value);
      const email = this.formGroup.get('email')?.value!;
      const password= this.formGroup.get('password')?.value!;
      const refreshToken= ''

      this.store.dispatch(AuthActions.login({ email, password}));

    }
  }
}
