import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'src/app/utils/local-storage.service';
import { environment } from 'src/environments/environment';
import { LoginDTO, LoginResponse } from '../interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authApi = 'login';

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(value: LoginDTO): void {
    this.http
      .post<LoginResponse>(`${environment.API_URL}${this.authApi}`, value)
      .subscribe((loginResponse: LoginResponse) => {
        this.localStorageService.setItem('token', loginResponse.token);
      });
  }
}
