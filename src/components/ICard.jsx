const ICards = ({ title, points }) => (
    <div className="bg-slate-800 border-l-4 border-teal-400 p-4 rounded-lg shadow-lg mb-4">
      <h3 className="text-lg font-medium text-teal-400 mb-2">{title}</h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    </div>
  );
  
  export default ICards;