import { useState } from 'react';

const CollapsibleTable = ({ title, headers, rows }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-slate-900 bg-opacity-90 rounded-xl shadow-lg p-6 mb-4">
      <h3
        className="text-lg font-medium text-white cursor-pointer bg-slate-700 p-3 rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="ml-2 text-teal-400">{isOpen ? '▲' : '▼'}</span>
      </h3>
      {isOpen && (
        <div className="mt-3 overflow-x-auto">
          <table className="table-auto w-full text-sm text-teal-300 border-collapse">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i} className="p-2 border-b border-slate-600 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-slate-800">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="p-2 border-b border-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default CollapsibleTable;
