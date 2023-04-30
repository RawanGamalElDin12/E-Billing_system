import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { waterBill } from '../classes/bill';

@Injectable({
  providedIn: 'root'
})
export class WaterBillInfoService {

  private baseUrl = 'https://billing-sys2-default-rtdb.firebaseio.com/';
  allBills: waterBill[] = [];
  constructor(private http: HttpClient) { }

  getWaterBillsForUser(userId: string): Observable<waterBill[]> {
    const url = `${this.baseUrl}users/${userId}/waterBills.json`;
    return this.http.get<Record<string, waterBill>>(url)
      .pipe(
        map((res: Record<string, waterBill>) => {
          const bills = [];
          for (const key in res) {
            bills.push({ ...res[key], id: key });
          }
          return bills;
        })
      );
  }  

  }



