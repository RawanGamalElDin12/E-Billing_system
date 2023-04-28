import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { UserdataService } from '../Services/userdata.service';
import { CompletedBills } from '../classes/CompletedBills';
import { User } from '../classes/user';
import { DueBills } from '../classes/DueBills';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {


  DueBills: any[]=[];
  
  CompletedBills: any[] = [];
  user1: any;
  user: User = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    nationalId: '',
    CompletedBills: [
      {billid: '',
      amount: 0,
      paymentDate: '',
      service: '',
      type: '',
      paymentType: ''
  }],
    DueBills: [
      
    {  amount: 0,
      DueDate: '',
      service: '',
      type: '',
      billid: ''}]
  }
  constructor( private userService: UsersDataService, private userDataService: UserdataService) {  }

  ngOnInit() {
    
    this.user = this.userDataService.user;
    
  
    this.user.DueBills.forEach((bill: DueBills) => {
      if(bill != null)
      {
        this.DueBills.push(bill);


      }
    });

    this.user.CompletedBills.forEach((bill: CompletedBills) => {
      if(bill != null)
      {
        this.CompletedBills.push(bill);


      }
    });


  
  }

}
