import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PayServiceService {

  billid :number=0;
  serviceType:string='';
  constructor() { }
}
