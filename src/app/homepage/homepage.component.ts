import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  userId = 1;
  bills: any[]=[];
  recentPayment: any[] = [];

  constructor( private userService: UsersDataService) {  }

  ngOnInit() {
    this.bills = this.userService.getUserBills(this.userId);
    this.recentPayment = this.userService.getRecentPayment(this.userId);
  }

}
