import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ElectricityBill } from '../classes/bill';
import { HttpServiceService } from '../Services/http-service.service';
import { customer } from '../classes/customer';

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

  service ='';
  check: any;
  constructor(
    private route: ActivatedRoute,
    private http: HttpServiceService
  ) {}

  ngOnInit(): void {
    this.bill.billid = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.bill.billid);
    const userid = Number(this.route.snapshot.paramMap.get('userId'));
    this.service = String(this.route.snapshot.paramMap.get('service'));
    if (this.service=="Electricity")
    this.http.getBillElect(userid.toString(), this.bill.billid).subscribe((data) => {
   
      this.bill.amount = data.amount;
      this.bill.consumption = data.consumption;
      this.bill.date = data.date;
      this.bill.lateFees = data.lateFees;
      this.bill.paymentType = data.paymentType;
      this.bill.status = data.status;
    });
    else 
    { this.http.getBillWater(userid.toString(), this.bill.billid).subscribe((data) => {
   
      this.bill.amount = data.amount;
      this.bill.consumption = data.consumption;
      this.bill.date = data.date;
      this.bill.lateFees = data.lateFees;
      this.bill.paymentType = data.paymentType;
      this.bill.status = data.status;
    });}
  }
}
