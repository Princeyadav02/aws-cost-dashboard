const SummaryTable = () => (
  <div className="bg-slate-900 bg-opacity-90 rounded-xl shadow-lg p-6 mb-6 overflow-x-auto">
    <h3 className="text-lg font-medium text-white mb-4">Account Summary</h3>
    <table className="table-auto w-full text-sm text-teal-300 border-collapse">
      <thead>
        <tr>
          <th className="p-2 border-b border-slate-700 text-left">Profile</th>
          <th className="p-2 border-b border-slate-700 text-left">
            Last Month
          </th>
          <th className="p-2 border-b border-slate-700 text-left">
            Current Month
          </th>
          <th className="p-2 border-b border-slate-700 text-left">
            Budget Info
          </th>
          <th className="p-2 border-b border-slate-700 text-left">
            Total Savings
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 border-b border-slate-800">NG</td>
          <td className="p-2 border-b border-slate-800">$1314.86</td>
          <td className="p-2 border-b border-slate-800">$1220.29</td>
          <td className="p-2 border-b border-slate-800">
            My Monthly Cost Budget - Limit: $1633.36, Actual: $1220.29
          </td>
          <td className="p-2 border-b border-slate-800">$379.94</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default SummaryTable;
