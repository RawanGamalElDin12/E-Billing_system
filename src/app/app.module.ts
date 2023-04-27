import { AuthGuard } from './Services/auth-guard.service';
import { HttpServiceService } from './Services/http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { Routes, RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersDataService } from './Services/users-data.service';
import { ElectricityComponent } from './electricity/electricity.component';
import { User } from './user';

const routes: Routes = [
  {
    path: '',
    component: SidenavComponent,
    children: [
      { path: 'electricity', component: ElectricityComponent },
      { path: 'contact', component: HomepageComponent },
      { path: 'home', component: HomepageComponent },
    ],
  },

  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    ElectricityComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [UsersDataService, HttpServiceService],
  exports: [MatSidenavModule, MatIconModule, MatButtonModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
