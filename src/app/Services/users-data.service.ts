import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { customer } from '../classes/customer';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private users: customer[] = [];
  constructor() {}

  getUsers() {
    return this.users;
  }

  setUsers(users: customer[]) {
    this.users = users;
  }
}
