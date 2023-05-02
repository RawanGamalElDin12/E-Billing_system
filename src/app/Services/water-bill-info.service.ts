import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WaterBill } from '../classes/bill';

@Injectable({
  providedIn: 'root',
})
export class WaterBillInfoService {
  private baseUrl = 'https://billing-sys2-default-rtdb.firebaseio.com/';
  allBills: WaterBill[] = [];
  constructor(private http: HttpClient) {}

  getWaterBillsForUser(userId: string): Observable<WaterBill[]> {
    const url = `${this.baseUrl}users/${userId}/waterBills.json`;
    return this.http.get<Record<string, WaterBill>>(url).pipe(
      map((res: Record<string, WaterBill>) => {
        const bills = [];
        for (const key in res) {
          bills.push({ ...res[key], id: key });
        }
        return bills;
      })
    );
  }
}
