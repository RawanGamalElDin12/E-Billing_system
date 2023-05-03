
import { Injectable , EventEmitter} from '@angular/core';
import { User } from '../classes/user';
import { customer } from '../classes/customer';
import { ServiceProvider } from '../classes/ServiceProvider';
import { Offer } from '../classes/Offer';

@Injectable({
  providedIn: 'root',
})
export class ServiceProvidersDataService {
   SPs: ServiceProvider[] = [];
   loggedInSp: any;
  constructor() {}
  SPsChanged = new EventEmitter<ServiceProvider[]>();

  getLoggedInSP(): ServiceProvider
  {
   return this.loggedInSp;
 }

 setLoggedInSP(value: ServiceProvider) {
   this.loggedInSp = value;
 }


  getSPs() {
    console.log(JSON.stringify(this.SPs));
    return this.SPs;
  }
  getloggedInSP(id:number)
  {
     return this.SPs[id];
  }
  setSPs(SPs: ServiceProvider[]) {
    this.SPs = SPs;
    console.log(this.SPs);
  }
  UpdateSPwithID(id: number, updatedSP: ServiceProvider) {
    const index = id;
    // update the user with the new data

    this.SPs[index].name = updatedSP.name;
    this.SPs[index].tarriff = updatedSP.tarriff;
    
  }
  UpdateSPOfferwithID(spid: number, offer: Offer) {
    const index = offer.offerid;
    // update the user with the new data

    this.SPs[spid].offers[index].category =offer.category;
    this.SPs[spid].offers[index].minutes =offer.minutes;
    this.SPs[spid].offers[index].price =offer.price;
    
  }
  addOfferById(spid: number, offer: Offer) {
    // Find the service provider with the specified ID.
    const sp = this.SPs[spid];
  
    // If the service provider is found, add the offer to their list of offers.
    if (sp) {
      console.log("-----hello from add offer by ID -----------------");
      sp.offers[offer.offerid] = offer;
      console.log(this.SPs[spid].offers);
    }
  }
  

  // deleteUserByNationalId(nationalId: string): void {
  //   if (this.SPs.hasOwnProperty(nationalId)) {
  //     delete this.SPs[parseInt(nationalId)];
  //     console.log(this.SPs);
  //     this.SPsChanged.emit(Object.values(this.SPs));

  //   }
  // }
  
}

