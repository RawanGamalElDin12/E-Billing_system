import { Component } from '@angular/core';
import { customer } from '../classes/customer';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';

@Component({
  selector: 'app-admin-add-user',
  templateUrl: './admin-add-user.component.html',
  styleUrls: ['./admin-add-user.component.css'],
})
export class AdminAddUserComponent {
  confirmPass: any;
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
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
          ),
        ],
      ],
      confirmPassword: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,}/
          ),
        ],
      ],
      firstName: [
        '',
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],
      lastName: [
        '',
        [Validators.required, Validators.pattern(/^[a-z ,.'-]+$/i)],
      ],
      nationalId: [
        '',
        [
          Validators.required,
          Validators.maxLength(14),
          Validators.minLength(14),
          Validators.pattern(/^[0-9]+$/),
        ],
      ],
      DOB: ['', Validators.required],
      address: ['', Validators.required],
    });
  }

  register(form: FormGroup, user: customer) {
    // const email = form.get(user.email)?.value;
    const password = form.get(user.password)?.value;
    const national_id = form.get(user.nationalid)?.value;
    // this.authService.register(email);
    if (user != null && national_id != null) {
      this.httpService.createUserWithId(user, user.nationalid).subscribe(
        (result) => {
          console.log(`User created successfully: ${result}`);
          this.router.navigate(['AdminMain/Dashboard']);
        },
        (error) => {
          console.log(`Error creating user: ${error}`);
        }
      );
    }
  }
}
