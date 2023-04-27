import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router){}
  isLoggedIn = false;

  login(email: string, password: string): void {
    console.log('in login method inside authservice-------------------');

    // Call an API to authenticate the user and set the isLoggedIn flag to true if the authentication is successful
    if (email === 'admin@g' && password === '123') {
      this.isLoggedIn = true;
      console.log('logged in!!!!!!!!!!');
      alert("Welcome Back!");
      this.router.navigate(['/home']);

    } else {
      this.isLoggedIn = false;
      alert('Invalid credentials');
      console.log('not logged in');
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
