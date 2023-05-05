import { Component, OnInit } from '@angular/core';
import {faHouse, faBoltLightning, faDroplet, faPhone, faSimCard} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
 
  currentTap: String = 'main';

  faHouse = faHouse;
  faBoltLightning  = faBoltLightning;
  faDroplet = faDroplet;
  faPhone = faPhone;
  faSimCard = faSimCard;

  constructor( private router: Router,) { }

  ngOnInit(): void {

    this. router.events. subscribe ((val:any)=>{
      console.warn(val.url);
      if (val.url.includes('telephone') || val.url.includes('serviceproviders')){
        this.currentTap = 'telephone';
      }
      else{
        this.currentTap = 'main';
      }

    })
  }

}