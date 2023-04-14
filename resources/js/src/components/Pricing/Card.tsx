import React from 'react';
import Card from '../Card';
import Button from '../Form/Button';
import Badge from '../Badge';
import List from './List';

type FeatureItem = {
  name: string;
  type: string;
};

type Feature = {
  name: string;
  items: FeatureItem[];
};

type PricingCardProps = {
  item: {
    name: string;
    description: string;
    regular_price: number;
    discount: number;
    price: number;
    isMostPopular: boolean;
    renew_price: number;
    features: Feature[];
  };
};

const PricingCard: React.FC<PricingCardProps> = ({ item }) => {
  return (
    <Card border={item.isMostPopular ? 'border-2 border-secondary' : ''}>

            <div className="py-10">
                { item.isMostPopular && (
                    <div className="absolute -mt-20 left-1/2 transform -translate-x-1/2">
                        <Badge size="text-sm">Most Popular</Badge>
                    </div>
                )}
                <div>
                    <h6 className="text-xl pb-2 font-bold text-center">{ item.name }</h6>
                    <p className="text-sm text-center">{ item.description }</p>
                </div>
                <div className="pt-6 pb-6 text-center">
                    <div className="pb-4 flex gap-3 items-center justify-center font-bold">
                        <span>${ item.regular_price }</span>
                        <span className="bg-orange-100 py-1 px-2 rounded-xl font-bold text-secondary uppercase text-sm">SAVE { item.discount }%</span>
                    </div>
                    <h5 className="text-5xl text-center font-bold">
                        <span className="text-sm">$</span>{ item.price }<span className="text-sm">/month</span>
                    </h5>
                    { item.isMostPopular && (
                        <p className="text-secondary font-bold mt-4 text-md">+2 months FREE</p>
                    )}
                </div>
                <div className="pt-6">
                    <div className="flex justify-center">
                        <Button
                            background={`${ item.isMostPopular ? 'bg-secondary hover:bg-orange-600' : 'bg-primary hover:bg-blue-800' }`}
                            color="text-white"
                            padding="py-4 px-24"
                        >
                            Get Started Now
                        </Button>
                    </div>
                    <p className="text-slate-600 pt-4 text-center text-xs">${ item.renew_price }/month when you renew</p>
                </div>
                { item.features.map((feature,index) => (
                    <div className="pt-6" key={index}>
                        <h6 className="font-bold pb-6 text-sm">{ feature.name }</h6>

                        <ul className="flex flex-col gap-3 text-sm">
                            { feature.items.map((feature_item,index) => (
                                <List item={ feature_item } key={index}/>
                            ))}
                        </ul>

                    </div>
                ))}
            </div>
        </Card>
  );
};

export default PricingCard;
