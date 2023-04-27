import { Component } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';
import { User } from '../user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpService: HttpServiceService) {
    this.getUserData();
  }

  getUserData() {
    this.httpService.getUser('1').subscribe(
      (data: User) => {
        console.log(data);
        console.log(data.email);
      },
      (error) => {
        console.log(error);
      }
    );
    this.httpService.getUser('4').subscribe(
      (data: User) => {
        if(data != null)
        {
          console.log(data);
        console.log(data.email);
        }
        else{
          console.log("no user with this id");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
