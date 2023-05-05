import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'uiproject';
  constructor(private router: Router) {}

  ngOnInit() {
    // Redirect to login page
    this.router.navigate(['/welcome']);
    // this.router.navigate(['/main/payment']);
  }
}
