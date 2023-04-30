import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { customer } from '../classes/customer';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

 
   private _user: any;
  constructor() { }
  get user(): customer
   {
    return this._user;
  }

  set user(value: customer) {
    this._user = value;
  }

}
