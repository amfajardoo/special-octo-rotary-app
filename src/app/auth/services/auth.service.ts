import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@utils/local-storage.service';
import { LoginDTO, LoginResponse } from '@auth/interfaces/login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authApi = 'login';

  constructor(
    @Inject('API_URL') private apiUrl: string,
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  login(value: LoginDTO): void {
    this.http
      .post<LoginResponse>(`${this.apiUrl}/${this.authApi}`, value)
      .subscribe((loginResponse: LoginResponse) => {
        this.localStorageService.setItem('token', loginResponse.token);
      });
  }
}
