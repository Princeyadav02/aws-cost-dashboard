
import SimpleTable from "./SimpleTable";
import CollapsibleTable from "./CollapsibleTable";
import InsightsGroup from "./InsightGroup";

const SectionBlock = ({
  sectionTitle,
  insights = [],
  staticTables = [],
  collapsibleTables = [],
}) => {
  return (
    <section className="mb-16">
      {insights.length > 0 && (
        <InsightsGroup title={sectionTitle} insights={insights} />
      )}

      {staticTables.map((table, i) => (
        <SimpleTable
          key={`static-${i}`}
          title={table.title}
          headers={table.headers}
          rows={table.rows}
        />
      ))}

      {collapsibleTables.map((table, i) => (
        <CollapsibleTable
          key={`collapse-${i}`}
          title={table.title}
          headers={table.headers}
          rows={table.rows}
        />
      ))}
    </section>
  );
};

export default SectionBlock;
