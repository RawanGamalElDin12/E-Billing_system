import { Injectable } from '@angular/core';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

 
   private _user: User = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      nationalId: '',
      CompletedBills: [
        {billid: '',
        amount: 0,
        paymentDate: new Date().toDateString(),
        service: '',
        type: '',
        paymentType: ''
    }],
      DueBills: [
        
      {  amount: 0,
        DueDate: new Date().toDateString(),
        service: '',
        type: '',
        billid: ''}]
    }
  constructor() { }
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

}
