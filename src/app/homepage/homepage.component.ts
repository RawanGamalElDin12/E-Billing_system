import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { UserdataService } from '../Services/userdata.service';
import { User } from '../classes/user';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  userId = 1;
  bills: any[]=[];
  recentPayment: any[] = [];

  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
    completedBills: [
      {billid: '',
      amount: 0,
      PaymentDate: new Date().toDateString(),
      service: '',
      type: '',
      paymentType: ''
  }],
    dueBills: [
      
    {  amount: 0,
      duedate: new Date().toDateString(),
      service: '',
      type: '',
      billid: ''}]
  }
  constructor( private userService: UsersDataService, private userDataService: UserdataService) {  }

  ngOnInit() {
    this.bills = this.userService.getUserBills(this.userId);
    this.recentPayment = this.userService.getRecentPayment(this.userId);
    this.user = this.userDataService.user;
    console.log(this.user.nationalId);
  }

}
