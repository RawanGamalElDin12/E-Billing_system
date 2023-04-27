import { User } from './../user';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpServiceService,private userDataSerive: UserdataService) {}
  isLoggedIn = false;
  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
  };
  login(nationalId: string, password:string): void {
    console.log(nationalId);
    console.log(password);
    this.http.getUser(nationalId).subscribe(
      (user: User) => {
        if (user != null && user.password == password) {
        
        this.userDataSerive.user = user;
         alert("Welcome Back!");
         this.router.navigate(['/home']);
        
      }

        else {
         
          
          console.log('Wrong ID or Password');
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
