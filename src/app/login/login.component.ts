import { AuthService } from '../Services/authservice.service';
import { Component, Input, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../classes/user';
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
    completedBills: [
      {billid: '',
      amount: 0,
      PaymentDate: new Date().toDateString(),
      service: '',
      type: '',
      paymentType: ''
  }],
    dueBills: [
      
    {  amount: 0,
      duedate: new Date().toDateString(),
      service: '',
      type: '',
      billid: ''}]
  }
  loginForm: FormGroup;
  AuthService: any;

  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      nationalId: ['', [Validators.required,Validators.maxLength(14),Validators.minLength(14)]],
      password: ['', Validators.required],
    });
  }
  onLogin(form: FormGroup, nationalId: string, password:string) {
    const nationaID = form.get(nationalId)?.value;
    
    const Password = form.get(password)?.value;
   

    this.authservice.login(nationaID,Password);
  }
  register() {
    this.router.navigate(['/register']);
  }
}
