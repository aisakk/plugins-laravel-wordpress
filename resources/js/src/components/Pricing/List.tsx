import React from 'react';
import Icon from '../Icon';

type PricingListProps = {
  item: {
    name: string;
    type: string;
  };
};

const PricingList: React.FC<PricingListProps> = ({ item }) => {
  return (
    <li className="flex gap-2">
            { item.type === 'negative' && (
                <span className="text-red-500">
                    <Icon name="close" size={5} />
                </span>
            )}

            { item.type === 'medium' && (
                <span className="text-orange-400">
                    <Icon name="check" size={5} />
                </span>
            )}

            { item.type === 'positive' && (
                <span className="text-green-500">
                    <Icon name="check" size={5} />
                </span>
            )}

            <span>{ item.name }</span>
        </li>
  );
};

export default PricingList;
