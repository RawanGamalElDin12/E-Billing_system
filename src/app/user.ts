export class User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  constructor(
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    nationalId: string
  ) {
    this.email = email;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationalId = nationalId;
  }
}
