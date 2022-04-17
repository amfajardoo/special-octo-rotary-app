import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authSpy: jasmine.SpyObj<AuthService>;

  beforeEach(async () => {
    authSpy = jasmine.createSpyObj('AuthService', ['login']);

    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: AuthService,
          useValue: authSpy,
        },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });

  it('should enable login button when form is valid', () => {
    component.form.controls['email'].setValue('example@hotmail.com');
    component.form.controls['password'].setValue('123456');
    expect(component.form.valid).toBeTrue();

    fixture.detectChanges();
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('#login-btn');

    expect(loginButton.disabled).toBeFalse();
  });

  it('should disable login button when form is invalid', () => {
    expect(component.form.invalid).toBeTrue();
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('#login-btn');
    expect(loginButton.disabled).toBeTrue();
  });

  it('should call login method when login button is clicked', () => {
    component.form.controls['email'].setValue('example@hotmail.com');
    component.form.controls['password'].setValue('123456');
    expect(component.form.valid).toBeTrue();

    fixture.detectChanges();
    const loginButton =
      fixture.debugElement.nativeElement.querySelector('#login-btn');
    expect(loginButton.disabled).toBeFalse();

    loginButton.click();
    expect(authSpy.login).toHaveBeenCalled();
  });
});
