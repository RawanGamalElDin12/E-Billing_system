import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpServiceService } from '../Services/http-service.service';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Offer } from '../classes/Offer';
import { ServiceProvider } from '../classes/ServiceProvider';

@Component({
  selector: 'app-admin-add-offer',
  templateUrl: './admin-add-offer.component.html',
  styleUrls: ['./admin-add-offer.component.css'],
})
export class AdminAddOfferComponent {
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private http: HttpServiceService,
    private SPsData: ServiceProvidersDataService,
    private router: Router
  ) {}
  userForm: any;
  offer: Offer = {
    offerid: 0,
    category: '',
    minutes: 0,
    price: 0,
  };
  users: ServiceProvider[] = [];
  offers: Offer[] = [];
  spId: any;
  user: any;
  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.users = Object.values(this.SPsData.getSPs());

      this.user = history.state.user;
      console.log(this.user);
      this.spId = params.get('id1');
      console.log(this.spId);
      //this.offers = Object.values(this.offer.offers as Offer[]).filter(value => value !== null);

      //console.log(Object.values(this.offer.offers));
      //console.log(userId);
      this.userForm = this.fb.group({
        id: ['', Validators.required],
        name: ['', Validators.required],
        minutes: ['', Validators.required],
        price: ['', Validators.required],
      });
    });
  }
  back() {
    //this.router.navigate(['AdminMain/view-sp',this.spId],this.user);
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
      },
    };
    console.log('djbcjxbf');
    this.router.navigate(['AdminMain/view-sp', this.user.id], navigationExtras);
  }
  onSubmit() {
    console.log(this.userForm.get('id').value);
    this.offer.offerid = this.userForm.get('id').value;
    this.offer.category = this.userForm.get('name').value;
    this.offer.minutes = this.userForm.get('minutes').value;
    this.offer.price = this.userForm.get('price').value;

    this.http.addSPOffer(this.user, this.offer).subscribe(
      (result) => {
        console.log(`Offer Added successfully: ${result.offerid}`);
        alert('Offer Added Successfully');
        this.user.offers[this.offer.offerid] = this.offer;
        this.SPsData.addOfferById(this.user.id, this.offer);
      },
      (error) => {
        console.log(`Error Adding Offer: ${error}`);
        alert('Error in Adding Offer');
      }
    );
  }
}
