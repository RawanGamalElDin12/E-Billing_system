export class telephoneAccount {
  offerid: number;
  serviceProvider: string;
  telephoneNo: string;
  type: string;
  accountid: number;
  spid: number;
  constructor(
    accountid: number,
    offerid: number,
    serviceProvider: string,
    telephoneNo: string,
    type: string,
    spid: number
  ) {
    this.spid = spid;
    this.accountid = accountid;
    this.offerid = offerid;
    this.serviceProvider = serviceProvider;
    this.telephoneNo = telephoneNo;
    this.type = type;
  }
}
