import { Component } from '@angular/core';

@Component({
  selector: 'app-water-component',
  templateUrl: './water-component.component.html',
  styleUrls: ['./water-component.component.css']
})
export class WaterComponent {
  value:number=0;
  disabled:boolean=false;
  calculatedValue:number=0;
 onClick():void{
this.disabled= true;
this.calculatedValue= 1.65* this.value;
 }

}
