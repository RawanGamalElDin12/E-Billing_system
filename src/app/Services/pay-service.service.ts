import { Injectable } from '@angular/core';
import { HttpServiceService } from './http-service.service';
import { UserdataService } from './userdata.service';
import { Router } from '@angular/router';
import { customer } from '../classes/customer';
import { TelephoneBills } from '../classes/bill';
import { Offer } from '../classes/Offer';
import { telephoneAccount } from '../classes/telephoneAccount';

@Injectable({
  providedIn: 'root'
})
export class PayServiceService {

  billid :number=0;
  serviceType:string='';
  lateFees:boolean=false;
  tarriff:number=0;
  private user:customer;
  constructor(private http: HttpServiceService, private userdataService: UserdataService
    , private router: Router) {
this.user = this.userdataService.user;
     }

  createANewBill(offer:Offer, serviceProviderName:string, selectedPhoneNumber:string) 
  {
    const newBillID =
    this.user.telephoneBills[this.user.telephoneBills.length - 1].billid + 1;
  const today = new Date();
  const futureDate = new Date();
  futureDate.setDate(today.getDate() + 15);
  const telephone = new TelephoneBills(
    offer.price,
    newBillID,
    offer.minutes,
   futureDate.toDateString(),
    0,
    '',
    'Due',
    serviceProviderName,
    offer.minutes,
    Number(selectedPhoneNumber)
  );
  this.user.telephoneBills.push(telephone);
  this.http.updateUser(this.user).subscribe();
  return newBillID;
  }
  generatePhoneNumber()
  {
    //generate a random phone number starting with 01 and ending with 9 digits
    const firstPart = '01';
    const secondPart = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0');
    return firstPart + secondPart;
    
}
  subscribe (selectedPhoneNumber:string, OfferID:number, serviceProviderName:string, SPID:number){

      console.log(selectedPhoneNumber);
      
      const TelephoneAccount:telephoneAccount =this.user.telephoneAccounts.filter(no=> no.telephoneNo==selectedPhoneNumber)[0];
      TelephoneAccount.offerid=OfferID;
      TelephoneAccount.serviceProvider=serviceProviderName;
      TelephoneAccount.spid=SPID;
      TelephoneAccount.type='Pre-Paid';
      this.user.telephoneAccounts.filter(no=> no.telephoneNo==selectedPhoneNumber)[0]= TelephoneAccount;
      
    
  }
  subscribeGenerate(selectedPhoneNumber:string, OfferID:number, serviceProviderName:string, SPID:number)
  {
    
       const newAccountID =this.user.telephoneAccounts[this.user.telephoneAccounts.length - 1].accountid + 1;
      selectedPhoneNumber= this.generatePhoneNumber();
      const TelephoneAccount =new telephoneAccount(
            newAccountID,
       OfferID,
        serviceProviderName,
        selectedPhoneNumber,
         'Pre-Paid',
       SPID);

      this.user.telephoneAccounts.push(TelephoneAccount);
      
    
  }
}
