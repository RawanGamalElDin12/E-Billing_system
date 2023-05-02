import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { customer } from '../classes/customer';
import { ElectricityBill } from '../classes/bill';
import { ServiceProvider } from '../classes/ServiceProvider';
import { Offer } from '../classes/Offer';
import { Admin } from '../classes/Admin';
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
 
  createSPWithId(sp: ServiceProvider , id: string): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders/${id}.json`;
    return this.http.put<ServiceProvider>(url, JSON.stringify(sp), this.httpOptions);
  }
  getSPs(): Observable<ServiceProvider[]> {
    const url = `${this.baseurl2}/ServiceProviders.json`;
    return this.http.get<ServiceProvider[]>(url);
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
    return this.http.get<ElectricityBill>(url);
  }
  updateSP(sp: ServiceProvider): Observable<ServiceProvider> {
    const url = `${this.baseurl2}/ServiceProviders/${sp.id}.json`;
    console.log(sp);
    return this.http.put<ServiceProvider>(url, JSON.stringify(sp), this.httpOptions);
  }
  updateSPOffer(sp: ServiceProvider,offer:Offer): Observable<Offer> {
    const url = `${this.baseurl2}/ServiceProviders/${sp.id}/offers/${offer.offerid}.json`;
    console.log(sp);
    console.log(offer.offerid);
    console.log(sp.offers[offer.offerid]);
    return this.http.put<Offer>(url, JSON.stringify(offer), this.httpOptions);
  }


}
