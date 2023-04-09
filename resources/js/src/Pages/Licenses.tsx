import NosideBarLayout from '../layouts/NoSideBarLayout';
import { Link } from '@inertiajs/inertia-react';
import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import Icon from '../components/Icon';



interface License {
    id:number;
  date: string;
  code: string;
  pluginName: string;
  expiration: string;
  domains: string;
  status: string;
}

interface LicensesProps {
    licenses: License[];
}


const Licenses: React.FC<LicensesProps> = (props) => {
    const { licenses } = props;

  return (
        <NosideBarLayout>
            <div className="py-10 text-center">
            <Card>
                    <div className="flex text-xs font-bold py-4 uppercase items-start">
                        <div className="w-3/12">
                            <h6>Date</h6>
                        </div>
                        <div className="w-2/12">
                            <h6>License</h6>
                        </div>
                        <div className="w-3/12">
                            <h6>Plugin</h6>
                        </div>

                        <div className="w-2/12">
                            <h6>Expiration</h6>
                        </div>
                        <div className="w-3/12">
                            <h6>Domains</h6>
                        </div>
                        <div className="w-2/12">
                            <h6>Status</h6>
                        </div>
                        <div className="w-1/12">
                            <h6>Actions</h6>
                        </div>
                    </div>

                    { licenses.map((item) => (
                        <div className="flex border-t border-slate-200 py-4 items-center">
                            <div className="w-3/12">
                                <p>{ item.date }</p>
                            </div>
                            <div className="w-2/12">
                                <p className="bg-slate-100 text-slate-600 rounded-xl py-1 px-4 font-bold inline-block">{ item.code }</p>
                            </div>
                            <div className="w-3/12">
                                <p>{ item.pluginName }</p>
                            </div>
                            <div className="w-2/12">
                                <p>{ item.expiration }</p>
                            </div>
                            <div className="w-3/12">
                                <p>{ item.domains }</p>
                            </div>
                            <div className="w-2/12">
                                <Badge background="bg-green-500">{ item.status }</Badge>
                            </div>
                            <div className="w-1/12">
                                <Link href={'license/'+item.id+'/dashboard'} className="flex justify-center">
                                    <Button background="bg-white" padding="p-2"><Icon size={25} name="eye" /></Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Card>
            </div>
        </NosideBarLayout>
    );
}

export default Licenses;
