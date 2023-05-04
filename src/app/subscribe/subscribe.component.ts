import { Component, OnInit } from '@angular/core';
import { Offer } from '../classes/Offer';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import { customer } from '../classes/customer';
import { TelephoneBills } from '../classes/bill';
import { PayServiceService } from '../Services/pay-service.service';
import { telephoneAccount } from '../classes/telephoneAccount';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  offer:Offer=new Offer(0,0,'',0);
  SPID:number=0;
  OfferID:number=0;
  selectedPhoneNumber="";
  serviceProviderName='';
  user:customer;
  phoneNumbers:string[]=[];
  constructor(private route:ActivatedRoute, private http: HttpServiceService, private userServ:UserdataService,
    private payServ :PayServiceService, private router:Router) {
    this.user= userServ.user;
  }
   
  ngOnInit() {
    
    for (let number of this.user.telephoneAccounts)
    {
      if(number.telephoneNo!='')
       this.phoneNumbers.push( number.telephoneNo);
    }
    this.SPID= Number(this.route.snapshot.paramMap.get('SpID'));
    this.OfferID= Number(this.route.snapshot.paramMap.get('offerID'));
    console.log("SP"+this.SPID + "OFFER"+ this.OfferID);
    this.http.getSPWithId(this.SPID.toString()).subscribe(data => {
      console.log(data);
      this.serviceProviderName=data.name;
      for (let key in data.offers)
      { if (data.offers.hasOwnProperty(key))
        {
          if (data.offers[key].offerid==this.OfferID)
          {
          this.offer=data.offers[key];
          }
        }
 
      }
    })


  }

  pay(){

  /* TODO: Create a new telephone Bill
  STEPS: 1. Create a new bill id for the new bill 
  ----> this new bill will be pushed in the Due Bill first and sent to payment so that he can pay for it
          2. Push the new bill inside the telephone bills array
          2. Push Said Bill Inside the telephone bills array 
          3. Update the user object with the new bill id 
          4. Update the users telephone Account the telephone account based on his selection*/
  
  this.payServ.subscribeGenerate(this.selectedPhoneNumber, this.OfferID, this.serviceProviderName, this.SPID);
  let id= this.payServ.createANewBill(this.offer,this.serviceProviderName,this.selectedPhoneNumber);
  this.payServ.billid= id;
  this.payServ.serviceType= 'Telephone'
  this.router.navigate (['/main/payment']);
  
  
  }

}


