import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectricityBill } from '../classes/bill';
import { HttpServiceService } from '../Services/http-service.service';
import { customer } from '../classes/customer';
import { BillingServiceService } from '../Services/billing-service.service';
import { TelephoneBills } from '../classes/bill';
import { PayServiceService } from '../Services/pay-service.service';
import { ServiceProvider } from '../classes/ServiceProvider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { async } from 'rxjs';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css'],
})
export class ReceiptComponent implements OnInit {
  user: customer = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    nationalid: '',
    address: '',
    DOB: '',
    waterBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
      },
    ],
    electricityBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
      },
    ],
    telephoneAccounts: [
      {
        offerid: 0,
        serviceProvider: '',
        telephoneNo: '',
        type: '',
        accountid: 0,
        spid: 0,
      },
    ],
    telephoneBills: [
      {
        amount: 0,
        billid: 0,
        consumption: 0,
        date: '',
        lateFees: 0,
        paymentType: '',
        status: '',
        minutes: 0,
        serviceProvider: '',
        telephoneNo: '',
      },
    ],
  };

  bill: ElectricityBill = {
    amount: 0,
    billid: 0,
    consumption: 0,
    date: '',
    lateFees: 0,
    paymentType: '',
    status: '',
  };

  telebill: TelephoneBills = {
    amount: 0,
    billid: 0,
    consumption: 0,
    date: '',
    lateFees: 0,
    paymentType: '',
    status: '',
    minutes: 0,
    serviceProvider: '',
    telephoneNo: '',
  };
  serv: ServiceProvider = {
    id: 0,
    name: '',
    offers: [],
    tarriff: 0,
    password: '',
  };
  service = '';
  check: any;
  unit = '';
  price = 0;
  power = false;
  spName = '';
  telephoneMessage = '';
  constructor(
    private route: ActivatedRoute,
    private http: HttpServiceService,
    private billingService: BillingServiceService,
    private payServ: PayServiceService
  ) {}

  ngOnInit(): void {
    this.bill.billid = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.bill.billid);
    const userid = Number(this.route.snapshot.paramMap.get('userId'));
    this.service = String(this.route.snapshot.paramMap.get('service'));
    if (this.service == 'Electricity')
      this.http
        .getBillElect(userid.toString(), this.bill.billid)
        .subscribe((data) => {
          this.price = this.billingService.getElectricityPrice();
          this.unit = 'kWh';
          this.bill.amount = data.amount;
          this.bill.consumption = data.consumption;
          this.bill.date = data.date;
          this.bill.lateFees = data.lateFees;
          this.bill.paymentType = data.paymentType;
          this.bill.status = data.status;
        });
    else if (this.service == 'Water') {
      this.http
        .getBillWater(userid.toString(), this.bill.billid)
        .subscribe((data) => {
          this.power = true;
          this.unit = 'm^3';
          this.price = this.billingService.getWaterPrice();
          this.bill.amount = data.amount;
          this.bill.consumption = data.consumption;
          this.bill.date = data.date;
          this.bill.lateFees = data.lateFees;
          this.bill.paymentType = data.paymentType;
          this.bill.status = data.status;
        });
    } else {
      this.http
        .getBillTele(userid.toString(), this.bill.billid)
        .subscribe((data) => {
          this.spName = data.serviceProvider;
          this.unit = 'mins';
          this.bill.consumption = data.minutes;
          this.bill.date = data.date;
          this.bill.lateFees = data.lateFees;
          this.bill.paymentType = data.paymentType;
          this.bill.status = data.status;
          this.bill.amount = data.amount;
          this.telebill.telephoneNo = data.telephoneNo;
          this.telephoneMessage = 'Phone Number:' + this.telebill.telephoneNo;
          console.log(data);

          if (this.spName != '') {
            this.http.getSPbyName(this.spName).subscribe((serviceProvider) => {
              console.log(serviceProvider.tarriff);
              this.price = serviceProvider.tarriff;
            });
          }
        });
      console.log(this.price);
    }
  }
}
