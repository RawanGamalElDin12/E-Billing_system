import { User } from './../user';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}
  isLoggedIn = false;
  // router: Router | undefined;

  login(email: string, password: string): void {
    if (email === 'admin@g' && password === '123') {
      this.isLoggedIn = true;
      console.log('logged in!!!!!!!!!!');
      alert('Welcome Back!');
      this.router.navigate(['/home']);
    } else {
      this.isLoggedIn = false;
      alert('Invalid credentials');
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
