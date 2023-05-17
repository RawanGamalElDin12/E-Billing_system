import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { BillingServiceService } from '../Services/billing-service.service';
import { HttpServiceService } from '../Services/http-service.service';
import { Admin } from '../classes/Admin';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css'],
})
export class AdminDashboardComponent {
  eUnitCost: number = 0;
  wUnitCost: number = 0;
  userForm: any;

  showElectricity = false;
  showWater = false;
  showUsers = false;
  admin: Admin = {
    id: 0,
    password: '',
  };
  constructor(
    private route: Router,
    private billingService: BillingServiceService,
    private http: HttpServiceService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.eUnitCost = this.billingService.getElectricityPrice();
    this.wUnitCost = this.billingService.getWaterPrice();

    this.userForm = this.fb.group({
      id: [''],
      password: [''],
    });
  }

  onSubmit() {
    this.admin.id = this.userForm.get('id').value;
    this.admin.password = this.userForm.get('password').value;

    this.http.createAdminwithid(this.admin, this.admin.id).subscribe(
      (result) => {
        console.log(`Admin Added successfully: ${result}`);
        alert('Admin Added Successfully');
      },
      (error) => {
        console.log(`Error adding admin: ${error}`);
        alert('Error in Adding admin');
      }
    );
  }

  showElectricityDiv() {
    this.showElectricity = true;
    this.showWater = false;
    this.showUsers = false;
  }

  showWaterDiv() {
    this.showElectricity = false;
    this.showWater = true;
    this.showUsers = false;
  }

  updateEprice(price: number) {
    this.billingService.updateEunit(price);
  }
  updateWprice(price: number) {
    this.billingService.updateWunit(price);
  }
}
