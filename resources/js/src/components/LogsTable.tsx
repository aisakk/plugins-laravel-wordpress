import React, { useState } from 'react';
import Modal from 'react-modal';
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

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLog, setSelectedLog] = useState<Log | null>(null);

    const handleOpenModal = (log: Log) => {
      setSelectedLog(log);
      setIsModalOpen(true);
    };

    const handleCloseModal = () => {
      setIsModalOpen(false);
    };

    const truncateText = (text: string, wordLimit: number) => {
        const words = text.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : text;
      };
      const truncateTextSerialized = (text: string, stringLimit: number) => {
        const words = text.split(' ');
        return text.length > stringLimit ? text.slice(0, stringLimit) + '...' : text;
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
                  <div className="font-semibold text-left">Nombre</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                  <div className="font-semibold text-left">Detalles</div>
                  </th>
                  <th className="p-2 whitespace-nowrap hidden md:table-cell">
                  <div className="font-semibold text-left">Data de la Acción</div>
                  </th>
                  <th className="p-2 whitespace-nowrap hidden md:table-cell">
                  <div className="font-semibold text-left">Resultado</div>
                  </th>
              </tr>
              </thead>
              <tbody className="text-sm divide-y divide-gray-100">
                {logs &&
                  Object.keys(logs).map((timestamp) =>
                    logs[timestamp].map((log, index) => (
                      <tr
                        key={index}
                        className="cursor-pointer"
                        onClick={() => handleOpenModal(log)}
                      >
                        <td className="p-2">
                            <div className="font-medium text-gray-800  sm:w-15 max-w-50 break-keep">{formatDate(timestamp)}</div>
                        </td>
                        <td className="p-2 whitespace-wrap">
                            <div className="font-medium text-gray-800 w-20 max-w-50 break-keep">{log.action_name}</div>
                        </td>
                        <td className="p-2">
                            <div className="font-medium text-gray-800 w-20 break-keep">{truncateText(log.action_details, 4)}</div>
                            <button
                                className="md:hidden bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600 mt-1"
                                onClick={() => handleOpenModal(log)}
                            >
                                Ver más
                            </button>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800 hidden md:table-cell">{truncateTextSerialized(log.action_data,35)}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                            <div className="font-medium text-gray-800 hidden md:table-cell">{log.action_result}</div>
                            <button
                                className="hidden md:flex bg-blue-500 text-white px-2 py-1 text-xs rounded hover:bg-blue-600 mt-1"
                                onClick={() => handleOpenModal(log)}
                            >
                                Ver más
                            </button>
                        </td>
                      </tr>
                    ))
                  )}
              </tbody>
            </table>
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Log Details"
            className="p-6 w-full sm:w-2/6 md:w-4/6 lg:w-2/3 mx-auto my-8 mt-32 border rounded-lg shadow-lg bg-white overflow-auto align-middle"
            // class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all opacity-100 scale-100"
            overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-10"
          >
            {selectedLog && (
              <div>
                <h2 className="text-lg font-semibold mb-4">Detalles del registro</h2>
                <div className="mb-2">
                  <strong>Fecha:</strong> {formatDate(selectedLog.created_at)}
                </div>
                <div className="mb-2">
                  <strong>Nombre de la acción:</strong> {selectedLog.action_name}
                </div>
                <div className="mb-2">
                  <strong>Detalles de la acción:</strong> {selectedLog.action_details}
                </div>
                <div className="mb-2 max-w-full break-words">
                  <strong className="break-word">Data de la acción:</strong> {selectedLog.action_data}
                </div>
                <div className="mb-4">
                  <strong>Resultado de la acción:</strong> {selectedLog.action_result}
                </div>
                <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={handleCloseModal}
                >
                    Cerrar
                </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default LogsTable;
