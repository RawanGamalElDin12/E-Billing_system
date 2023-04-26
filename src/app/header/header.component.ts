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
  }
}
