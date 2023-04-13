import MainLayout from '../layouts/MainLayout';
import LogsTable from '../components/LogsTable';
import Card from '../components/Card';
import {  useState } from 'react';


const logsData = [
    {
      timestamp: '13-04-2023 12:45',
      actionName: 'Hook de Actualización',
      actionDetails: 'Ejecucion de hook de actualizacion en el dominio "www.dominio.com"',
      actionData: '{url: Json codificado}, endpoint: www.dominio.com/wp-json/octorestapi/v1/update_widget',
      actionResult: 'Error (500) "MENSAJE"',
    },
    {
      timestamp: '13-04-2023 13:00',
      actionName: 'Hook de Actualización',
      actionDetails: 'Ejecucion de hook de actualizacion en el dominio "www.dominio.com"',
      actionData: '{url: Json codificado}, endpoint: www.dominio.com/wp-json/octorestapi/v1/update_widget',
      actionResult: '200 Completado correctamente.',
    },
  ];

interface Item {
    id:number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: string;
    status: string;
}

interface LicenseProps {
    license: Item;
}

const Logs: React.FC<LicenseProps> = (props) =>{
    const { license } = props;
    let [isOpen, setIsOpen] = useState(false);

function closeModal() {
    setIsOpen(false);
}

function openModal() {
    setIsOpen(true);
}

  return (
    <MainLayout licenseId={license.id}>
        <div className="py-10">
            <div className="flex flex-wrap sm:flex-nowrap gap-y-6 sm:gap-6 items-center">

                <div className="w-full">
                    <Card>
                         <LogsTable logs={logsData} />
                    </Card>
                </div>
            </div>

        </div>
    </MainLayout>
    );
}

export default Logs;
