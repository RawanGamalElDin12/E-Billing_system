import { User } from '../classes/user';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';
import { JsonPipe } from '@angular/common';
import { CompletedBills } from '../classes/CompletedBills';
import { DueBills } from '../classes/DueBills';
import { BillingServiceService } from './billing-service.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpServiceService,private userDataSerive: UserdataService,
    private billingService: BillingServiceService) {}
  isLoggedIn = false;
  
  login(nationalId: string, password:string): void {
    console.log(nationalId);
    console.log(password);

    this.http.getUser(nationalId).subscribe(
      (user: User) => {
        if (user != null && user.password == password) {
        console.log(user);
        console.log(JSON.parse(user.nationalId));
        this.userDataSerive.user = user;
        this.billingService.billingServiceInitialization();
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
