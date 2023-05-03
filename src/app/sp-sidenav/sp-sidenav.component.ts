import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../Services/authservice.service';

@Component({
  selector: 'app-sp-sidenav',
  templateUrl: './sp-sidenav.component.html',
  styleUrls: ['./sp-sidenav.component.css'],
})
export class SpSidenavComponent {
  constructor(private router: Router, private authService: AuthService) {}

  onLogout() {
    this.router.navigate(['/welcome']);
    console.log(this.authService.isLoggedIn);

    this.authService.isLoggedIn = false;
    console.log(this.authService.isLoggedIn);
  }
}
