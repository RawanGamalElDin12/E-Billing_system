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
import { PaymentComponent } from './payment/payment.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AdminServiceProvidersComponent } from './admin-service-providers/admin-service-providers.component';
import { AdminViewSpComponent } from './admin-view-sp/admin-view-sp.component';
import { AdminAddSpComponent } from './admin-add-sp/admin-add-sp.component';
import { AdminChangeOfferComponent } from './admin-change-offer/admin-change-offer.component';
import { AdminAddOfferComponent } from './admin-add-offer/admin-add-offer.component';
import { TelephoneComponent } from './telephone/telephone.component';
import { PrePaidAccountComponent } from './pre-paid-account/pre-paid-account.component';
import { PostPaidAccountComponent } from './post-paid-account/post-paid-account.component';
import { ServiceProvidersComponent } from './service-providers/service-providers.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { ServiceProviderLoginComponent } from './login/service-provider-login/service-provider-login.component';
import { SpSidenavComponent } from './sp-sidenav/sp-sidenav.component';
import { SpHomeComponent } from './sp-home/sp-home.component';
import { SpAddOfferComponent } from './sp-add-offer/sp-add-offer.component';
import { SpChangeOfferComponent } from './sp-change-offer/sp-change-offer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { ServiceprovidersPostPaidComponent } from './serviceproviders-post-paid/serviceproviders-post-paid.component';

const routes: Routes = [
  {
    path: 'main',
    component: SidenavComponent,
    children: [
      {
        path: 'electricity',
        component: ElectricityComponent,
      },
      { path: 'water', component: WaterComponent },
      { path: 'home', component: HomepageComponent },
      { path: 'receipt/:id/:userId/:service', component: ReceiptComponent },
      { path: 'payment', component: PaymentComponent },

      {
        path: 'telephone',
        component: TelephoneComponent,
      },

      { path: 'serviceproviders', component: ServiceProvidersComponent },

      {path:'sp-postpaid', component:ServiceprovidersPostPaidComponent},
      { path: 'pre-paid-account/:id', component: PrePaidAccountComponent },
      { path: 'post-paid-account/:id', component: PostPaidAccountComponent },
      {path:'subscribe/:SpID/:offerID', component:SubscribeComponent}

    ],
  },
  {
    path: 'AdminMain',
    component: SidenavAdminComponent,
    children: [
      { path: 'Dashboard', component: AdminDashboardComponent },
      { path: 'ViewUsers', component: ViewAllUsersComponent },
      { path: 'AddUser', component: AdminAddUserComponent },
      { path: 'view-user/:id', component: ViewAndUpdateUserComponent },
      { path: 'serviceproviders', component: AdminServiceProvidersComponent },
      { path: 'view-sp/:id1', component: AdminViewSpComponent },
      { path: 'addSP', component: AdminAddSpComponent },
      {
        path: 'view-sp/:id1/view-offer/:id',
        component: AdminChangeOfferComponent,
      },
      { path: 'view-sp/:id1/add-offer', component: AdminAddOfferComponent },
    ],
  },
  { path: 'sp-login', component: ServiceProviderLoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'welcome', component: WelcomePageComponent },
  {
    path: 'SpMain',
    component: SpSidenavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'Home',
        component: SpHomeComponent,
      },
      { path: 'add-offer', component: SpAddOfferComponent },
      {path:'view-offer/:id', component:SpChangeOfferComponent}
    ],
  },
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
    AdminAddUserComponent,
    PaymentComponent,
    AdminServiceProvidersComponent,
    AdminViewSpComponent,
    AdminAddSpComponent,
    AdminChangeOfferComponent,
    AdminAddOfferComponent,
    TelephoneComponent,
    PrePaidAccountComponent,
    PostPaidAccountComponent,
    ServiceProvidersComponent,
    WelcomePageComponent,
    ServiceProviderLoginComponent,
    SpSidenavComponent,
    SpHomeComponent,
    SpAddOfferComponent,
    SpChangeOfferComponent,
    SubscribeComponent,
    ServiceprovidersPostPaidComponent,
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
