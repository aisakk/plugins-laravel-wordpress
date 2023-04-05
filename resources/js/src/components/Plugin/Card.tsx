import React from 'react';
import Button from '../Form/Button';

interface Plugin {
    name: string;
    description: string;
    price: string;
    image: string;
    isNew: boolean;
    isAcquired: boolean;
    expiresOn?: string;
    rating: number;
    reviews: number;
}

interface PluginCardProps {
    item: Plugin;
}

const PluginCard: React.FC<PluginCardProps> = ({ item }) => {
    return (
        <div>
            <div className="mb-3 relative">
                <img src={ item.image } className="rounded-xl h-56 object-cover" alt="" />
                { item.isNew && (
                    <span className="top-3 left-3 absolute bg-green-500 text-white font-bold rounded-xl py-1 px-2 uppercase text-xs">New</span>
                )}
            </div>
            <div className="p-3">

                <div className="flex justify-between mb-2">
                    <div className="w-2/3">
                        <h6 className="font-bold">{ item.name }</h6>
                    </div>
                    <div>
                        <span className="font-bold bg-primary bg-opacity-20 text-primary rounded-xl py-1 px-2">${ item.price }</span>
                    </div>
                </div>
                <div className="flex items-center mb-4">
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Rating star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                    <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">{ item.rating }</p>
                    <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                    <a href="#" className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white">{ item.reviews } reviews</a>
                </div>
                <p className="text-sm">{ item.description }</p>
                <div className="flex justify-between items-center mt-4">
                    <div>
                        { item.expiresOn && (
                            <p className="text-xs">
                                Expires on: { item.expiresOn }
                            </p>
                        )}
                    </div>
                    <div>
                        { item.isAcquired && (
                            <Button size="text-xs">Open</Button>
                        )}

                        { !item.isAcquired && (
                            <Button size="text-xs" background="bg-primary hover:bg-blue-800" color="text-white">Buy Now</Button>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PluginCard;
