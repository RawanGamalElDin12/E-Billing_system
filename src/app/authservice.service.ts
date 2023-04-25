import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isLoggedIn = false;

  login(email: string, password: string): void {
    console.log('in login method inside authservice-------------------');

    // Call an API to authenticate the user and set the isLoggedIn flag to true if the authentication is successful
    if (email === 'admin@g' && password === '123') {
      this.isLoggedIn = true;
      console.log('logged in!!!!!!!!!!');
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
