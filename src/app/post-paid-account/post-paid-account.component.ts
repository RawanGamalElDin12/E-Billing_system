import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';

@Component({
  selector: 'app-post-paid-account',
  templateUrl: './post-paid-account.component.html',
  styleUrls: ['./post-paid-account.component.css']
})
export class PostPaidAccountComponent {
  constructor(private route: ActivatedRoute,private http: HttpServiceService,private SPsData: ServiceProvidersDataService, private router:Router) {}
  
  sp: any;
  tarriff:any;
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
  
      this.tarriff =  this.SPsData.SPs[this.account.spid].tarriff
      console.log(this.tarriff);
    
  });
}
}
