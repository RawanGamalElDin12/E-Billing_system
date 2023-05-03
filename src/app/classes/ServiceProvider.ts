import { Offer } from "./Offer";
export class ServiceProvider
{
    name:string;
    offers: Offer[];
    tarriff: number ;
    id: number;
    password:string;
    constructor(name:string, offers: Offer[],tarriff:number,id:number, password:string)
    {
        this.password = password;
        this.name = name;
        this.offers = offers;
        this.tarriff = tarriff;
        this.id = id;
    }
}