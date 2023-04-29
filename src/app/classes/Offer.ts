export class Offer
{
    offerid :number;
    price : number;
    category: string;
    minutes: number;
    constructor(offerid: number, price:number,category:string, minutes:number)
    {
        this.category = category;
        this.offerid = offerid;
        this.minutes = minutes;
        this.price = price;
    }
}