import React from 'react';

interface Log {
    created_at: string;
    action_name: string;
    action_details: string;
    action_data: string;
    action_result: string;
}


interface LogsTableProps {
    logs: {
      [date: string]: Log[];
    };
}
const LogsTable: React.FC<LogsTableProps> = ({ logs }) => {
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



  return (
    <div className="logs-table">
        <div className="overflow-x-auto">
            <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                <tr>
                    <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Fecha</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Nombre de la Acción</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Detalles de la Acción</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Data de la Acción</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Resultado de la Acción</div>
                    </th>
                </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                {logs && Object.keys(logs).map((timestamp) => (
                    logs[timestamp].map((log, index) => (
                    <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">{formatDate(timestamp)}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">{log.action_name}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">{log.action_details}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">{log.action_data}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800">{log.action_result}</div>
                        </td>
                    </tr>
                    ))
                ))}
                </tbody>
            </table>
        </div>
    </div>
  );
};

export default LogsTable;
