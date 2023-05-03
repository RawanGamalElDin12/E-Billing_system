import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { UserdataService } from '../Services/userdata.service';
import { customer } from '../classes/customer';
import { TelephoneBills } from '../classes/bill';
import { PayServiceService } from '../Services/pay-service.service';
import { CheckLateFeesService } from '../Services/check-late-fees.service';

@Component({
  selector: 'app-post-paid-account',
  templateUrl: './post-paid-account.component.html',
  styleUrls: ['./post-paid-account.component.css'],
})
export class PostPaidAccountComponent {
  constructor(
    private route: ActivatedRoute,
    private http: HttpServiceService,
    private SPsData: ServiceProvidersDataService,
    private payServ: PayServiceService,
    private router: Router,
    private checkLate: CheckLateFeesService,
    private userdataService: UserdataService
  ) {
    this.user = this.userdataService.user;
    this.pay = this.payServ;
    this.checkLateFees = this.checkLate;
  }

  sp: any;
  tarriff: any;
  account: any;
  user: customer;
  accountid: number = 0;
  billAmount = 0;
  checkLateFees: CheckLateFeesService;
  pay: PayServiceService;
  dueBills: TelephoneBills[] = [];
  paidBills: TelephoneBills[] = [];
  flag = true;
  paidNone = false;
  DueNone = false;
  emptyValue = false;
  bills: TelephoneBills[] = [];
  minutes: number = 0;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      //account id from routing
      this.accountid = Number(params.get('id'));
      console.log(this.accountid);

      this.account = this.user.telephoneAccounts[this.accountid];

      this.tarriff = this.SPsData.SPs[this.account.spid].tarriff;

      if (this.bills.length == 0) {
        this.flag = true;
      }
      this.view();
    });
  }
  view() {
    this.dueBills = [];
    this.paidBills = [];
    this.flag = false;
    this.bills = this.user.telephoneBills.filter(
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
  calculateBill() {
    if (this.tarriff != 0) {
      this.emptyValue = false;
      this.billAmount = this.tarriff * this.minutes;
    } else {
      this.emptyValue = true;
    }
  }
  submitBill() {
    const newBillID =
      this.user.telephoneBills[this.user.telephoneBills.length - 1].billid + 1;
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + 15);
    const telephone = new TelephoneBills(
      this.billAmount,
      newBillID,
      0,
      futureDate.toDateString(),
      0,
      '',
      'Due',
      this.user.telephoneAccounts[this.accountid].serviceProvider,
      this.minutes,
      Number(this.user.telephoneAccounts[this.accountid].telephoneNo)
    );
    this.user.telephoneBills.push(telephone);
    this.http.updateUser(this.user).subscribe();
    this.dueBills.push(telephone);
    this.DueNone = false;
  }
  payBill(index: number): void {
    this.pay.billid = this.dueBills[index].billid;
    this.pay.serviceType = 'Telephone';
  }
  viewReceipt(id: number, userId: string) {
    this.router.navigate(['main/receipt', id, userId, 'Telephone']);
    console.log(id);
  }
}
