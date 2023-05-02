import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckLateFeesService {

  constructor() { }
  checkBillDueDate(billDate: string): boolean {
    
    const today = new Date();
    console.log(today);
    console.log(billDate);
    if (new Date(billDate) > today) {
      return true; // bill date is later than today
    } else {
      return false; // bill date is earlier than or equal to today
    }
  }
}
