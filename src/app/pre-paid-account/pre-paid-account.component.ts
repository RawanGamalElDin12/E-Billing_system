import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { ServiceProvider } from '../classes/ServiceProvider';

@Component({
  selector: 'app-pre-paid-account',
  templateUrl: './pre-paid-account.component.html',
  styleUrls: ['./pre-paid-account.component.css']
})
export class PrePaidAccountComponent {
  constructor(private route: ActivatedRoute,private http: HttpServiceService,private SPsData: ServiceProvidersDataService, private router:Router) {}
  
  sp: any;
  offer:any;
  account: any
  user:any;
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
   
      const accountid = params.get('id');
      console.log(accountid);
      this.account = history.state.account;
      this.user = history.state.user;
       console.log(this.user);
       console.log(this.account);
      this.account.accountid
  
      this.offer =  this.SPsData.SPs[this.account.spid].offers[this.account.offerid]
    
  });
}
}
