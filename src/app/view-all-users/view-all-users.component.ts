import { Component ,OnInit } from '@angular/core';
import { User } from '../classes/user';
import { HttpServiceService } from '../Services/http-service.service';
import { UsersDataService } from '../Services/users-data.service';
import { JsonPipe } from '@angular/common';
import { customer } from '../classes/customer';
import { Router ,NavigationExtras } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { PopupDialogComponent } from '../popup-dialog/popup-dialog.component';
@Component({
  selector: 'app-view-all-users',
  templateUrl: './view-all-users.component.html',
  styleUrls: ['./view-all-users.component.css']
})
export class ViewAllUsersComponent implements OnInit {

 
  users: customer[] =[];

  searchTerm: string = '';
  
  constructor(private http: HttpServiceService, private usersData:UsersDataService,private router: Router,private dialog: MatDialog){}
  ngOnInit() {
    
    this.users = Object.values( this.usersData.getUsers()); 

    
  }

  openDialog() {
    const dialogRef = this.dialog.open(PopupDialogComponent, {
      width: '800px'
    });
  }

  
  viewUser(user: customer) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    this.router.navigate(['AdminMain/view-user', user.nationalid],navigationExtras);
  }
  
  get filteredUsers() {
    if (this.users ) {
      return this.users.filter(user => Object.values(user).some(value => String(value).toLowerCase().includes(this.searchTerm.toLowerCase())));
    } else {
      return [];
    }
  
  }
  
}
