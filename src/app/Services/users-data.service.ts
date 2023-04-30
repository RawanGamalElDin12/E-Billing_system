import { Injectable , EventEmitter} from '@angular/core';
import { User } from '../classes/user';
import { customer } from '../classes/customer';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  private users: customer[] = [];
  constructor() {}
  usersChanged = new EventEmitter<customer[]>();


  getUsers() {
    console.log(JSON.stringify(this.users));
    return this.users;
  }

  setUsers(users: customer[]) {
    this.users = users;
    console.log(this.users);
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
  deleteUserByNationalId(nationalId: string): void {
    if (this.users.hasOwnProperty(nationalId)) {
      delete this.users[parseInt(nationalId)];
      console.log(this.users);
      this.usersChanged.emit(Object.values(this.users));

    }
  }
  
}

