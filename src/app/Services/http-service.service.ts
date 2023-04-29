import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import {
  HttpClient,
  HttpRequest,
  HttpEvent,
  HttpEventType,
  HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  users: User[]= [];
  baseurl = 'https://billing-system-d30dd-default-rtdb.firebaseio.com/';
  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }),
  };
  getUser(id: string): Observable<User> {
    const url = `${this.baseurl}/users/${id}.json`;
    return this.http.get<User>(url);
  }
  getAllUsers(): Observable<User[]> {
    const url = `${this.baseurl}/users.json`;
    return this.http.get<User[]>(url);
  }
  
  createUserWithId(user: User, id: string): Observable<User> {
    const url = `${this.baseurl}/users/${id}.json`;
    return this.http.put<User>(url, JSON.stringify(user), this.httpOptions);
  }
  getElectricityUnitCost(): Observable<number> {
    const url = `${this.baseurl}/UnitCosts/electricity.json`;
    return this.http.get<number>(url);
  }

  getWaterUnitCost(): Observable<number> {
    const url = `${this.baseurl}/UnitCosts/water.json`;
    return this.http.get<number>(url);
  }
  updateWaterUnitPrice(wUnit:number): Observable<number> {
    const url = `${this.baseurl}/UnitCosts/water.json`;
    return this.http.put<number>(url, JSON.stringify(wUnit), this.httpOptions);
  }
  updateElectricityUnitPrice(eUnit:number): Observable<number> {
    const url = `${this.baseurl}/UnitCosts/electricity.json`;
    return this.http.put<number>(url, JSON.stringify(eUnit), this.httpOptions);
  }


}
