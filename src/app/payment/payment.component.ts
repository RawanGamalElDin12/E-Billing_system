import { Component } from '@angular/core';


@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  selectedOption: string = '';
  cash: boolean = false;
  initialize: boolean = true;
  credit: boolean = false;
  bill: { userId: number; Service: string; date: string; amount: number } = {
    userId: 222222222,
    Service: 'water-bill',
    date: '10-4-2023',
    amount: 60,
  };

  onClick() {
    if (this.selectedOption === 'cash') {
      this.initialize = false;
      this.cash = true;
    } else if (this.selectedOption === 'credit') {
      this.initialize = false;
      this.credit = true;
    }
  }
}