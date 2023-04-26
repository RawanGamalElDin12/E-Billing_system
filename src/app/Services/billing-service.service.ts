import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BillingServiceService {

  constructor() { }
  private electricityPrice: number = 0;
  private waterPrice: number = 0;

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
