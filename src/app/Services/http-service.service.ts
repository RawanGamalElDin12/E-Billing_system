import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, map, of } from 'rxjs';
import { customer } from '../classes/customer';
import { ElectricityBill, TelephoneBills, WaterBill } from '../classes/bill';
import { ServiceProvider } from '../classes/ServiceProvider';
import { Offer } from '../classes/Offer';
import { Admin } from '../classes/Admin';
import { telephoneAccount } from '../classes/telephoneAccount';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  users: User[] = [];
  baseurl2 = 'https://billing-sys2-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  getUser(id: string): Observable<customer> {
    const url = `${this.baseurl2}/users/${id}.json`;
    return this.http.get<customer>(url);
  }
  getUserNew(id: string): Observable<User> {
    const url = `${this.baseurl2}/users/${id}.json`;
    return this.http.get<User>(url);
  }
  getAllUsers(): Observable<customer[]> {
    const url = `${this.baseurl2}/users.json`;
    return this.http.get<customer[]>(url);
  }

  createUserWithId(user: customer, id: string): Observable<customer> {
    const url = `${this.baseurl2}/users/${id}.json`;
    return this.http.put<customer>(url, JSON.stringify(user), this.httpOptions);
  }
  createAdminwithid(admin: Admin, id: number): Observable<Admin> {
    const url = `${this.baseurl2}/admins/${id}.json`;
    return this.http.put<Admin>(url, JSON.stringify(admin), this.httpOptions);
  }

  createSPWithId(sp: ServiceProvider, id: string): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders/${id}.json`;
    return this.http.put<ServiceProvider>(
      url,
      JSON.stringify(sp),
      this.httpOptions
    );
  }
  getSPs(): Observable<ServiceProvider[]> {
    const url = `${this.baseurl2}/ServiceProviders.json`;
    return this.http.get<ServiceProvider[]>(url);
  }
  getSPWithId(id: string): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders/${id}.json`;
    return this.http.get<ServiceProvider>(url);
  }

  getSPbyName(serviceName: string): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders.json?orderBy="name"&equalTo="${serviceName}"`;
    console.log(url);
    return this.http.get(url).pipe(
      map((data) => {
        const serviceProviders = Object.values(data); // get an array of the service providers
        const serviceProvider = serviceProviders[0]; // get the first service provider (assuming there is only one)

        // Create a new ServiceProvider object using the data from the JSON object
        const newServiceProvider: ServiceProvider = {
          name: serviceProvider.name,
          offers: serviceProvider.offers,
          tarriff: serviceProvider.tarriff,
          id: serviceProvider.id,
          password: serviceProvider.password,
        };

        return newServiceProvider; // return the new ServiceProvider object
      })
    );
  }

  deleteUserById(id: string): Observable<void> {
    const url = `${this.baseurl2}/users/${id}.json`;
    return this.http.delete<void>(url, this.httpOptions);
  }

  getElectricityUnitCost(): Observable<number> {
    const url = `${this.baseurl2}/UnitCosts/electricity.json`;
    return this.http.get<number>(url);
  }

  getWaterUnitCost(): Observable<number> {
    const url = `${this.baseurl2}/UnitCosts/water.json`;
    return this.http.get<number>(url);
  }

  updateWaterUnitPrice(wUnit: number): Observable<number> {
    const url = `${this.baseurl2}/UnitCosts/water.json`;
    return this.http.put<number>(url, JSON.stringify(wUnit), this.httpOptions);
  }
  updateElectricityUnitPrice(eUnit: number): Observable<number> {
    const url = `${this.baseurl2}/UnitCosts/electricity.json`;
    return this.http.put<number>(url, JSON.stringify(eUnit), this.httpOptions);
  }
  updateUser(user: customer): Observable<customer> {
    const url = `${this.baseurl2}/users/${user.nationalid}.json`;
    return this.http.put<customer>(url, JSON.stringify(user), this.httpOptions);
  }
  getBillElect(userid: string, billid: number) {
    const url = `${this.baseurl2}/users/${userid}/electricityBills/${billid}.json`;
    return this.http.get<ElectricityBill>(url);
  }

  getBillWater(userid: string, billid: number) {
    const url = `${this.baseurl2}/users/${userid}/waterBills/${billid}.json`;
    return this.http.get<WaterBill>(url);
  }
  getBillTele(userid: string, billid: number) {
    const url = `${this.baseurl2}/users/${userid}/telephoneBills/${billid}.json`;
    return this.http.get<TelephoneBills>(url);
  }
  updateSP(sp: ServiceProvider): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders/${sp.id}.json`;
    console.log(sp);
    return this.http.put<ServiceProvider>(
      url,
      JSON.stringify(sp),
      this.httpOptions
    );
  }
  updateSPOffer(sp: ServiceProvider, offer: Offer): Observable<Offer> {
    const url = `${this.baseurl2}/ServiceProviders/${sp.id}/offers.json`;
    console.log(sp);
    console.log(offer.offerid);
    console.log(sp.offers[offer.offerid]);
    const obs = this.http.post<Offer>(
      url,
      JSON.stringify(offer),
      this.httpOptions
    );
    return obs;
  }
}
