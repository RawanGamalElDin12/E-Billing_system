export class telephoneAccount 
{
    offerid: number; 
    serviceProvider: string;
    telephoneNo: string;
    type: string;

    constructor(
        offerid: number,
        serviceProvider: string,
        telephoneNo: string,
        type: string
    )
    {
        this.offerid = offerid;
        this.serviceProvider = serviceProvider;
        this.telephoneNo = telephoneNo;
        this.type = type;
    }
}