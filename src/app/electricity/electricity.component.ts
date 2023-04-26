import { Component } from '@angular/core';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent {
  public currentMonth: string;
  public currentYear: number;

  constructor() {
    const date = new Date();
    this.currentMonth = date.toLocaleString('default', { month: 'long' });
    this.currentYear = date.getFullYear();
  }

}
