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
import { HomepageComponent } from './homepage/homepage.component';
import { UsersDataService } from './Services/users-data.service';
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: HomepageComponent },
  { path: 'contact', component: HomepageComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatExpansionModule,
    MatListModule,
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersDataService],
  exports:
  [
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    RouterModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
