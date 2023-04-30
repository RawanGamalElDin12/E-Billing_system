import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { customer } from '../classes/customer';
@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private users: customer[] = [];
  constructor() {}
  private userrr: any;

  getUsers() {
    console.log(JSON.stringify(this.users));
    return this.users;
  }

  setUsers(users: customer[]) {
    this.users = users;
  }
  updateUserByNationalId(nationalid: number, updatedUser: customer) {
    const index = nationalid;
    // update the user with the new data

    this.users[index].firstname = updatedUser.firstname;
    this.users[index].lastname = updatedUser.lastname;
    this.users[index].email = updatedUser.email;
    this.users[index].DOB = updatedUser.DOB;
    this.users[index].address = updatedUser.address;
  }
}
