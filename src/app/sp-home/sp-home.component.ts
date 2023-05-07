import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { NavigationExtras, Router } from '@angular/router';
import { Offer } from '../classes/Offer';
import { ServiceProvider } from '../classes/ServiceProvider';
@Component({
  selector: 'app-sp-home',
  templateUrl: './sp-home.component.html',
  styleUrls: ['./sp-home.component.css'],
})
export class SpHomeComponent {
  public userForm: any;
  constructor(
    private fb: FormBuilder,
    private http: HttpServiceService,
    private SPsData: ServiceProvidersDataService,
    private router: Router
  ) {}
  user: any;
  spid: number = 0;
  offers: Offer[] = [];
  ngOnInit() {
    this.user = this.SPsData.getLoggedInSP();
    console.log(this.user);
    if (this.user.offers) {
      this.offers = Object.values(this.user.offers as Offer[]).filter(
        (value) => value !== null && value.offerid !== 0
      );
    } else {
      this.offers = [];
    }

    console.log(Object.values(this.user.offers));
    this.userForm = this.fb.group({
      id: [this.user.id],
      name: [this.user.name],
      tarriff: [this.user.tarriff],
      password: [this.user.password],
    });
  }

  onSubmit() {
    this.user.id = this.userForm.get('id').value;
    this.user.name = this.userForm.get('name').value;
    this.user.tarriff = this.userForm.get('tarriff').value;
    // this.user.password = this.userForm.get('password').value;

    this.http.updateSP(this.user).subscribe(
      (result) => {
        console.log(`SP updated successfully: ${result}`);
        alert('Service Provider Updated Successfully');
        this.SPsData.UpdateSPwithID(this.user.id, this.user);
      },
      (error) => {
        console.log(`Error updating SP: ${error}`);
        alert('Error in updating sp');
      }
    );
  }

  viewOffer(offer: Offer) {
    console.log('helloooooooooooooooooooooooo');
    const navigationExtras: NavigationExtras = {
      state: {
        offer: offer,
        user: this.user,
      },
    };
    console.log('djbcjxbf');
    console.log(this.user);
    this.router.navigate(
      ['SpMain/view-offer', offer.offerid],
      navigationExtras
    );
  }
}
