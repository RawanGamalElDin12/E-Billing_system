import { Injectable } from '@angular/core';
import { User } from '../user';
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  private  _user: User = {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      nationalId: '',
    };
  
  constructor() { }
  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

}
