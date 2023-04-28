export class CompletedBills {
  billid : string;
  amount: number;
  paymentDate: string;
  service: string;
  type:string;
  paymentType: string;
  constructor(
    billid: string,
    amount: number,
    paymentDate: string,
    service: string,
    type: string,
    paymentType: string
  ) {
    this.billid = billid;
    this.amount = amount;
    this.paymentDate = paymentDate;
    this.service = service;
    this.type = type;
    this.paymentType = paymentType;
  }

  
}
