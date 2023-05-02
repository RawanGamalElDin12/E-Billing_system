import { TelephoneBills, WaterBill } from './bill';
import { ElectricityBill } from './bill';
import { telephoneAccount } from './telephoneAccount';
export class customer {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  nationalid: string;
  address: string;
  DOB: string;
  waterBills: WaterBill[];
  electricityBills: ElectricityBill[];
  telephoneAccounts: telephoneAccount[];
  telephoneBills: TelephoneBills[];

  constructor(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    nationalid: string,
    address: string,
    DOB: string,
    waterbills: WaterBill[],
    electricitybills: ElectricityBill[],
    telephoneAccounts: telephoneAccount[],
    telephoneBills: TelephoneBills[]
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
