import { Component } from '@angular/core';
import {faHouse, faUsers, faUserPlus, faRightFromBracket, faSimCard} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.css']
})
export class SidenavAdminComponent {
  faHouse = faHouse;
  faUsers = faUsers;
  faUserPlus = faUserPlus;
  faSimCard = faSimCard;
  faRightFromBracket = faRightFromBracket;
  

}
