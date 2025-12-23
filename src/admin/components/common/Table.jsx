import React from 'react';

const Table = ({ columns, data, actions, onAction }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm transition-all duration-300">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider transition-colors duration-200"
                style={{ minWidth: column.key === 'message' ? '200px' : 'auto' }}
              >
                {column.header}
              </th>
            ))}
            {actions && (
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider transition-colors duration-200">
                Actions
              </th>
            )}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50 transition-all duration-200">
              {columns.map((column, colIndex) => (
                <td 
                  key={colIndex} 
                  className={`px-6 py-4 text-sm text-gray-700 transition-colors duration-200 ${column.key === 'message' ? 'whitespace-normal' : 'whitespace-nowrap'}`}
                >
                  {column.render ? column.render(row[column.key], row) : row[column.key]}
                </td>
              ))}
              {actions && (
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium align-middle">
                  <div className="flex justify-end space-x-2">
                    {actions.map((action, actionIndex) => (
                      <button
                        key={actionIndex}
                        onClick={() => onAction(action.action, row)}
                        className={`px-3 py-1 rounded text-sm transition-all duration-200 ${action.variant === 'danger' ? 'text-red-500 hover:text-red-700 hover:bg-red-50' : 'text-blue-500 hover:text-blue-700 hover:bg-blue-50'} ${
                          action.className || ''
                        }`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;