import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { BillingServiceService } from '../Services/billing-service.service';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import { customer } from '../classes/customer';
import { WaterBill } from '../classes/bill';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  selectedOption: string = '';
  cash: boolean = false;
  initialize: boolean = true;
  credit: boolean = false;
  // bill: { userId: number; Service: string; date: string; amount: number } = {
  //   userId: 222222222,
  //   Service: 'water-bill',
  //   date: '10-4-2023',
  //   amount: 60,
  // };
  constructor(
    private billingservice: BillingServiceService,
    private userdataService: UserdataService,
    private http: HttpServiceService
  ) {
    this.user = this.userdataService.user;
  }
  user: customer;
  bill: WaterBill[] = [];

  onClick() {
    if (this.selectedOption === 'cash') {
      this.initialize = false;
      this.cash = true;
    } else if (this.selectedOption === 'credit') {
      this.initialize = false;
      this.credit = true;
    }
  }
}
