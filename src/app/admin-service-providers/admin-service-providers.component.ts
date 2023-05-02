import { Component } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';
import { UsersDataService } from '../Services/users-data.service';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ServiceProvider } from '../classes/ServiceProvider';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
@Component({
  selector: 'app-admin-service-providers',
  templateUrl: './admin-service-providers.component.html',
  styleUrls: ['./admin-service-providers.component.css']
})
export class AdminServiceProvidersComponent {
  SPs: ServiceProvider[] =[];

  searchTerm: string = '';
  
  constructor(private http: HttpServiceService, private SPsData:ServiceProvidersDataService,private router: Router,private dialog: MatDialog){}
  ngOnInit() {
    
    this.SPs = Object.values( this.SPsData.getSPs()); 
   
    this.SPsData.SPsChanged.subscribe(
      (sps) => {
        this.SPs = sps;
      }
    );

    
    
  }


  
  
  get filteredSPS() {
    if (this.SPs) {
      return this.SPs.filter(sp => {
        if (sp !== null) {
          return Object.values(sp).some(value => String(value).toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
        return false;
      });
    } else {
      return [];
    }
  }
  viewSP(user: ServiceProvider) {
    console.log("helloooooooooooooooooooooooo");
    const navigationExtras: NavigationExtras = {
      state: {
        user: user
      }
    };
    console.log("djbcjxbf");
    this.router.navigate(['AdminMain/view-sp', user.id],navigationExtras);
  }
  open()
  {
    this.router.navigate(['AdminMain/addSP']);

  }
  }

    
  


