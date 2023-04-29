import { Injectable } from '@angular/core';
import { User } from '../classes/user';
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
 
     private users : User[] = [];
  constructor() { }
 

  getUsers()
  {
    return this.users;
  }

  setUsers(users: User[])
  {
    this.users = users;
  }

}
