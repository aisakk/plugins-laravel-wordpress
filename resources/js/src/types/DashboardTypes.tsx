export interface Plugin{
    name: string;
    description: string;
    price:string;
    image:string;
    isNew:boolean;
    isAcquired:boolean;
    expiresOn:boolean;
    rating:number;
    reviews:number;
}
export interface Domain{
    id:number;
    name:string;
    active:boolean;
}

export interface License {
    id:number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: Domain[];
    status: string;
}
