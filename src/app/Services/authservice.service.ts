import { User } from '../classes/user';
import { HttpServiceService } from './http-service.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './userdata.service';
import { CompletedBills } from '../classes/CompletedBills';
import { DueBills } from '../classes/DueBills';
import { BillingServiceService } from './billing-service.service';
import { UsersDataService } from './users-data.service';
import { customer } from '../classes/customer';
import { ServiceProvider } from '../classes/ServiceProvider';
import { ServiceProvidersDataService } from './service-providers-data.service';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private router: Router,
    private http: HttpServiceService,
    private userDataSerive: UserdataService,
    private billingService: BillingServiceService,
    private UsersData: UsersDataService,
    private SpsData: ServiceProvidersDataService
  ) {}
  isLoggedIn = false;

  login(nationalId: string, password: string): void {
    console.log(nationalId);
    console.log(password);

    if (nationalId == '12345678901235' && password == '12') {
      console.log(this.billingService.getElectricityPrice());
      this.router.navigate(['AdminMain/Dashboard']);
      this.http.getAllUsers().subscribe(
        (users: customer[]) => {
          console.log(users);
          this.UsersData.setUsers(users);
          console.log(this.UsersData.getUsers());
        },
        (error: any) => {
          console.error('Error occurred while fetching users:', error);
        }

  
      );
      this.http.getSPs().subscribe(
        (sps: ServiceProvider[]) => {
          console.log(sps);
          this.SpsData.setSPs(sps);
         // this.UsersData.setUsers(users);
         console.log(this.SpsData.getSPs());
        },
        (error: any) => {
          console.error('Error occurred while fetching sps:', error);
        });
    } else {
      this.http.getUser(nationalId).subscribe(
        (user: customer) => {
          if (user != null && user.password == password) {
            console.log(user);
            this.userDataSerive.user = user;
            console.log(this.userDataSerive.user);

            //alert('Welcome Back!');
            this.router.navigate(['main/home']);
          } else {
            alert('Wrong National ID or Password');
            console.log('Wrong ID or Password');
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
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
  register(email: string): void {
    //eb2y 8ayary getUser de le create user
    this.http.getUser(email).subscribe((user: customer) => {
      if (user != null) {
        console.log(user);
        this.userDataSerive.user = user;
        console.log(this.userDataSerive.user);
        console.log(JSON.parse(user.nationalid));
        alert('Welcome Back!');
        this.router.navigate(['main/home']);
      } else {
        alert('Wrong National ID or Password');
        console.log('Wrong ID or Password');
      }
    });
  }
}
