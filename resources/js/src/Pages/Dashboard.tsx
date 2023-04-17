import NosideBarLayout from '../layouts/NoSideBarLayout';
import Card from '../components/Card';
import PluginCard from '../components/Plugin/Card';
import {Plugin} from "../types/DashboardTypes";

interface DashboardProps{
    plugins:Plugin[]
}

const Dashboard: React.FC<DashboardProps> = ({plugins}) => {
    // const plugins=props;
    // const plugins: Plugin[] = [
    //     {
    //         name: 'CookieYes | GDPR Cookie Consent',
    //         description: 'Easily set up cookie notice, cookie policy and get GDPR cookie compliance. Supports GDPR (DSGVO,…',
    //         price: '2',
    //         image: 'https://ps.w.org/cookie-law-info/assets/banner-1544x500.jpg?rev=2790605',
    //         isNew: true,
    //         isAcquired: true,
    //         expiresOn: '22 Dec 2023',
    //         rating: 4.5,
    //         reviews: 52
    //     },
    //     {
    //         name: 'Smash Balloon Social Photo Feed',
    //         description: 'Easily set up cookie notice, cookie policy and get GDPR cookie compliance. Supports GDPR (DSGVO,…',
    //         price: '6',
    //         image: 'https://ps.w.org/instagram-feed/assets/banner-1544x500.png?rev=2679382',
    //         isNew: false,
    //         isAcquired: false,
    //         rating: 5,
    //         reviews: 12
    //     },
    //     {
    //         name: 'All-In-One Security (AIOS)',
    //         description: 'Easily set up cookie notice, cookie policy and get GDPR cookie compliance. Supports GDPR (DSGVO,…',
    //         price: '3',
    //         image: 'https://ps.w.org/all-in-one-wp-security-and-firewall/assets/banner-1544x500.png?rev=2798307',
    //         isNew: false,
    //         isAcquired: false,
    //         rating: 4.8,
    //         reviews: 23
    //     },
    //     {
    //         name: 'WPCode – Insert Headers and Footers',
    //         description: 'WPCode (formerly known as Insert Headers and Footers by WPBeginner) is the most popular code snippets plugin',
    //         price: '2',
    //         image: 'https://ps.w.org/insert-headers-and-footers/assets/banner-1544x500.png?rev=2758516',
    //         isNew: false,
    //         isAcquired: false,
    //         rating: 4.9,
    //         reviews: 11
    //     },
    //     {
    //         name: 'Yoast SEO - THE #1 WORDPRESS SEO PLUGIN',
    //         description: 'Since 2008 Yoast SEO has helped millions of websites worldwide to rank higher in search engines.',
    //         price: '4',
    //         image: 'https://ps.w.org/wordpress-seo/assets/banner-772x250.png?rev=2643727',
    //         isNew: false,
    //         isAcquired: false,
    //         rating: 4.7,
    //         reviews: 40
    //     },
    //     {
    //         name: 'Jetpack – WP Security, Backup, Speed, & Growth',
    //         description: 'WordPress security, performance, marketing, and design tools — Jetpack is made by WordPress.',
    //         price: '2',
    //         image: 'https://ps.w.org/jetpack/assets/banner-1544x500.png?rev=2653649',
    //         isNew: false,
    //         isAcquired: false,
    //         rating: 4.9,
    //         reviews: 12
    //     }
    // ];

    return (
        <NosideBarLayout plugins={plugins}>
            <div className="pt-10">
                <div className="mb-10 max-w-3xl text-center mx-auto px-8">
                    <h1 className="text-2xl font-bold mb-4">Plugins</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum hic aperiam nulla rerum voluptatum exercitationem repellat provident nemo perferendis fugit, deleniti voluptates a ab est quia magni laboriosam aliquam.</p>
                </div>

                <div className="flex flex-wrap gap-y-4">
                    {plugins.map((item) => (
                        <div key={item.name} className="w-full sm:w-4/12 sm:px-2">
                            <Card>
                                <PluginCard plugin={item} />
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </NosideBarLayout>
    );
}

export default Dashboard;
