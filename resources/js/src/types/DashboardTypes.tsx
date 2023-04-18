export interface Plugin{
    id:number;
    name: string;
    description: string;
    price: number;
    image: string;
    is_new: boolean,
    is_acquired: boolean,
    expires_on: string;
    rates: number;
    reviews: number;
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
