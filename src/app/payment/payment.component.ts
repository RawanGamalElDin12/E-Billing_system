import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { BillingServiceService } from '../Services/billing-service.service';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import { customer } from '../classes/customer';
import { WaterBill } from '../classes/bill';
import { PayServiceService } from '../Services/pay-service.service';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  showConfirmButton = true;
  creditForm: FormGroup;
  // formBuilder: FormBuilder;
  selectedOption: string = '';
  cash: boolean = false;
  initialize: boolean = true;
  credit: boolean = false;
  service: string = '';
  payType: string = '';
  creditPaid = false;
  invoice = 0;
  lateFee = false;
  updatedBill: WaterBill = {
    billid: 0,
    amount: 0,
    date: '',
    status: '',
    lateFees: 0,
    consumption: 0,
    paymentType: '',
  };

  ngOnInit(): void {
    if (this.payServ.serviceType == 'Water') {
      this.bill = this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0];
      const date = this.bill.date;
      const lateFee = this.lateFees(date, 'water');
      if (lateFee != 0) this.updatedBill = { ...this.bill, amount: lateFee };
      else this.updatedBill = { ...this.bill };
    } else if (this.payServ.serviceType == 'Electricity') {
      this.bill = this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0];
      const date = this.bill.date;
      const lateFee = this.lateFees(date, 'electricity');
      if (lateFee != 0) this.updatedBill = { ...this.bill, amount: lateFee };
      else this.updatedBill = { ...this.bill };
    } else if (this.payServ.serviceType == 'Telephone') {
      this.bill = this.user.telephoneBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0];
      const date = this.bill.date;
      const lateFee = this.lateFees(date, 'telephone');
      if (lateFee != 0) this.updatedBill = { ...this.bill, amount: lateFee };
      else this.updatedBill = { ...this.bill };
    }

    this.service = this.payServ.serviceType;
    this.invoice = this.invoiceNumber();
  }
  constructor(
    private billingservice: BillingServiceService,
    private userdataService: UserdataService,
    private http: HttpServiceService,
    private payServ: PayServiceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.user = this.userdataService.user;
    this.creditForm = this.formBuilder.group({
      cardnumber: [
        '',
        [
          Validators.required,
          Validators.maxLength(16),
          Validators.minLength(16),
        ],
      ],
      cardname: ['', [Validators.required]],
      carddate: ['', [Validators.required]],
      cardcvv: [
        '',
        [Validators.required, Validators.maxLength(3), Validators.minLength(3)],
      ],
    });
  }
  user: customer;
  bill: WaterBill = {
    billid: 1222222222222222222,
    amount: 0,
    date: '',
    status: '',
    lateFees: 0,
    consumption: 0,
    paymentType: '',
  };

  onClick() {
    if (this.selectedOption === 'cash') {
      this.initialize = false;
      this.cash = true;
      this.payType = 'cash';
    } else if (this.selectedOption === 'credit') {
      this.initialize = false;
      this.credit = true;
      this.payType = 'credit';
    }

    if (this.payServ.serviceType == 'Water') {
      this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].status = 'Paid';
      this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].paymentType = this.payType;
     if (this.lateFee)
      this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].lateFees = 0.1;
      else
      this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].lateFees = 0;
      this.user.waterBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].amount = this.updatedBill.amount;
      this.http.updateUser(this.user).subscribe();
      this.invoice = this.invoiceNumber();
    } else if (this.payServ.serviceType == 'Electricity') {
      this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].status = 'Paid';
      this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].paymentType = this.payType;
      if(this.lateFee)
      this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].lateFees = 0.1;
      else
      this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].lateFees = 0;

      this.user.electricityBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].amount = this.updatedBill.amount;
      this.http.updateUser(this.user).subscribe();
      this.invoice = this.invoiceNumber();
    } 
    else if (this.payServ.serviceType == 'Telephone') 
    {
      this.user.telephoneBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].status = 'Paid';
      this.user.telephoneBills.filter(
        (bill) => bill.billid == this.payServ.billid
      )[0].paymentType = this.payType;

      if (this.lateFee)
       this.user.telephoneBills.filter((bill) => bill.billid == this.payServ.billid)[0].lateFees = 0.1;
      else
        this.user.telephoneBills.filter((bill) => bill.billid == this.payServ.billid)[0].lateFees = 0

      this.user.telephoneBills.filter((bill) => bill.billid == this.payServ.billid)[0].amount = this.updatedBill.amount;
      this.http.updateUser(this.user).subscribe();
      this.invoice = this.invoiceNumber();
    }
  }
  paid() {
    this.showConfirmButton = false;
    this.creditPaid = true;
  }

  invoiceNumber() {
    const min = 10000000000000; // 10^13
    const max = 99999999999999; // 10^14 - 1
    return Math.round(Math.random() * (max - min) + min);
  }
  checkBillDueDate(billDate: string): boolean {
    const today = new Date();
    console.log(today);
    console.log(billDate);
    if (new Date(billDate) > today) {
      return true; //early
    } else {
      return false; // late
    }
  }
  lateFees(date: string, serviceBill: string): number {
    const flag = this.checkBillDueDate(date);
    if (!flag) {
      if (serviceBill == 'water') {
        const bill = this.user.waterBills.filter(
          (bill) => bill.billid == this.payServ.billid
        )[0];
        this.lateFee = true;
        const lateFee = (bill.amount * (100 + 10)) / 100;
        return lateFee;
      } else if (serviceBill == 'electricity') {
        const bill = this.user.electricityBills.filter(
          (bill) => bill.billid == this.payServ.billid
        )[0];
        this.lateFee = true;
        const lateFee = (bill.amount * (100 + 10)) / 100;
        return lateFee;
      } else if (serviceBill == 'telephone') {
        const bill = this.user.telephoneBills.filter(
          (bill) => bill.billid == this.payServ.billid
        )[0];

        this.lateFee = true;
        const lateFee = (bill.amount * (100 + 10)) / 100;
        return lateFee;
      } else return 0;
    } else return 0;
  }


}
