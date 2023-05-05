import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { Offer } from '../classes/Offer';
import { ServiceProvider } from '../classes/ServiceProvider';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';

@Component({
  selector: 'app-serviceproviders-post-paid',
  templateUrl: './serviceproviders-post-paid.component.html',
  styleUrls: ['./serviceproviders-post-paid.component.css']
})
export class ServiceprovidersPostPaidComponent {
  cards:ServiceProvider[]=[]; // cards will be a service provider offer array 
  SP:ServiceProvider=new ServiceProvider(
    '',
   [],
    0,
    0,
    '',
  );
  SPs: ServiceProvider[] = [];
  constructor( private http: HttpServiceService
   , private router: Router,
   private sps: ServiceProvidersDataService
 ){
  }
  ngOnInit() {
   
    this.http.getSPs().subscribe(data => {
     for (let key in data) {
     if (data.hasOwnProperty(key)) { 
         // iterate each element in get SPs 
     if (data[key].name!='')
      {  console.log(data[key]);
       let SP:ServiceProvider = {
         id: data[key].id,
         name: data[key].name,
         password: data[key].password,
         tarriff: data[key].tarriff,
         offers:[]
       };
        
         this.cards.push(SP);

       }}
      
     }
   });
   
   }
  
   subscribe (SpID: number, offerID: number)
   {
     this.router.navigate(['/main/subscribe',SpID,offerID]);

     
   }


}
