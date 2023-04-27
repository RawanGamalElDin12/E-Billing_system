import { AuthService } from '../Services/authservice.service';
import { Component, Input, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
  };
  loginForm: FormGroup;
  AuthService: any;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      nationalId: ['', [Validators.required, Validators.maxLength(14)]],
      password: ['', Validators.required],
    });
  }
  onLogin(form: FormGroup, nationalId: string) {
    const controlValue = form.get(nationalId)?.value;
    console.log(`${nationalId}: ${controlValue}`);

    // nationalId = this.loginForm.get('nationalid')?.value;
    // console.log('in onlogin-------');
    // console.log(nationalId);
    this.authservice.login(controlValue);
  }
  register() {
    this.router.navigate(['/register']);
  }
}
