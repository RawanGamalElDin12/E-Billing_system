import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { ServiceProvider } from '../classes/ServiceProvider';
import { Offer } from '../classes/Offer';

@Component({
  selector: 'app-admin-change-offer',
  templateUrl: './admin-change-offer.component.html',
  styleUrls: ['./admin-change-offer.component.css']
})
export class AdminChangeOfferComponent {
 // public userForm: any;

  constructor(private route: ActivatedRoute, private fb: FormBuilder,private http: HttpServiceService,private SPsData: ServiceProvidersDataService, private router:Router) {}
  userForm : any;
  offer: any;
  users: ServiceProvider[]= [];
  offers: Offer[] = [];
  spId: any;
  user: any;
 ngOnInit() {
   this.route.paramMap.subscribe(params => {
     this.users = Object.values( this.SPsData.getSPs()); 

     this.user = history.state.user;
     console.log(this.user);
     this.spId = params.get('id1');
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
 back()
 {
  //this.router.navigate(['AdminMain/view-sp',this.spId],this.user);
  const navigationExtras: NavigationExtras = {
    state: {
      user: this.user
    }
  };
  console.log("djbcjxbf");
  this.router.navigate(['AdminMain/view-sp', this.user.id],navigationExtras);


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
      alert("Offer Updated Successfully")
      this.SPsData.UpdateSPOfferwithID(this.user.id, this.offer);
    },
    (error) => {
    console.log(`Error updating Offer: ${error}`);
      alert("Error in updating Offer");
    }
  );

 }
}
