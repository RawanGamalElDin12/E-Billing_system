import { Component } from '@angular/core';
import { UserdataService } from '../Services/userdata.service';
import { HttpServiceService } from '../Services/http-service.service';
import { telephoneAccount } from '../classes/telephoneAccount';
import { NavigationExtras, Router } from '@angular/router';
import { ServiceProvidersDataService } from '../Services/service-providers-data.service';
@Component({
  selector: 'app-telephone',
  templateUrl: './telephone.component.html',
  styleUrls: ['./telephone.component.css'],
})
export class TelephoneComponent {
  user: any;
  accounts: telephoneAccount[] = [];
  constructor(
    private userData: UserdataService,
    private http: HttpServiceService,
    private router: Router,
    private SPs: ServiceProvidersDataService
  ) {}
  ngOnInit() {
    this.user = this.userData.user;

    this.accounts = this.user.telephoneAccounts.filter(
      (account: telephoneAccount) => account.accountid !== 0
    );

    console.log(this.accounts);
    console.log(JSON.stringify(this.user.telephoneAccounts));
  }
  navigate() {
    console.log('here');
    this.router.navigate(['/main/serviceproviders']);
  }
  viewAccount(account: telephoneAccount) {
    const navigationExtras: NavigationExtras = {
      state: {
        user: this.user,
        account: account,
      },
    };

    if (account.type == 'pre-paid') {
      this.router.navigate(
        ['main/pre-paid-account', account.accountid],
        navigationExtras
      );
    } else {
      this.router.navigate(
        ['main/post-paid-account', account.accountid],
        navigationExtras
      );
    }
  }
}
