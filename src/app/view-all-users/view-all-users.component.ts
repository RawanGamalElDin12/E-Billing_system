import { Component ,OnInit } from '@angular/core';
import { User } from '../classes/user';
import { HttpServiceService } from '../Services/http-service.service';
import { UsersDataService } from '../Services/users-data.service';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

 
  users: User[] =[];

  searchTerm: string = '';
  
  constructor(private http: HttpServiceService, private usersData:UsersDataService){}
  ngOnInit() {
    this.users = Object.values( this.usersData.getUsers()); 
  }
  
  get filteredUsers() {
    if (this.users ) {
      return this.users.filter(user => Object.values(user).some(value => String(value).toLowerCase().includes(this.searchTerm.toLowerCase())));
    } else {
      return [];
    }
  
  }
  
}
