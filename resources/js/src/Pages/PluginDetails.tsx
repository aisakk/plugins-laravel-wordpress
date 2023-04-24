import MainLayout from '../layouts/MainLayout';
import React from 'react';
import PricingCard from '../components/Pricing/Card';
import Button from '../components/Form/Button';
import RatingPercentage from '../components/Rating/Percentage';
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';
import {LicenseIdProps,Plugin} from '../types/DashboardTypes'


interface LicenseProps extends LicenseIdProps{
    plugin:Plugin;
}



const PluginDetails: React.FC<LicenseProps> = (props) => {
    const { plugin, licenseId } = props;


  return (
    <MainLayout licenseId={licenseId}>
        <div className="py-16 pb-10">
            <div className="w-full">
                <div className="shadow-xl px-6 pt-6 pb-10 rounded-2xl bg-white relative">
                    <img className="w-full rounded-xl h-60 object-cover" src="https://ps.w.org/tutor/assets/banner-1544x500.jpg?rev=2694448" alt="" />
                    <div className="flex flex-wrap sm:flex-nowrap justify-between gap-y-4 items-center pt-6">
                        <div className="w-full flex flex-wrap sm:flex-nowrap gap-6 justify-center items-center">
                            <span className="-mt-20 sm:mt-0">
                                <img className="w-24 rounded-xl" src="https://ps.w.org/tutor/assets/icon-256X256.gif?rev=2694448" alt="" />
                            </span>
                            <div className="">
                                <h6 className="text-2xl text-center sm:text-left font-bold">{ plugin.name }</h6>
                                <div className="flex gap-6 pt-3 text-center justify-center sm:justify-start">
                                    <div>
                                        <h6 className="pb-1 font-bold text-sm">Version</h6>
                                        <p>{plugin.plugin_info.details.version}</p>
                                    </div>
                                    <div>
                                        <h6 className="pb-1 font-bold text-sm">Updated</h6>
                                        <p>{plugin.plugin_info.details.last_updated}</p>
                                    </div>
                                    <div>
                                     {/*    <h6 className="pb-1 font-bold text-sm">Official Site</h6>
                                        <p>{plugin.plugin_info.details.oficial_website}</p>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full flex gap-4 justify-center sm:justify-end">
                            <div className="text-right pb-2">
                                <h5 className="text-2xl font-bold"><span className="text-sm">From</span> {plugin.price}$</h5>
                            </div>
                            <div className="">
                                <Button background="bg-primary" color="text-white">Pricing</Button>
                            </div>
                        </div>
                    </div>

                    <span className="absolute top-8 left-8 bg-green-500 text-white p-2 font-bold text-xs rounded-xl">
                        New
                    </span>





                </div>

                <div className="pt-6">
                    <div className="flex flex-wrap lg:flex-nowrap gap-6 items-start">
                        <div className="w-full lg:w-8/12 rounded-2xl bg-white shadow-xl p-10 text-slate-800 sm:text-xs md:text-base"
                        dangerouslySetInnerHTML={{ __html: plugin.readme || '' }}>

                        </div>

                        <div className="mx-auto w-11/12 md:w-10/12 lg:w-4/12 rounded-2xl bg-white shadow-xl p-10">
                            <div className="gap-6 flex flex-col">
                                <div className="flex justify-between">
                                    <div>Version:</div>
                                    <div>{plugin.plugin_info.details.version}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Last updated:</div>
                                    <div>{plugin.plugin_info.details.last_updated}</div>
                                </div>
                               {/*  <div className="flex justify-between">
                                    <div>Active installations:</div>
                                    <div>{plugin.plugin_info.details.active_installations}</div>
                                </div> */}
                                <div className="flex justify-between">
                                    <div>WordPress Version:</div>
                                    <div>{plugin.plugin_info.details.wordpress_version}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>Tested up to:</div>
                                    <div>{plugin.plugin_info.details.tested_up_to}</div>
                                </div>
                                <div className="flex justify-between">
                                    <div>PHP Version:</div>
                                    <div>{plugin.plugin_info.details.php_version}</div>
                                </div>
                                {/* <div className="flex justify-between">
                                    <div>Languages:</div>
                                    <div><a href="" className="font-bold text-blue-400">{plugin.plugin_info.details.languages}</a></div>
                                </div> */}
                                <div className="flex justify-between">
                                    <div className='w-24'>Tags:</div>
                                    <div className="flex gap-1 justify-end flex-wrap">
                                        { plugin.plugin_info.tags.map((tag,index) => (
                                            <Tag key={index} item={ tag } />
                                        ))}

                                    </div>
                                </div>
                            </div>
                            <div className="pt-10">
                                <h4 className="text-2xl font-bold">Rating</h4>
                                <div className="pt-6">


                                    <div className="flex items-center mb-3">
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
                                    </div>

                                    { plugin.plugin_info.rating.map((rating,index) => (
                                        <RatingPercentage key={index} rating={ rating } />
                                    ))}

                                </div>
                            </div>
                            {/* <div className="pt-10">
                                <h4 className="text-2xl font-bold">Support</h4>
                                <div className="pt-6">
                                    <p>Issues resolved in last two months:</p>
                                    <div className="pt-6">
                                        <Button>View support forum</Button>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>


                <div className="rounded-2xl bg-white shadow-xl py-10 px-4 sm:px-10 mt-12">
                    <div>
                        <h6 className="text-3xl font-bold text-center">Screenshots</h6>
                    </div>
                    <Gallery images={ plugin.images } />
                </div>
            </div>
            <div>
                <div className="mt-12">
                    <h6 className="text-3xl font-bold text-center">Pricing</h6>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap justify-center items-center sm:gap-0 lg:gap-4 pt-10">
                    { plugin.pricing.map((item,index) => (
                        <div key={index} className="w-11/12 md:w-6/12 md:w-4/12 p-2">
                            <PricingCard  item={ item } />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </MainLayout>
  );
};

export default PluginDetails;
