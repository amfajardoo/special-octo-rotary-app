import { FormControl, FormGroup } from "@angular/forms";

export interface LoginDTO {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
}

export interface LoginForm {
  email: FormControl<string>;
  password: FormControl<string>;
}