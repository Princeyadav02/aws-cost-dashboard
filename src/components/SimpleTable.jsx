const SimpleTable = ({ title, headers, rows }) => (
  <div className="bg-slate-900 bg-opacity-90 rounded-xl shadow-lg p-6 mb-6 overflow-x-auto">
    <h3 className="text-lg font-medium text-white mb-4">{title}</h3>
    <table className="table-auto w-full text-sm text-teal-300 border-collapse">
      <thead>
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="p-2 border-b border-slate-700 text-left">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-slate-800">
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2 border-b border-slate-800">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default SimpleTable;
