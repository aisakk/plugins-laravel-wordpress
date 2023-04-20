import MainLayout from '../layouts/MainLayout';
import LogsTable from '../components/LogsTable';
import Card from '../components/Card';
import {  useState } from 'react';
import {LicenseIdProps} from "../types/DashboardTypes";


interface Log {
    created_at: string;
    action_name: string;
    action_details: string;
    action_data: string;
    action_result: string;
}

interface Item {
    id: number;
    date: string;
    code: string;
    pluginName: string;
    expiration: string;
    domains: string;
    status: string;
}

interface LogsProps extends LicenseIdProps {
    logs: Log[];
    license: Item;
}

const formatDate = (dateString: string) => {
    if (!dateString) {
        return 'Fecha desconocida';
    }

    const isoDate = dateString.replace(/\.\d+/, ''); // Elimina los microsegundos
    const date = new Date(isoDate);
    const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };

    return date.toLocaleDateString(undefined, options);
};

const separateLogsByDay = (logs: any[]) => {
    const logsByDay: { [date: string]: any[] } = {};

    logs.forEach((log) => {
      const logDate = log.created_at.split(' ')[0];
      if (logsByDay[logDate]) {
        logsByDay[logDate].push(log);
      } else {
        logsByDay[logDate] = [log];
      }
    });

    return logsByDay;
};

const Logs: React.FC<LogsProps> = ({ logs, licenseId }) => {
    const logsData = logs ? Object.values(logs) : [];

    // Crear un conjunto de fechas únicas
    const uniqueDates = new Set(
        logsData.map((log) => formatDate(log.created_at.split(' ')[0]))
    );

    // Crear un estado para la fecha seleccionada
    const [selectedDate, setSelectedDate] = useState<string | null>(null);

    // Filtrar registros por fecha seleccionada
    const filteredLogs = selectedDate
        ? logsData.filter(
            (log) => formatDate(log.created_at.split(' ')[0]) === selectedDate
        )
        : logsData;

    const logsByDay = separateLogsByDay(filteredLogs);

    return (
        <MainLayout licenseId={licenseId}>
            <div className="py-16">
                <div className="w-full items-center">
                    <select
                        value={selectedDate || ''}
                        onChange={(e) => setSelectedDate(e.target.value)}
                        className="w-full mb-4 md:mb-3 sm:w-auto bg-white border border-gray-300 py-2 px-4 rounded-lg"
                    >
                        <option value="">Todos los días</option>
                        {Array.from(uniqueDates).map((date) => (
                        <option key={date} value={date}>
                            {date}
                        </option>
                        ))}
                    </select>
                </div>
                <Card>
                    <LogsTable logs={logsByDay} />
                </Card>
            </div>
        </MainLayout>
    );
}

export default Logs;
