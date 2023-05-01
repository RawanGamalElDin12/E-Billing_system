import { telephoneBills, waterBill } from './bill';
import { electricityBill } from './bill';
import { telephoneAccount } from './telephoneAccount';
export class customer {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  nationalid: string;
  address: string;
  DOB: string;
  waterBills: waterBill[];
  electricityBills: electricityBill[];
  telephoneAccounts: telephoneAccount[];
  telephoneBills: telephoneBills[];

  constructor(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    nationalid: string,
    address: string,
    DOB: string,
    waterbills: waterBill[],
    electricitybills: electricityBill[],
    telephoneAccounts: telephoneAccount[],
    telephoneBills: telephoneBills[]
  ) {
    this.email = email;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
    this.nationalid = nationalid;
    this.address = address;
    this.DOB = DOB;
    this.waterBills = waterbills;
    this.electricityBills = electricitybills;
    this.telephoneAccounts = telephoneAccounts;
    this.telephoneBills = telephoneBills;
  }
}
