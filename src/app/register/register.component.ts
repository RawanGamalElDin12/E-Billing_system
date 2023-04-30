import { User } from '../classes/user';
import { HttpServiceService } from './../Services/http-service.service';
import { UsersDataService } from './../Services/users-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customer } from '../classes/customer';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  user: customer = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    nationalid: '',
    address: '',
    DOB: '',
    waterBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
      },
    ],
    electricityBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
      },
    ],
    telephoneAccounts: [
      {
        offerid: 0,
        serviceProvider: '',
        telephoneNo: '',
        type: '',
      },
    ],
  };
  regForm: FormGroup;

  constructor(
    private httpService: HttpServiceService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder
  ) {
    this.regForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      nationalId: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
        ],
      ],
    });
  }

  register(form: FormGroup, user: customer) {
    // const email = form.get(user.email)?.value;
    const password = form.get(user.password)?.value;

    // this.authService.register(email);
    if (user != null && user.password != password) {
      this.httpService.createUserWithId(user, user.nationalid).subscribe(
        (result) => {
          console.log(`User created successfully: ${result}`);
          this.router.navigate(['main/home']);
        },
        (error) => {
          console.log(`Error creating user: ${error}`);
        }
      );
    }
  }
  login() {
    this.router.navigate(['/login']);
  }
}
