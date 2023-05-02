import { Component } from '@angular/core';
import { BillingServiceService } from 'src/app/Services/billing-service.service';
import { WaterBill } from 'src/app/classes/bill';
import { WaterBillInfoService } from 'src/app/Services/water-bill-info.service';
import { UserdataService } from 'src/app/Services/userdata.service';
import { User } from 'src/app/classes/user';
import { UsersDataService } from 'src/app/Services/users-data.service';
import { customer } from 'src/app/classes/customer';
import { HttpServiceService } from 'src/app/Services/http-service.service';
import { PayServiceService } from 'src/app/Services/pay-service.service';
import { Router } from '@angular/router';
import { CheckLateFeesService } from 'src/app/Services/check-late-fees.service';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css'],
})
export class WaterComponent {
  constructor(
    private billingservice: BillingServiceService,
    private waterBillService: WaterBillInfoService,
    private userdataService: UserdataService,
    private http: HttpServiceService,
    private pay: PayServiceService,
    private router:Router,
    private checkLate: CheckLateFeesService

  ) {
    this.user = this.userdataService.user;
    this.checkLateFees = this.checkLate;
  }
  checkLateFees: CheckLateFeesService;
  user: customer;
  bills: WaterBill[] = [];
  waterUnitPrice = 0;
  waterUsage = 0;
  billAmount = 0;
  dueBills: WaterBill[] = [];
  paidBills: WaterBill[] = [];
  flag = true;
  paidNone = false;
  DueNone = false;
  emptyValue = false;

  ngOnInit() {
    this.waterUnitPrice = this.billingservice.getWaterPrice();
    console.log(this.waterUnitPrice);

    if (this.bills.length == 0) {
      this.flag = true;
    }

    this.view();
  }

  view() {
    this.dueBills = [];
    this.paidBills = [];
    this.flag = false;
    this.bills = this.user.waterBills.filter(
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
    if (this.waterUsage == 0) {
      this.emptyValue = true;
    } else {
      this.emptyValue = false;
      this.billAmount = this.waterUsage * this.waterUnitPrice;
    }
  }

  submitBill(): void {
    this.emptyValue = false;
    const newBillID =
      this.user.waterBills[this.user.waterBills.length - 1].billid + 1;
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 15);
    const water = new WaterBill(
      this.billAmount,
      newBillID,
      this.waterUsage,
      futureDate.toDateString(),
      0,
      '',
      'Due'
    );
    this.user.waterBills.push(water);
    this.http.updateUser(this.user).subscribe();
    this.dueBills.push(water);
    this.DueNone = false;
  }

  payBill(index: number): void {
    // Pay due bill at the given index
    this.pay.billid= this.dueBills[index].billid;
    this.pay.serviceType = 'Water';
    
  }

  viewReceipt(id: number, userId: string) {
    // const navigationExtras: NavigationExtras = {
    //   queryParams: { billId: id },
    // };
    // console.log('bill id:', id);
    this.router.navigate(['main/receipt', id, userId,"Water"]);
    console.log('bill id:', id, userId);
  }
}
