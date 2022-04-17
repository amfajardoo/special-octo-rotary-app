import { TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from './auth.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let httpSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj<HttpClient>('HttpClient', ['post']);

    TestBed.configureTestingModule({
      providers: [AuthService, { provide: HttpClient, useValue: spy }],
    });
    service = TestBed.inject(AuthService);
    httpSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoult call http.post', waitForAsync(() => {
    const loginDTO = {
      email: 'example@hotmail.com',
      password: '123456',
    };
    httpSpy.post.and.returnValue(of({ token: 'token' }));

    service.login(loginDTO);

    expect(httpSpy.post).toHaveBeenCalledWith(
      `${environment.API_URL}${service.authApi}`,
      loginDTO
    );
  }));
});
