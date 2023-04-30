import { Component } from '@angular/core';
import { BillingServiceService } from 'src/app/Services/billing-service.service';
import { waterBill } from 'src/app/classes/bill';
import { WaterBillInfoService } from 'src/app/Services/water-bill-info.service';

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {

  constructor(private billingservice: BillingServiceService, private waterBillService: WaterBillInfoService) {
    this.load();
  }

  bills: waterBill[] = [];
  waterUnitPrice = 0;
  waterUsage = 0;
  billAmount = 0;
  dueBills: waterBill[] = [];
  paidBills: waterBill[] = [];
  flag = true;
  paidNone=false;
  DueNone=false;

  ngOnInit() {
    this.waterUnitPrice = this.billingservice.getWaterPrice();
    console.log(this.waterUnitPrice);
    if (this.bills.length == 0) {
      this.flag=true;
    }
  
  }

  async load() {
    await this.waterBillService.getWaterBillsForUser("12345678901234")
      .subscribe((bills) => {
        this.bills = bills;
        console.log(bills);
        this.view();
      });
  }

  view() {
    this.dueBills = [];
    this.paidBills = [];
    this.flag=false;

    for (let bill of this.bills) {
      if (bill.status == "Paid") {
        this.paidBills.push(bill);
   }
      else {
        this.dueBills.push(bill);
      }
    }

    if (this.paidBills.length == 0) {
      this.paidNone=true;
    }
    if (this.dueBills.length == 0) {
      this.DueNone=true;
    }
  }


  calculateBill(): void {
    // Calculate bill based on water usage
    this.billAmount = this.waterUsage * this.waterUnitPrice;
  }

  submitBill(): void {
    // Submit the bill to the database
  }

  payBill(index: number): void {
    // Pay due bill at the given index
    const bill = this.dueBills[index];
    // ...
  }

  viewReceipt(bill: waterBill): void {
    // View receipt for the paid bill
    // ...
  }
}