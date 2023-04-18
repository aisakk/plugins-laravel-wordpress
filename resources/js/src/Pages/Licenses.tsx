import NosideBarLayout from '../layouts/NoSideBarLayout';
import { Link } from '@inertiajs/inertia-react';
import Badge from '../components/Badge';
import Card from '../components/Card';
import Button from '../components/Form/Button';
import Icon from '../components/Icon';
import { usePage } from '@inertiajs/inertia-react';
import { URLSearchParams } from 'url';

interface Domain{
    id:number;
    name:string;
    active:boolean;
}

interface License {
    id:number;
  date: string;
  code: string;
  pluginName: string;
  expiration: string;
  domains: Domain[];
  status: string;
}
interface Plugin{
    name: string;
    description: string;
    active: boolean;
    icon: string;
    link: string;
}

interface LicensesProps {
    licenses: License[];
    plugins: Plugin[];
}

const Licenses: React.FC<LicensesProps> = (props) => {
    const { licenses,plugins } = props;
    console.log(auth)
   // Función para extraer el valor del token de la cadena de consulta
function getQueryParam(param) {
    const queryString = window.location.search.substring(1);
    const queryParams = queryString.split("&");

    for (let i = 0; i < queryParams.length; i++) {
      const [key, value] = queryParams[i].split("=");
      if (key === param) {
        return decodeURIComponent(value);
      }
    }

    return null;
  }

  // Llamar a la función para obtener el valor del token
  const token = getQueryParam("token");

  // Guardar el token en el localStorage si está presente
  if (token) {
    localStorage.setItem("api_token", token);
  }

  return (
        <NosideBarLayout plugins={plugins}>
            <div className="py-10 text-center">
                <Card>
                    <div className="flex text-xs font-bold py-4 uppercase items-start">
                        <div className="w-3/12">
                            <h6>Date</h6>
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

                    { licenses.map((item,index) => (
                        <div className="flex border-t border-slate-200 py-4 items-center" key={index}>
                            <div className="w-3/12">
                                <p>{ item.date }</p>
                            </div>
                            <div className="w-3/12">
                                <p>{ item.pluginName }</p>
                            </div>
                            <div className="w-2/12">
                                <p>{ item.expiration }</p>
                            </div>
                            <div className="w-3/12">
                                {
                                    item.domains.map((item,index)=>(
                                        <p key={index}>{ item.name }</p>
                                    ))
                                }
                            </div>
                            <div className="w-2/12">
                                <Badge background="bg-green-500">{ item.status }</Badge>
                            </div>
                            <div className="w-1/12">
                                <Link href={'plugins/'+item.id+'/dashboard'} className="flex justify-center">
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
