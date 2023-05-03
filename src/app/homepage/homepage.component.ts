import { Component } from '@angular/core';
import { UsersDataService } from '../Services/users-data.service';
import { UserdataService } from '../Services/userdata.service';
import { CompletedBills } from '../classes/CompletedBills';
import { User } from '../classes/user';
import { DueBills } from '../classes/DueBills';
import { HttpServiceService } from '../Services/http-service.service';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { PayServiceService } from '../Services/pay-service.service';
import { Router } from '@angular/router';
import { CheckLateFeesService } from '../Services/check-late-fees.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent {
  Bills: any[] = []; // an array to store all bills for the user
  name: string = ''; // a string to store the user's first name
  filterDueDate = ''; // a string to store the selected due date filter
  filterStatus = ''; // a string to store the selected status filter
  filterService = ''; // a string to store the selected service filter
  Dates: string[] = []; // an array to store all unique dates for the bills
  CompletedBills: any[] = []; // an array to store all completed bills for the user
  user12: any; // a variable to store the user data
  user1: any; // a variable to store the user data
  incomeControl = new FormControl(); // a form control for the income filter input
  checkLateFees:any; // a variable to store the CheckLateFeesService

  filteredValues: Observable<string[]> | undefined; // an observable to store the filtered values for the income filter

  constructor(
    private userDataService: UserdataService, // a service to get the user data
    private httpservice: HttpServiceService, // an HTTP service to make requests to the backend
    private payServ: PayServiceService, // a service to store the payment information for a bill
    private router: Router, // a service to navigate to different routes
    private checkLate: CheckLateFeesService // a service to check the late fees for bills
  ) {
    this.user1 = this.userDataService.user; // get the user data from the UserDataService
    this.name = this.user1.firstname; // set the user's first name
    this.checkLateFees = this.checkLate; // set the CheckLateFeesService
  }

  ngOnInit() {
    // adds both electricty bills and water bills in an array togather
    for (const bill of this.user1.waterBills) {
      if (bill.amount !== 0 && bill !== null && bill.date != '') {
        // push all bills attributes and add another one service Type
        this.Bills.push({ ...bill, service: 'Water' });
        // push dates of bills in the array 
        if (!this.Dates.includes(bill.date)) {
          this.Dates.push(bill.date);
        }
      }
    }
    for (const eB of this.user1.electricityBills) {
      if (eB.amount !== 0 && eB !== null) {
        this.Bills.push({ ...eB, service: 'Electricity' });
        if (!this.Dates.includes(eB.date)) {
          this.Dates.push(eB.date);
        }
      }
    }
    for (const tA of this.user1.telephoneBills) {
      if (tA.amount !== 0 && tA !== null) {
        this.Bills.push({ ...tA, service: 'Telephone' });
        if (!this.Dates.includes(tA.date)) {
          this.Dates.push(tA.date);
        }
      }
    }

    console.log(this.Bills); // log the bills array to the console
    this.filteredValues = this.incomeControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value)) // map the filtered values using the filter method
    );
  }

  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Bills.filter((income) =>
      income.toLowerCase().includes(filterValue)
    ); // filter the bills based on the income filter value
  }

  get filteredBills() {
    return this.Bills.filter((bill) => {
      if (this.filterDueDate && bill.date !== this.filterDueDate) {
        return false; // filter out bills with different due date
      }
      if (this.filterService && bill.service !== this.filterService) {
        return false; // filter out bills with different service
      }
      if (this.filterStatus == 'Paid' && bill.status !== 'Paid') {
        return false; // filter out bills that are not completed
      }
      if (this.filterStatus == 'Due' && bill.status !== 'Due') {
        return false; // filter out bills that are completed
      }
      return true; // keep bills that pass all filters
    });
  }

  payBill(index: number): void {
    // Pay due bill at the given index
    this.payServ.billid = this.Bills[index].billid; // set the bill ID for payment
    this.payServ.serviceType = this.Bills[index].service; // set the service type for payment
    this.payServ.tarriff = this.Bills[index].tarriff; // set the tarriff for payment
  }

  viewReceipt(index: number) {
    var id = this.user1.nationalid; // get the user's national ID
    console.log(id); // log the national ID to the console

    this.router.navigate(['main/receipt', this.Bills[index].billid, id, this.Bills[index].service]); // navigate to the receipt page with the bill ID, national ID, and service type
  }
}