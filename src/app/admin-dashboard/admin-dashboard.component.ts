import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NodeCompatibleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { BillingServiceService } from '../Services/billing-service.service';
import { HttpServiceService } from '../Services/http-service.service';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  eUnitCost: number = 0;
  wUnitCost: number = 0;
  
  
  showElectricity = false;
  showWater = false;
  showUsers = false;
  constructor(private route:Router, private billingService:BillingServiceService,private http:HttpServiceService){}

  ngOnInit() {
   

      
      
   this.eUnitCost = this.billingService.getElectricityPrice();
   this.wUnitCost = this.billingService.getWaterPrice();

    
    
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

  showUsersDiv() {
    this.showElectricity = false;
    this.showWater = false;
    this.showUsers = true;
    this.route.navigate(['AdminMain/ViewUsers']);

  }
  updateEprice(price: number)
  {
    this.billingService.updateEunit(price);
  }
  updateWprice(price: number)
  {
    this.billingService.updateWunit(price);
  }


}
