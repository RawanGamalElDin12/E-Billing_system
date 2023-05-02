import { Component, OnInit } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { BillingServiceService } from '../Services/billing-service.service';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import { customer } from '../classes/customer';
import { WaterBill } from '../classes/bill';
import { PayServiceService } from '../Services/pay-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit{
  selectedOption: string = '';
  cash: boolean = false;
  initialize: boolean = true;
  credit: boolean = false;
  service:string='';
  payType: string='';
  creditPaid= false;
  invoice =0;

  ngOnInit(): void {
    if (this.payServ.serviceType=="Water")
    this.bill = this.user.waterBills.filter(bill=> bill.billid==this.payServ.billid)[0] ;
    else 
    this.bill = this.user.electricityBills.filter(bill=> bill.billid==this.payServ.billid)[0] ;
        this.service= this.payServ.serviceType;
        this.invoice = this.invoiceNumber();
  }
  constructor(
    private billingservice: BillingServiceService,
    private userdataService: UserdataService,
    private http: HttpServiceService,
    private payServ : PayServiceService,
    private router :Router
  ) {
    this.user = this.userdataService.user;
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
      this.payType='cash';
      
    } else if (this.selectedOption === 'credit') {
      this.initialize = false;
      this.credit = true;
      this.payType='credit';
    }
    
   if (this.payServ.serviceType=='Water')
    {this.user.waterBills.filter(bill=> bill.billid==this.payServ.billid)[0].status = 'Paid';
    this.user.waterBills.filter(bill=> bill.billid==this.payServ.billid)[0].paymentType=this.payType;
      this.http.updateUser(this.user).subscribe();
    this.invoice = this.invoiceNumber();}
    else 
    {
      this.user.electricityBills.filter(bill=> bill.billid==this.payServ.billid)[0].status = 'Paid';
      this.user.electricityBills.filter(bill=> bill.billid==this.payServ.billid)[0].paymentType=this.payType;
      this.http.updateUser(this.user).subscribe();
      this.invoice = this.invoiceNumber();
    }

  }
  paid()
  {
    

    this.creditPaid= true;
  }

  invoiceNumber ()
  {
    const min = 10000000000000; // 10^13
  const max = 99999999999999; // 10^14 - 1
  return Math.round(Math.random() * (max - min) + min);
  }
 
}
