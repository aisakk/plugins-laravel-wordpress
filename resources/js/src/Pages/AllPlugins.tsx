import NosideBarLayout from '../layouts/NoSideBarLayout';
import Card from '../components/Card';
import PluginCard from '../components/Plugin/Card';
import {Plugin} from "../types/DashboardTypes";

interface AllPluginsProps{
    plugins:Plugin[]
}


const AllPlugins: React.FC<AllPluginsProps> = ({plugins}) => {

    return (
        <NosideBarLayout plugins={plugins}>
            <div className="pt-10">
                <div className="mb-10 max-w-3xl text-center mx-auto px-8">
                    <h1 className="text-2xl font-bold mb-4">Plugins</h1>
                    <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, illum hic aperiam nulla rerum voluptatum exercitationem repellat provident nemo perferendis fugit, deleniti voluptates a ab est quia magni laboriosam aliquam.</p>
                </div>

                <div className="flex flex-wrap gap-y-4">
                    {plugins.map((item,index) => (
                        <div key={index} className="w-full sm:w-4/12 sm:px-2">
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

export default AllPlugins;
