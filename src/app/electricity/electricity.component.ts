import { Component } from '@angular/core';
import { BillingServiceService } from '../Services/billing-service.service';
import { UserdataService } from '../Services/userdata.service';
import { HttpServiceService } from '../Services/http-service.service';
import { customer } from '../classes/customer';
import { ElectricityBill } from '../classes/bill';
import { NavigationExtras, Router } from '@angular/router';
import { PayServiceService } from '../Services/pay-service.service';
import { CheckLateFeesService } from '../Services/check-late-fees.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css'],
})
export class ElectricityComponent {
  constructor(
    private billingservice: BillingServiceService,
    private userdataService: UserdataService,
    private http: HttpServiceService,
    private payServ : PayServiceService,
    private router :Router,
    private checkLate: CheckLateFeesService
  ) {
    this.user = this.userdataService.user;
    this.pay= this.payServ;
    this.checkLateFees = this.checkLate;

  }
  checkLateFees: CheckLateFeesService;
  user: customer;
  pay : PayServiceService;
  bills: ElectricityBill[] = [];
  electricityUnitPrice = 0;
  electricityUsage = 0;
  billAmount = 0;
  dueBills: ElectricityBill[] = [];
  paidBills: ElectricityBill[] = [];
  flag = true;
  paidNone = false;
  DueNone = false;
  emptyValue = false;

  ngOnInit() {
    this.electricityUnitPrice = this.billingservice.getElectricityPrice();
    console.log(this.electricityUnitPrice);

    if (this.bills.length == 0) {
      this.flag = true;
    }
    
    this.view();
  }

  view() {
    this.dueBills = [];
    this.paidBills = [];
    this.flag = false;
    this.bills = this.user.electricityBills.filter(
      (bill) => bill !== null && bill.amount !== 0
    );

    for (let bill of this.bills) {
      if (bill.status == 'Paid') {
        this.paidBills.push(bill);
      } else {
        this.dueBills.push(bill);
      }
    }

    if (this.paidBills.length == 0) {
      this.paidNone = true;
    }
    if (this.dueBills.length == 0) {
      this.DueNone = true;
    }
  }

  calculateBill(): void {
    if (this.electricityUsage != 0) {
      this.emptyValue = false;
      this.billAmount = this.electricityUsage * this.electricityUnitPrice;
    } else {
      this.emptyValue = true;
    }
  }

  submitBill(): void {
    const newBillID =
      this.user.electricityBills[this.user.electricityBills.length - 1].billid +
      1;
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 15);
    const electricity = new ElectricityBill(
      this.billAmount,
      newBillID,
      this.electricityUsage,
      futureDate.toDateString(),
      0,
      '',
      'Due'
    );
    this.user.electricityBills.push(electricity);
    this.http.updateUser(this.user).subscribe();
    this.dueBills.push(electricity);
    this.DueNone = false;
  }
  payBill(index: number): void {
    // Pay due bill at the given index
    this.pay.billid= this.dueBills[index].billid;
    this.pay.serviceType = 'Electricity';
    
  }
  viewReceipt(id: number, userId: string) {
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { billId: id },
    // };
    // console.log('bill id:', id);
    this.router.navigate(['main/receipt', id, userId,"Electricity"]);
    console.log('bill id:', id, userId);
  }
}
