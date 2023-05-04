import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { Router } from '@angular/router';
import { ServiceProvider } from '../classes/ServiceProvider';

@Component({
  selector: 'app-admin-add-sp',
  templateUrl: './admin-add-sp.component.html',
  styleUrls: ['./admin-add-sp.component.css'],
})
export class AdminAddSpComponent {
  public userForm: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService,
    private SPsData: ServiceProvidersDataService,
    private router: Router
  ) {}
  user: ServiceProvider = {
    id: 0,
    name: '',
    tarriff: 0,
    password: '',
    offers: [
      {
        offerid: 0,
        price: 0,
        category: '',
        minutes: 0,
      },
    ],
  };
  users: ServiceProvider[] = [];
  ngOnInit() {
    this.users = Object.values(this.SPsData.getSPs());

    this.userForm = this.fb.group({
      id: ['', [Validators.required]],
      name: ['', [Validators.required]],
      tarriff: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  back() {
    this.router.navigate(['AdminMain/serviceproviders']);
  }
  onSubmit() {
    this.user.id = this.userForm.get('id').value;
    this.user.name = this.userForm.get('name').value;
    this.user.tarriff = this.userForm.get('tarriff').value;
    this.user.password = this.userForm.get('password').value;

    this.http.addSP(this.user).subscribe(
      (result) => {
        console.log(`SP Added successfully: ${result}`);
        alert('Service Provider Added Successfully');
        this.users.push(this.user);
        this.SPsData.setSPs(this.users);
      },
      (error) => {
        console.log(`Error creating SP: ${error}`);
        alert('Error in Adding sp');
      }
    );
  }
}
