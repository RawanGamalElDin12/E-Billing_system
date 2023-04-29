export class DueBills {
  billid : string ;
  amount: number;
  DueDate: string;
  service: string;
  type:string
  constructor(billid: string, amount: number, duedate: string, service: string, type: string) {
    this.billid = billid;
    this.amount = amount;
    this.DueDate = duedate;
    this.service = service;
    this.type = type;
  }

  
}
