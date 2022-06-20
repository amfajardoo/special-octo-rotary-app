import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from '@auth/interfaces/login';
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  form: FormGroup<LoginForm> = this.createLoginForm();

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  login(): void {
    this.authService.login(this.form.getRawValue());
  }

  private createLoginForm(): FormGroup<LoginForm> {
    return this.fb.nonNullable.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

}
