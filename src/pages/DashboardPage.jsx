import CostVisualizations from "../components/ChartCard";
import SectionBlock from "../components/SectionBlock";
import {
    cloudwatchInsights,
    cloudwatchSummaryTable,
    dashboardInsights,
    dashboardSummaryTable,
    dashboardCollapsibleTables,
    ec2Insights,
    rdsNgInsights,
    vpcInsights,
    rdsInsights
  } from '../data/data';


const DashboardPage = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="header mb-8">
        <h1 className="text-4xl font-bold">AWS-FIS</h1>
        <p className="text-lg mt-2 opacity-90">
          Generated on 2025-05-27 16:14:01
        </p>
      </header>
      <div>
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
          <div className="card p-6">
            <p style={{ color: "#2dd4bf" }}>
              Ensuring robust security across multiple AWS accounts is becoming
              increasingly complex. By leveraging automated cloud security
              measures, we can proactively mitigate threats and improve security
              operations. Dive into advanced techniques to strengthen our AWS
              security posture using key services like Security Hub, AWS Config
              in an automated way. Prowler, an AWS security tool, within AWS
              Code Build will help in calculating the compliance percentage of
              CIS benchmarks and configurations for securing multiple AWS
              accounts.
            </p>
          </div>
        </div>
      </div>
      <CostVisualizations />

      <SectionBlock
        sectionTitle="CLOUDWATCH NG 20250527 161226"
        insights={cloudwatchInsights}
        staticTables={[cloudwatchSummaryTable]}
      />

      <SectionBlock
        sectionTitle="DASHBOARD 20250527 161229"
        insights={dashboardInsights}
        staticTables={[dashboardSummaryTable]}
        collapsibleTables={dashboardCollapsibleTables}
      />

      <SectionBlock
        sectionTitle="EC2 NG 20250527 161149"
        insights={ec2Insights}
      />

      <SectionBlock
        sectionTitle="RDS NG 20250527 161157"
        insights={rdsNgInsights}
      />

      <SectionBlock
        sectionTitle="VPC NG 20250527 161228"
        insights={vpcInsights}
      />

      <SectionBlock sectionTitle="RDS" insights={rdsInsights} />
    </div>
  );
};

export default DashboardPage;
