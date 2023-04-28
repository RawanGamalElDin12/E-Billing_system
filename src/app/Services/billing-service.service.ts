import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor(private http:HttpServiceService) {
    
   }
   
  private electricityPrice: number = 0;
  private waterPrice: number = 0;

  billingServiceInitialization()
  {
    this.http.getElectricityUnitCost().subscribe(
      (cost: number) => {
        this.setElectricityPrice(cost);
        
      },
      (error) => {
        console.log(error);
      }

      
      
    );
    this.http.getWaterUnitCost().subscribe(
      (cost: number) => {
        this.setWaterPrice(cost);
        
      },
      (error) => {
        console.log(error);
      }
    );

  }
  setElectricityPrice(price: number): void {
    this.electricityPrice = price;
  }

  getElectricityPrice(): number {
    return this.electricityPrice;
  }

  setWaterPrice(price: number): void {
    this.waterPrice = price;
  }

  getWaterPrice(): number {
    return this.waterPrice;
  }


}
