import { AuthService } from './Services/authservice.service';
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
import { CommonModule, registerLocaleData } from '@angular/common';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { UsersDataService } from './Services/users-data.service';
import { ElectricityComponent } from './electricity/electricity.component';
import { User } from './classes/user'; 
import { RegisterComponent } from './register/register.component';
import { WaterComponent } from './Water/water/water.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ViewAllUsersComponent } from './view-all-users/view-all-users.component';
import { AdminAddUserComponent } from './admin-add-user/admin-add-user.component';
import { ViewAndUpdateUserComponent } from './view-and-update-user/view-and-update-user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PopupDialogComponent } from './popup-dialog/popup-dialog.component';

const routes: Routes = [
  {
    path: 'main',
    component: SidenavComponent,
    children: [
      { path: 'electricity', component: ElectricityComponent },
      { path: 'water', component: WaterComponent },
      { path: 'home', component: HomepageComponent },
    ],
  },
  {
    path: 'AdminMain',
    component: SidenavAdminComponent,
    children: [
      { path: 'Dashboard', component: AdminDashboardComponent },
      { path: 'ViewUsers', component: ViewAllUsersComponent },
      { path: 'AddUser', component: AdminAddUserComponent },
      {path:'view-user/:id', component:ViewAndUpdateUserComponent}
    ],
  },
  { path: 'register', component: RegisterComponent },
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
    RegisterComponent,
    WaterComponent,
    SidenavAdminComponent,
    AdminDashboardComponent,
    ViewAllUsersComponent,
    ViewAndUpdateUserComponent,
    PopupDialogComponent,
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
    MatDialogModule,
    MatTableModule,
    MatCheckboxModule,

  ],
  providers: [UsersDataService, HttpServiceService, AuthService],
  exports: [MatSidenavModule, MatIconModule, MatButtonModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
