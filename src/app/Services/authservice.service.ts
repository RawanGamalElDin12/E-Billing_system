import { User } from './../user';
import { HttpServiceService } from './http-service.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;
  // router: Router | undefined;

  login(email: string, password: string): void {
    if (email === 'admin@g' && password === '123') {
      this.isLoggedIn = true;
      // this.router?.parseUrl('/');
    } else {
      this.isLoggedIn = false;
      alert('Invalid credentials');
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
