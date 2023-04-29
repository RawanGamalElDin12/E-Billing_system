
import { CompletedBills } from "./CompletedBills";
import { DueBills } from "./DueBills";
export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  DueBills: DueBills[] =[];
  CompletedBills: CompletedBills[];
  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nationalId: string,
    DueBills: DueBills[] ,
    CompletedBills: CompletedBills[] 
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalId = nationalId;
    this.DueBills = DueBills;
    this.CompletedBills = CompletedBills;
  }
}
