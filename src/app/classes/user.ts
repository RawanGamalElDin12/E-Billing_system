
import { CompletedBills } from "./CompletedBills";
import { DueBills } from "./DueBills";
export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  dueBills: DueBills[] =[];
  completedBills: CompletedBills[];
  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nationalId: string,
    dueBills: DueBills[] ,
    completedBills: CompletedBills[] 
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalId = nationalId;
    this.dueBills = dueBills;
    this.completedBills = completedBills;
  }
}
