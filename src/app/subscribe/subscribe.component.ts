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
  tarriff:number=0;
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
    console.log("SP"+ this.SPID + "OFFER"+ this.OfferID);
    this.http.getSPWithId(this.SPID.toString()).subscribe(data => {
      if (data==null)
      console.log ("Wrong SP ID")
      console.log(data);
      this.serviceProviderName=data.name;
      this.tarriff=data.tarriff;
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
  
    
  if (this.selectedPhoneNumber=='Gen'&& this.OfferID!=-1)
  {
   this.selectedPhoneNumber= this.payServ.subscribeGenerate(this.selectedPhoneNumber, this.OfferID, this.serviceProviderName, this.SPID);
  }
  else if (this.selectedPhoneNumber!='Gen' && this.OfferID!=-1)
  {
    this.payServ.subscribe(this.selectedPhoneNumber, this.OfferID, this.serviceProviderName, this.SPID);
  }
  else if (this.selectedPhoneNumber!='Gen' && this.OfferID==-1)
  {
    this.payServ.subscribePostPaid(this.selectedPhoneNumber, this.OfferID, this.serviceProviderName, this.SPID);
  }
  else if (this.selectedPhoneNumber=='Gen' && this.OfferID==-1)
  {
    this.selectedPhoneNumber=  this.payServ.subscribePostPaidGenerate(this.selectedPhoneNumber, this.OfferID, this.serviceProviderName, this.SPID);
  }
  
  
  console.log ("TARRIFF="+ this.tarriff);
  console.log (this.user);
  let id= this.payServ.createANewBill(this.offer,this.serviceProviderName,this.selectedPhoneNumber,this.tarriff);
  console.log (id);
  this.payServ.billid= id;
  console.log(this.payServ.billid);
  this.payServ.serviceType= 'Telephone'
  this.router.navigate (['/main/payment']);
  
  
  }

}


