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
  Bills: any[] = [];
  name: string = '';
  filterDueDate = '';
  filterStatus = '';
  filterService = '';
  Dates: string[] = [];
  CompletedBills: any[] = [];
  user12: any;
  user1: any;
  incomeControl = new FormControl();
  checkLateFees:any;
  filteredValues: Observable<string[]> | undefined;

  constructor(

    private userDataService: UserdataService,
    private httpservice: HttpServiceService,
    private payServ: PayServiceService,
    private router: Router,
    private checkLate: CheckLateFeesService) {
    this.user1 = this.userDataService.user;
    this.name = this.user1.firstname;
    this.checkLateFees = this.checkLate;

  }

  ngOnInit() {
    // adds both electricty bills and water bills in an array togather
    for (const bill of this.user1.waterBills) {
      if (bill.amount !== 0 && bill !== null && bill.date != '') {


        //push all bills attributes and add another one service Type
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

        if (!this.Dates.includes(tA.date)) { this.Dates.push(tA.date); }
      }
    }

    console.log(this.Bills);
    this.filteredValues = this.incomeControl.valueChanges.pipe(
      startWith(''),
      map((value) => this.filter(value))
    );


  }


  filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.Bills.filter((income) =>
      income.toLowerCase().includes(filterValue)
    );
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
    this.payServ.billid = this.Bills[index].billid;
    this.payServ.serviceType = this.Bills[index].service;
    this.payServ.tarriff = this.Bills[index].tarriff;

  }
  viewReceipt(index: number) {

    var id = this.user1.nationalid;
    console.log(id);

    this.router.navigate(['main/receipt', this.Bills[index].billid, id, this.Bills[index].service]);
  }



}