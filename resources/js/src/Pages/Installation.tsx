import MainLayout from '../layouts/MainLayout';
import React from 'react';
import PricingCard from '../components/Pricing/Card';
import Button from '../components/Form/Button';
import RatingPercentage from '../components/Rating/Percentage';
import Gallery from '../components/Gallery';
import Tag from '../components/Tag';
import Card from '../components/Card';

interface Plugin{
    name: string;
    description: string;
    active: boolean;
    icon: string;
    link: string;
}
interface License {
    id:number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: string;
    status: string;
  }

interface LicenseProps {
    license: License;
    plugins:Plugin[];
}

type Rating = {
  name: string;
  count: number;
  percentage: number;
};

type FeatureItem = {
  name: string;
  type: string;
};

type Feature = {
  name: string;
  items: FeatureItem[];
};

type Plan = {
  name: string;
  description: string;
  price: number;
  regular_price: number;
  renew_price: number;
  discount: number;
  isMostPopular: boolean;
  features: Feature[];
};

type Screenshot = {
  name: string;
  source: string;
};

type PluginTag = {
  name: string;
};

type SinglePlugin = {
  name: string;
  description: string;
  rating: Rating[];
  plans: Plan[];
  screenshots: Screenshot[];
  tags: PluginTag[];
};

const Installation: React.FC<LicenseProps> = (props) => {
    const { license,plugins } = props;
  const plugin: SinglePlugin = {
    name: 'Optimized Chat button, phone, social link by Octonove',
    description: '',
    rating: [
        {
            name: '5 stars',
            count: 1174,
            percentage: 80
        },
        {
            name: '4 stars',
            count: 143,
            percentage: 10
        },
        {
            name: '3 stars',
            count: 81,
            percentage: 5
        },
        {
            name: '2 stars',
            count: 87,
            percentage: 5
        },
        {
            name: '1 star',
            count: 369,
            percentage: 15
        }
    ],
    plans: [
        {
            name: 'Single Web Hosting',
            description: 'Ideal solution for beginners',
            price: 1.99,
            regular_price: 9.99,
            renew_price: 3.99,
            discount: 80,
            isMostPopular: false,
            features: [
                {
                    name: 'Top feature comparison',
                    items: [
                        {
                            name: '1 Website',
                            type: 'medium'
                        },
                        {
                            name: '50 GB SSD Storage',
                            type: 'medium'
                        },
                        {
                            name: '100 GB Bandwidth',
                            type: 'medium'
                        },
                        {
                            name: 'Free Domain ($9.99 value)',
                            type: 'negative'
                        },
                        {
                            name: 'Unlimited Free SSL',
                            type: 'positive'
                        },
                        {
                            name: 'Weekly Backups',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Security',
                    items: [
                        {
                            name: 'Cloudflare Protected Nameservers',
                            type: 'positive'
                        },
                        {
                            name: 'Malware Scanner',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Free Bonuses',
                    items: [
                        {
                            name: '1 Email Account',
                            type: 'medium'
                        },
                        {
                            name: 'Website builder',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'WordPress Options',
                    items: [
                        {
                            name: 'Managed WordPress',
                            type: 'positive'
                        },
                        {
                            name: 'WordPress Acceleration',
                            type: 'positive'
                        },
                        {
                            name: 'Object Cache for WordPress',
                            type: 'negative'
                        },
                        {
                            name: 'WordPress Staging Tool',
                            type: 'negative'
                        }
                    ]
                },
                {
                    name: 'Service and Support',
                    items: [
                        {
                            name: '30 Days Money Back Guarantee',
                            type: 'positive'
                        },
                        {
                            name: '24/7 Support',
                            type: 'positive'
                        },
                        {
                            name: '99,90% Uptime Guarantee',
                            type: 'positive'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Single Web Hosting',
            description: 'Ideal solution for beginners',
            price: 1.99,
            regular_price: 9.99,
            renew_price: 3.99,
            discount: 80,
            isMostPopular: true,
            features: [
                {
                    name: 'Top feature comparison',
                    items: [
                        {
                            name: '1 Website',
                            type: 'medium'
                        },
                        {
                            name: '50 GB SSD Storage',
                            type: 'medium'
                        },
                        {
                            name: '100 GB Bandwidth',
                            type: 'medium'
                        },
                        {
                            name: 'Free Domain ($9.99 value)',
                            type: 'negative'
                        },
                        {
                            name: 'Unlimited Free SSL',
                            type: 'positive'
                        },
                        {
                            name: 'Weekly Backups',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Security',
                    items: [
                        {
                            name: 'Cloudflare Protected Nameservers',
                            type: 'positive'
                        },
                        {
                            name: 'Malware Scanner',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Free Bonuses',
                    items: [
                        {
                            name: '1 Email Account',
                            type: 'medium'
                        },
                        {
                            name: 'Website builder',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'WordPress Options',
                    items: [
                        {
                            name: 'Managed WordPress',
                            type: 'positive'
                        },
                        {
                            name: 'WordPress Acceleration',
                            type: 'positive'
                        },
                        {
                            name: 'Object Cache for WordPress',
                            type: 'negative'
                        },
                        {
                            name: 'WordPress Staging Tool',
                            type: 'negative'
                        }
                    ]
                },
                {
                    name: 'Service and Support',
                    items: [
                        {
                            name: '30 Days Money Back Guarantee',
                            type: 'positive'
                        },
                        {
                            name: '24/7 Support',
                            type: 'positive'
                        },
                        {
                            name: '99,90% Uptime Guarantee',
                            type: 'positive'
                        }
                    ]
                }
            ]
        },
        {
            name: 'Single Web Hosting',
            description: 'Ideal solution for beginners',
            price: 1.99,
            regular_price: 9.99,
            renew_price: 3.99,
            discount: 80,
            isMostPopular: false,
            features: [
                {
                    name: 'Top feature comparison',
                    items: [
                        {
                            name: '1 Website',
                            type: 'medium'
                        },
                        {
                            name: '50 GB SSD Storage',
                            type: 'medium'
                        },
                        {
                            name: '100 GB Bandwidth',
                            type: 'medium'
                        },
                        {
                            name: 'Free Domain ($9.99 value)',
                            type: 'negative'
                        },
                        {
                            name: 'Unlimited Free SSL',
                            type: 'positive'
                        },
                        {
                            name: 'Weekly Backups',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Security',
                    items: [
                        {
                            name: 'Cloudflare Protected Nameservers',
                            type: 'positive'
                        },
                        {
                            name: 'Malware Scanner',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'Free Bonuses',
                    items: [
                        {
                            name: '1 Email Account',
                            type: 'medium'
                        },
                        {
                            name: 'Website builder',
                            type: 'positive'
                        }
                    ]
                },
                {
                    name: 'WordPress Options',
                    items: [
                        {
                            name: 'Managed WordPress',
                            type: 'positive'
                        },
                        {
                            name: 'WordPress Acceleration',
                            type: 'positive'
                        },
                        {
                            name: 'Object Cache for WordPress',
                            type: 'negative'
                        },
                        {
                            name: 'WordPress Staging Tool',
                            type: 'negative'
                        }
                    ]
                },
                {
                    name: 'Service and Support',
                    items: [
                        {
                            name: '30 Days Money Back Guarantee',
                            type: 'positive'
                        },
                        {
                            name: '24/7 Support',
                            type: 'positive'
                        },
                        {
                            name: '99,90% Uptime Guarantee',
                            type: 'positive'
                        }
                    ]
                }
            ]
        }
    ],
    screenshots: [
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-1.jpg?rev=2768531'
        },
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-2.png?rev=2765896'
        },
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-3.png?rev=2765896'
        },
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-4.png?rev=2765896'
        },
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-5.png?rev=2765896'
        },
        {
            name: 'Configuration',
            source: 'https://ps.w.org/feeds-for-youtube/assets/screenshot-6.jpg?rev=2768531'
        }
    ],
    tags: [
        {
            name: 'button'
        },
        {
            name: 'whatsapp'
        },
        {
            name: 'chat'
        },
        {
            name: 'facebook'
        },
        {
            name: 'social'
        },
        {
            name: 'whatsapp chat'
        },
        {
            name: 'instagram'
        }
    ]
  };

  return (
    <MainLayout licenseId={license.id} plugins={plugins}>

        <div className="py-10">
            <div className="w-full">

                <div className="pt-6">
                    <div className="flex flex-wrap sm:flex-nowrap gap-6 items-start">
                        <div className="w-full rounded-2xl bg-white shadow-xl p-10 text-slate-800">
                        <h6 className="text-2xl text-center sm:text-left font-bold">{ plugin.name }</h6>
                            <p>
                                Your visitors can Contact you through "WhatsApp", "WhatsApp Business", phone call or you can include any custom link to other chats or social media. All with a single click.
                            </p>
                            <br />
                            <p>
                                A Powerful and Lightweight way to display a Fully customizable Chat Button of different Social Media sites.
                            </p>
                            <br />
                            <p>
                                The plugin allows the user to select between multiple icons (Social media, Email, Phone, Website) and put a custom url for the user.
                            </p>
                            <br />
                            <p>
                                The plugin is responsive and fully customizable (Colors, sizes, etc). However, it will work "Out of the box", just install and set your number, that's it!
                            </p>
                            <br />
                            <p>
                                == WhatsApp Chat ==
                            </p>
                            <br />
                            <p>
                                Add 'WhatsApp' or 'WhatsApp Business' Number. And let your website visitors contact you with a single click.
                            </p>
                            <br />
                            <p>
                                *📱 Mobile:*  Navigates to WhatsApp Mobile App.
                            </p>
                            <br />
                            <p>
                                *💻 Desktop:* Navigates to WhatsApp Desktop App / Web WhatsApp page(web.whatsapp.com)
                            </p>
                            <br />
                            <p>
                                == Social Network Chat ==
                            </p>
                            <br />
                            <p>
                                You can add any social network link (Facebook, Instagram, Telegram) and set an icon for them!
                            </p>
                            <br />
                            <p>
                                == 🖌️ Customizable ==
                            </p>
                            <br />
                            <p>
                                Fully Customizable Design (Color, Icons, Size). You can match your website design!
                            </p>
                            <br />
                            <p>
                                == 🚀 Performance ==
                            </p>
                            <br />
                            <p>
                                The code its optimized and the plugin is very lightweight. No unnecessary hooks that will ralentize your website!
                            </p>
                            <br />
                            <p>
                                You can use it with other optimization plugins and it will work correctly as well. We prioritize your site optimization over all.
                            </p>
                            <br />
                            <p>
                                == screenshots ==
                            </p>
                            <br />
                            <ul>
                                <li>1. Works Out of the box, no complex installation/configuration</li>
                                <li>2. Simple but powerfull settings</li>
                                <li>3. Fully Customizable</li>
                                <li>4. Posibility to add a label</li>
                                <li>5. Make it match your website theme!</li>
                            </ul>
                            <br />
                            <p>
                                == Installation ==
                            </p>
                            <br />
                            <ul>
                                <li>= From Dashboard ( WordPress admin ) =</li>
                                <li>* plugins - Add New</li>
                                <li>* search for 'Optimized Chat button, phone, social link by Octonove'</li>
                                <li>* click on Install Now and then Active.</li>
                            </ul>
                            <br />
                            <ul>
                                <li>= using FTP or similar =</li>
                                <li>* Unzip "octo-chat-btn" file and </li>
                                <li>* Upload "octo-chat-btn" folder to the "/wp-content/plugins/" directory.</li>
                                <li>* Activate the plugin through the "Plugins" menu in WordPress.</li>
                            </ul>
                            <br />
                            <p>
                                == Frequently Asked Questions ==
                            </p>
                            <br />
                            <p>
                                = WhatsApp Number =
                            </p>
                            <br />
                            <p>
                                Enter the WhatsApp number with country code
                            </p>
                            <br />
                            <ul>
                                <li>E.g.</li>
                                <li>country code +1</li>
                                <li>number: 6123456789</li>
                                <li>* WhatsApp number: 16123456789 *</li>
                            </ul>
                            <br />
                            <p>
                                = GDPR =
                            </p>
                            <br />
                            <p>
                                "Optimized Chat button, phone, social link by Octonove" don't collect any of the user data and don't use cookies.
                            </p>
                            <br />
                            <p>
                                = 🔧 Basic Troubleshooting =
                            </p>
                            <br />
                            <ul>
                                <li>* Clear cache</li>
                                <li>* Check WhatsApp number entered with country code</li>
                                <li>* URL should be valid (E.g.: https://www.google.com)</li>
                            </ul>
                            <br />
                            <p>
                                For any queries, please contact us.
                            </p>
                            <br />
                            <p>
                                = ❤️ Support / Contact =
                            </p>
                            <br />
                            <p>
                                For any issues with the plugin / suggestions:
                            </p>
                            <br />
                            <p>
                                * 📧 contacto@octonove.com
                            </p>
                            <br />
                            <p>
                                * WordPress [new topic]()
                            </p>
                            <br />
                            <p>
                                * Octonove [Contact](https://octonove.com/contacto/)
                            </p>
                            <br />
                            <p>
                                = ⭐️ Give Support =
                            </p>
                            <br />
                            <p>
                                If you like the plugin, support the developers by giving/
                            </p>


                            <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-4 pt-10">
                                <div className="py-10">
                                    <div className="pt-6">
                                        <div className="flex justify-center">
                                            <Button
                                                background={'bg-secondary hover:bg-orange-600'}
                                                color="text-white"
                                                padding="py-4 px-24"
                                            >
                                                Download Now
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>

                </div>
            </div>

        </div>

    </MainLayout>
  );
};

export default Installation;
