import { User } from './../user';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpServiceService) {}
  isLoggedIn = false;
  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
  };
  login(nationalId: string): void {
    console.log(nationalId);
    this.http.getUser(nationalId).subscribe(
      (data: User) => {
        if (data != null) {
          console.log(data);
          console.log(data.email);
        } else {
          console.log('no user with this id');
        }
      },
      (error) => {
        console.log(error);
      }
    );

    // if (email === 'admin@g' && password === '123') {
    //   this.isLoggedIn = true;
    //   console.log('logged in!!!!!!!!!!');
    //   alert('Welcome Back!');
    //   this.router.navigate(['/home']);
    // } else {
    //   this.isLoggedIn = false;
    //   alert('Invalid credentials');
    // }
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
