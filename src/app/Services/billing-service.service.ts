import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor(private http:HttpServiceService) {
    this.billingServiceInitialization();
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
  updateEunit(price:number)
  {
    this.http.updateElectricityUnitPrice(price).subscribe(
      (result) => {
        console.log(`updated successfully: ${result}`);
        alert("Electricity Price Updated Successfully");
        this.setElectricityPrice(price);
      },
      (error) => {
        console.log(`Error updating : ${error}`);
      }
    );
  }
  updateWunit(price:number)
  {
    this.http.updateWaterUnitPrice(price).subscribe(
      (result) => {
        console.log(`updated successfully: ${result}`);
        alert("Water Price Updated Successfully");
        this.setWaterPrice(price);
      },
      (error) => {
        console.log(`Error updating : ${error}`);
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
