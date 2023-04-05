import { Link } from '@inertiajs/react';
import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import Icon from '../components/Icon';

interface Item {
  date: string;
  code: string;
  name: string;
  expiration: string;
  domains: string;
  status: string;
}

const items: Item[] = [
  {
    date: '20 Nov 2022',
    code: 'SAXAS-XYAZ-UIZL',
    name: 'Optimized Chat button',
    expiration: '20 Nov 2023',
    domains: 'octonove.com',
    status: 'Active',
  },
];

const Licenses: React.FC = () => {
  return (
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

                { items.map((item) => (
                    <div className="flex border-t border-slate-200 py-4 items-center">
                        <div className="w-3/12">
                            <p>{ item.date }</p>
                        </div>
                        <div className="w-2/12">
                            <p className="bg-slate-100 text-slate-600 rounded-xl py-1 px-4 font-bold inline-block">{ item.code }</p>
                        </div>
                        <div className="w-3/12">
                            <p>{ item.name }</p>
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
                            <Link href="/plan" className="flex justify-center">
                                <Button background="bg-white" padding="p-2"><Icon size={25} name="eye" /></Button>
                            </Link>
                        </div>
                    </div>
                ))}
            </Card>
        </div>
    );
}

export default Licenses;
