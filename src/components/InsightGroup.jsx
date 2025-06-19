import ICards from "./ICard";


const InsightsGroup = ({ title, insights }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-semibold text-white mb-4">{title}</h2>
    <div className="p-4 rounded-lg shadow-md mb-4">
      <h3 className="text-xl font-semibold text-teal-400 mb-3">AI-Generated Insights</h3>
      {insights.map((insight, idx) => (
        <ICards key={idx} title={insight.title} points={insight.points} />
      ))}
    </div>
  </section>
);

export default InsightsGroup;