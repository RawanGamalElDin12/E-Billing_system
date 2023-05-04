import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../classes/ServiceProvider';
import { HttpServiceService } from '../Services/http-service.service';
import { Offer } from '../classes/Offer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-providers',
  templateUrl: './service-providers.component.html',
  styleUrls: ['./service-providers.component.css']
})
export class ServiceProvidersComponent implements OnInit {
   cards:ServiceProvider[]=[]; // cards will be a service provider offer array 
   SP:ServiceProvider=new ServiceProvider(
     '',
    [],
     0,
     0,
     '',
   );
   
   constructor( private http: HttpServiceService
    , private router: Router) {
     
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
        let offersCards :Offer[]=[];
          for (let offer in data[key].offers) {
            if (data[key].offers.hasOwnProperty(offer) && data[key].offers[offer].category!=''&&data[key].offers[offer].minutes!=0)
            offersCards.push(data[key].offers[offer]);
          }
          this.cards.push({...SP,offers:offersCards});

        }}
       
      }
    });
    
    }

    subscribe ()
    {
      
    }

  
   
  
}
