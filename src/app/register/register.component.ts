import { User } from '../classes/user';
import { HttpServiceService } from './../Services/http-service.service';
import { UsersDataService } from './../Services/users-data.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { customer } from '../classes/customer';
import { UserdataService } from '../Services/userdata.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { BillingServiceService } from '../Services/billing-service.service';
import { ServiceProvider } from '../classes/ServiceProvider';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
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
        accountid: 0,
        spid: 0,
      },
    ],
    telephoneBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
        minutes: 0,
        serviceProvider: '',
        telephoneNo: '',
      },
    ],
  };
  regForm: FormGroup;

  constructor(
    private httpService: HttpServiceService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userDataservice: UserdataService,
    private serviceProviders: ServiceProvidersDataService,
    private billing: BillingServiceService
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
    console.log(user);
    if (user != null) {
      this.httpService.createUserWithId(user, user.nationalid).subscribe(
        (result) => {
          console.log(`User created successfully: ${result}`);
          alert('Registered Successfully');
          this.userDataservice.user = result;

          console.log(result.address);
          this.router.navigate(['main/home']);
        },
        (error) => {
          console.log(`Error creating user: ${error}`);
          alert('Error in Registeration');
        }
      );
    }
    this.httpService.getSPs().subscribe(
      (sps: ServiceProvider[]) => {
        console.log(sps);
        this.serviceProviders.setSPs(sps);
        // this.UsersData.setUsers(users);
        console.log(this.serviceProviders.getSPs());
      },
      (error: any) => {
        console.error('Error occurred while fetching sps:', error);
      }
    );
    this.billing.billingServiceInitialization();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
