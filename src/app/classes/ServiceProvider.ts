import { Offer } from "./Offer";
export class ServiceProvider
{
    name:string;
    offers: Offer[];
    tarriff: number ;
    constructor(name:string, offers: Offer[],tarriff:number)
    {
        this.name = name;
        this.offers = offers;
        this.tarriff = tarriff;
    }
}