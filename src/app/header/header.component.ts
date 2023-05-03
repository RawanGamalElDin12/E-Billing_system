import { Component } from '@angular/core';
import { HttpServiceService } from '../Services/http-service.service';
import { User } from '../classes/user';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // users: User[] = [];
  // // user1: User = new User("rrrr@gmail.com",3,"rania",123);
  constructor(
    private httpService: HttpServiceService,
    private router: Router,
    private auth: AuthService
  ) {}

  // ngOnInit() {
  //   this.getUserData();
  //   this.httpService.getAllUsers().subscribe((users) => {
  //     this.users = users;
  //     console.log(users);
  //     for (let user of this.users) {
  //       if (user !== null) {
  //         console.log(user.email);
  //         console.log(user.password);
  //       }
  //     }
  //     this.createUser();
  //   });
  //   // this.httpService.createUserWithId(this.user1,3);
  // }
  // createUser() {
  //   // this.httpService.createUserWithId(this.user1, 3).subscribe(
  //   //   (result) => {
  //   //     console.log(`User created successfully: ${result}`);
  //   //   },
  //   //   (error) => {
  //   //     console.log(`Error creating user: ${error}`);
  //   //   }
  //   // );
  // }
  // getUserData() {
  //   this.httpService.getUser(1).subscribe(
  //     (data: User) => {
  //       console.log(data);
  //       console.log(data.email);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  //   this.httpService.getUser(1).subscribe(
  //     (data: User) => {
  //       if (data != null) {
  //         console.log(data);
  //         console.log(data.email);
  //       } else {
  //         console.log('no user with this id');
  //       }
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );
  // }
}
