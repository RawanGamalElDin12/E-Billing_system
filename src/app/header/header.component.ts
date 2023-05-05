import { Component } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';
import { UserdataService } from '../Services/userdata.service';
import {faChevronDown, faGear, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons'
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent {

  headerType: String = 'login';
  name: string = 'Ahmed';
  faChevronDown = faChevronDown;
  faUserCircle = faUserCircle;
  faGear = faGear; 
  faArrowRightFromBracket = faArrowRightFromBracket;
  
  constructor(
    private httpService: HttpServiceService,
    private userDataService: UserdataService,
    private router: Router,
    private auth: AuthService,) {}

    ngOnInit(){
      this. router.events. subscribe ((val:any)=>{
        console.warn(val.url);
        if (val.url.includes('main')){
          this.headerType = 'main'
          this.name = this.userDataService.user.firstname;
        }
        else{
          this.headerType = 'login'
          this.name = 'Ahmed';
        }
      })
    }
}
