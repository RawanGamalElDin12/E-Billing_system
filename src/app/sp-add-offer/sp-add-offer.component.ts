import { Component } from '@angular/core';
import { Offer } from '../classes/Offer';
import { HttpServiceService } from '../Services/http-service.service';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from '../Services/userdata.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';

@Component({
  selector: 'app-sp-add-offer',
  templateUrl: './sp-add-offer.component.html',
  styleUrls: ['./sp-add-offer.component.css'],
})
export class SpAddOfferComponent {
  confirmPass: any;
  offer: Offer = { category: '', minutes: 0, offerid: 0, price: 0 };
  regForm: FormGroup;

  constructor(
    private http: HttpServiceService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private spService: ServiceProvidersDataService
  ) {
    this.regForm = this.formBuilder.group({
      category: ['', Validators.required],
      price: ['', Validators.required],
      minutes: ['', Validators.required],
    });
  }

  add(form: FormGroup, offer: Offer) {
    console.log(offer);
    const sp = this.spService.getLoggedInSP();
    if (offer != null) {
      this.http.addSPOffer(sp, offer).subscribe(
        (result) => {
          console.log(`offer created: ${result}`);
          alert('Offer Added');
          this.spService.UpdateLoggedInSPOfferwithID(this.offer);
        },
        (error) => {
          console.log(`Error creating user: ${error}`);
          alert('Error in Registeration');
        }
      );
    }
  }
}
