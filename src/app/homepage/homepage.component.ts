import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { UserdataService } from '../Services/userdata.service';
import { CompletedBills } from '../classes/CompletedBills';
import { User } from '../classes/user';
import { DueBills } from '../classes/DueBills';
import { HttpServiceService } from '../Services/http-service.service';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  DueBills: any[] = [];

  CompletedBills: any[] = [];
  user12: any;
  user1:any;
  constructor(
    private userService: UsersDataService,
    private userDataService: UserdataService,
    private httpservice: HttpServiceService
  ) {}

  ngOnInit() {
    this.user1 = this.userDataService.user;

   // this.user1.DueBills.forEach((bill: DueBills) => {
    //  if (bill != null && bill.service != '') {
    //    this.DueBills.push(bill);
    //  }
    //});

    //this.user1.CompletedBills.forEach((bill: CompletedBills) => {
     // if (bill != null && bill.service != '') {
     //   this.CompletedBills.push(bill);
     // }
  //  });
  }
}
