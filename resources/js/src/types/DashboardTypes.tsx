export interface FeatureItem{
    name:string;
    type:string;
}
export interface Feature{
    name:string;
    items:FeatureItem[];
}
export interface Plan{
    name:string;
    description:string;
    price:number;
    regular_price:number;
    renew_price:number;
    discount:number;
    isMostPopular:boolean;
    features:Feature[];
}
export interface Rating{
    name:string;
    count:number;
    percentage:number;
}
export interface Tag{
    name:string;
}
export interface Details{
    version?:string;
    last_updated?:string;
    active_installations?:string;
    wordpress_version?:string;
    tested_up_to?:string;
    php_version?:string;
    languages?:string;
    oficial_website?:string
}
export interface PluginInfo{
    details:Details;
    tags:Tag[];
    rating:Rating[];
}
export interface Plugin{
    id:number;
    name: string;
    readme?:string;
    description: string;
    price: number;
    is_new: boolean,
    is_acquired: boolean,
    images: [];
    pricing: Plan[];
    plugin_info: PluginInfo;
}
export interface Domain{
    id:number;
    name:string;
    active:boolean | number;
}

export interface License {
    id:number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: Domain[];
    status: string;
    type_license: number;
}
export interface LicenseIdProps {
    licenseId?: number;
}

export interface LicenseMeta{
    id:number;
    meta_key:string;
    meta_value:string;
    license_id:number;
    created_at:string;
    updated_at:string;

}
