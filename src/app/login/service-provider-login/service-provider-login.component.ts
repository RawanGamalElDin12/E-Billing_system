import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/authservice.service';
import { Offer } from 'src/app/classes/Offer';
import { ServiceProvider } from 'src/app/classes/ServiceProvider';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-service-provider-login',
  templateUrl: './service-provider-login.component.html',
  styleUrls: ['./service-provider-login.component.css'],
})
export class ServiceProviderLoginComponent {
  sp: ServiceProvider = {
    name: '',
    offers: [
      {
        offerid: 0,
        price: 0,
        category: '',
        minutes: 0,
      },
    ],
    tarriff: 0,
    id: 0,
    password: '',
  };
  loginForm: FormGroup;
  AuthService: any;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  onLogin(form: FormGroup, id: string, password: string) {
    this.authservice.isLoggedIn = true;
    console.log(this.authservice.isLoggedIn);

    console.log(id);
    console.log(password);
    const spId = form.get(id)?.value;

    const Password = form.get(password)?.value;

    this.authservice.loginAsSp(spId, Password);
    console.log('logged in spppppppppppppp');
  }
  register() {
    this.router.navigate(['/register']);
  }
}
