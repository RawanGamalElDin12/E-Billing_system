import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { ServiceProvider } from '../classes/ServiceProvider';
import { Offer } from '../classes/Offer';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-admin-view-sp',
  templateUrl: './admin-view-sp.component.html',
  styleUrls: ['./admin-view-sp.component.css']
})
export class AdminViewSpComponent {
  public userForm: any;
  constructor(private route: ActivatedRoute, private fb: FormBuilder,private http: HttpServiceService,private SPsData: ServiceProvidersDataService, private router:Router) {}
   user: any;
   users: ServiceProvider[]= [];
   offers: Offer[] = [];
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.users = Object.values( this.SPsData.getSPs()); 

      const userId = params.get('id1');
      
       this.user = history.state.user;
       console.log(this.user);
       if (this.user.offers) {
        this.offers = Object.values(this.user.offers as Offer[]).filter(value => value !== null && value.offerid !== 0);
      } else {
        this.offers = [];
      }
      

       console.log(Object.values(this.user.offers));
      console.log(userId);
      this.userForm = this.fb.group({
        id: [this.user.id],
        name: [this.user.name],
        tarriff: [this.user.tarriff]
      });
    });
  
    
  }

  back()
  {
    this.router.navigate(['AdminMain/serviceproviders']);
  }
  open()
  {
    const navigationExtras: NavigationExtras = {
      state: {
        user:this.user
      }
    };

    this.router.navigate(['AdminMain/view-sp', this.user.id,'add-offer'],navigationExtras);

  }
  onSubmit()
  {
    this.user.id = this.userForm.get('id').value;
    this.user.name= this.userForm.get('name').value;
    this.user.tarriff= this.userForm.get('tarriff').value;

    
    this.http.updateSP(this.user).subscribe(
      (result) => {
        console.log(`SP updated successfully: ${result}`);
        alert("Service Provider Updated Successfully")
        this.SPsData.UpdateSPwithID(this.user.id, this.user);
      },
      (error) => {
      console.log(`Error creating SP: ${error}`);
        alert("Error in updating sp");
      }
    );

  }

   viewOffer(offer: Offer) {
     console.log("helloooooooooooooooooooooooo");
     const navigationExtras: NavigationExtras = {
       state: {
         offer: offer,
         user:this.user
       }
     };
   console.log("djbcjxbf");
   console.log(this.user);
     this.router.navigate(['AdminMain/view-sp', this.user.id,'view-offer',offer.offerid],navigationExtras);
   }
}
