import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { Offer } from '../classes/Offer';
import { ServiceProvider } from '../classes/ServiceProvider';

@Component({
  selector: 'app-sp-change-offer',
  templateUrl: './sp-change-offer.component.html',
  styleUrls: ['./sp-change-offer.component.css']
})
export class SpChangeOfferComponent {

  constructor(private route: ActivatedRoute, private fb: FormBuilder,private http: HttpServiceService,private SPsData: ServiceProvidersDataService, private router:Router) {}
  userForm : any;
  offer: any;
  users: ServiceProvider[]= [];
  offers: Offer[] = [];
  spId: any;
  user: any;
 ngOnInit() {
   this.route.paramMap.subscribe(params => {

    this.user = history.state.user;

     console.log(this.user);
     const offerId = params.get('id');
      this.offer = history.state.offer;
      console.log(this.offer);
      console.log(this.spId)
      console.log(offerId);
      //this.offers = Object.values(this.offer.offers as Offer[]).filter(value => value !== null);

      //console.log(Object.values(this.offer.offers));
     //console.log(userId);
      this.userForm = this.fb.group({
        id: [this.offer.offerid],
        name: [this.offer.category],
        minutes: [this.offer.minutes],
        price: [this.offer.price]
      });
   });
 
   
 }
 
 onSubmit()
 {

  this.offer.offerid = this.userForm.get('id').value;
  this.offer.category= this.userForm.get('name').value;
  this.offer.minutes= this.userForm.get('minutes').value;
  this.offer.price= this.userForm.get('price').value;

  
  this.http.updateSPOffer(this.user,this.offer).subscribe(
    (result) => {
      console.log(`Offer updated successfully: ${result}`);
      alert("Offer Updated Successfully");
      console.log(this.offer);
      this.SPsData.UpdateLoggedInSPOfferwithID(this.offer);
    },
    (error) => {
    console.log(`Error updating Offer: ${error}`);
      alert("Error in updating Offer");
    }
  );

 }
}
