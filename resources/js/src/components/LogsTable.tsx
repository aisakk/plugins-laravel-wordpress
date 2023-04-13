import React from 'react';

interface Log {
  timestamp: string;
  actionName: string;
  actionDetails: string;
  actionData: string;
  actionResult: string;
}

interface LogsTableProps {
  logs: Log[];
}
const LogsTable: React.FC<LogsTableProps> = ({ logs }) => {
  return (

    <div className="logs-table">
      <table className="table-auto w-full">
        <thead  className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
          <tr>
            <th className="p-2 whitespace-nowrap"><div className="font-semibold text-left">Fecha</div></th>
            <th className="p-2 whitespace-nowrap"><div className="font-semibold text-left">Nombre de la Acción</div></th>
            <th className="p-2 whitespace-nowrap"><div className="font-semibold text-left">Detalles de la Acción</div></th>
            <th className="p-2 whitespace-nowrap"><div className="font-semibold text-left">Data de la Acción</div></th>
            <th className="p-2 whitespace-nowrap"><div className="font-semibold text-left">Resultado de la Acción</div></th>
          </tr>

        </thead>

        <tbody className="text-sm divide-y divide-gray-100">
          {logs.map((log, index) => (
            <tr key={index}>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                    {log.timestamp}
                </div>
            </td>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                    {log.actionName}
                </div>
            </td>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                    {log.actionDetails}
                </div>
            </td>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                    {log.actionData}
                </div>
            </td>
              <td className="p-2 whitespace-nowrap">
                <div className="font-medium text-gray-800">
                    {log.actionResult}
                </div>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogsTable;
