import { Component } from '@angular/core';
import { BillingServiceService } from 'src/app/Services/billing-service.service';
@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent {

  constructor(private billingservice: BillingServiceService) {}

  ngOnInit() {
  const waterUnitPrice  = this.billingservice.getWaterPrice();
  console.log(waterUnitPrice);
  
  
  }

}
