// data.js

export const cloudwatchInsights = [
    {
      title: "Rightsizing and Resource Optimization",
      points: [
        "The data indicates significant usage in the `us-east-1` region, with 500 metrics and 13 alarms.",
        "To achieve cost savings, consider rightsizing EC2 and RDS instances based on actual usage patterns.",
        "Identify and terminate any unattached or underutilized resources to reduce unnecessary costs.",
      ],
    },
    {
      title: "Unused Resource Management",
      points: [
        "There is an opportunity to release unused Elastic IPs (EIPs) and remove unattached resources across EC2 and RDS services.",
        "This action will help in reducing idle costs and improving overall resource utilization.",
      ],
    },
    {
      title: "CloudWatch Optimization",
      points: [
        "The Log GB usage of 11.07 GB in `us-east-1` contributes to the monthly cost of $156.83.",
        "Optimize CloudWatch usage by implementing log retention policies, reducing log verbosity, and leveraging cost-effective storage classes for older logs.",
      ],
    },
    {
      title: "VPC Resource Optimization",
      points: [
        "Evaluate VPC endpoints for usage efficiency.",
        "Identify and remove any unused VPC endpoints and idle VPC resources to minimize costs.",
        "Optimize NAT Gateway usage by rightsizing or replacing them with NAT instances where appropriate.",
      ],
    },
    {
      title: "Budget Monitoring and Alerts",
      points: [
        "Establish budget alerts and monitoring to prevent future budget overruns.",
        "Regularly review and adjust budgets based on usage trends and cost optimization efforts.",
      ],
    },
  ];
  
  export const cloudwatchSummaryTable = {
    title: "CloudWatch Region Metrics",
    headers: ["Region", "Metrics Count", "Alarms Count", "Log GB Usage", "Cost ($/month)"],
    rows: [["us-east-1", "500", "13", "11.07", "156.83"]],
  };
  
  export const dashboardInsights = [
    {
      title: "Cost Savings Opportunities",
      points: [
        "Significant potential cost savings identified through rightsizing EC2 instances and optimizing RDS usage.",
        "Estimated total savings of $119.94 per month by downsizing underutilized EC2 instances and optimizing RDS instance classes.",
      ],
    },
    {
      title: "Unattached and Unused Resources",
      points: [
        "Multiple unattached EBS volumes and old snapshots identified, which should be reviewed for deletion to avoid unnecessary costs.",
        "Total of 11 unattached volumes and 19 old snapshots found.",
      ],
    },
    {
      title: "EC2 Instance Optimization",
      points: [
        "Several EC2 instances are running with low CPU utilization, indicating potential for rightsizing.",
        "For example, downsizing `i-07eb4a32c817b1bac` from `c5.large` to `t3.medium` could save $34.40/month.",
      ],
    },
    {
      title: "RDS Instance Optimization",
      points: [
        "The RDS instance `rmmanagement` has low CPU and connection utilization, suggesting it could be downsized or switched to Aurora Serverless.",
        "Enabling Multi-AZ and considering Reserved Instances for steady workloads could further optimize costs.",
      ],
    },
    {
      title: "VPC Resource Management",
      points: [
        "Review and remove unused VPC endpoints and idle VPC resources to enhance cost efficiency and security posture.",
      ],
    },
  ];
  
  export const dashboardSummaryTable = {
    title: "Account Summary",
    headers: ["Profile", "Last Month", "Current Month", "Budget Info", "Total Savings"],
    rows: [["NG", "$1314.86", "$1220.29", "My Monthly Cost Budget - Limit: $1633.36, Actual: $1220.29", "$379.94"]],
  };
  
  export const dashboardCollapsibleTables = [
    {
      title: "Service Cost",
      headers: ["Service", "Cost ($)"],
      rows: [
        ["Amazon Elastic Compute Cloud - Compute", "414.44"],
        ["Amazon Elastic Container Service for Kubernetes", "201.73"],
        ["EC2 - Other", "168.58"],
        ["Amazon Virtual Private Cloud", "167.08"],
        ["Amazon Relational Database Service", "166.76"],
        ["Amazon Elastic Load Balancing", "84.62"],
        ["AWS Key Management Service", "41.59"],
        ["AmazonCloudWatch", "34.17"],
        ["AWS WAF", "13.61"],
        ["Amazon Simple Storage Service", "9.60"],
        ["Amazon QuickSight", "2.91"],
        ["AWS Cost Explorer", "2.90"],
        ["Contact Center Telecommunications (sold by AMCS, LLC)", "1.98"],
        ["AWS Security Hub", "1.74"],
        ["Amazon EC2 Container Registry (ECR)", "1.12"],
        ["Tax", "0.99"],
        ["Amazon Route 53", "0.51"],
        ["Amazon Kinesis Firehose", "0.30"],
        ["Amazon Simple Queue Service", "0.24"],
        ["Amazon DynamoDB", "0.01"],
        ["AWS Config", "0.01"],
        ["Amazon Location Service", "0.00"],
        ["AWS Secrets Manager", "0.00"],
        ["CloudWatch Events", "0.00"],
        ["Amazon Simple Notification Service", "0.00"],
        ["Amazon Elastic File System", "0.00"],
        ["Amazon Glacier", "0.00"],
        ["AWS Step Functions", "0.00"],
        ["AWS CloudShell", "0.00"],
        ["AWS CloudTrail", "0.00"],
        ["AWS CodeCommit", "0.00"],
        ["AWS Glue", "0.00"],
        ["AWS Lambda", "0.00"],
        ["AWS X-Ray", "0.00"],
        ["Amazon CloudFront", "0.00"],
        ["Amazon Connect", "0.00"],
        ["Amazon Connect Customer Profiles", "0.00"],
        ["Amazon Elastic Container Registry Public", "0.00"],
      ],
    },
    {
      title: "Service Recommendations",
      headers: ["Recommendation", "Estimated Savings ($)"],
      rows: [
        ["Downsize i-07eb4a32c817b1bac from c5.large to t3.medium", "34.40"],
        ["Downsize i-04d635044fc685584 from t2.small to t2.micro", "8.40"],
        ["Downsize i-0609aa0276c3366bf from t2.small to t2.micro", "8.40"],
        ["Downsize i-0662085c5de4f4f67 from t3.medium to t3.small", "16.80"],
        ["Downsize i-0c8c7b5e584f60657 from t3.small to t3.micro", "8.33"],
        ["Downsize i-037b6ff3777e40a6e from t3.medium to t3.small", "16.80"],
      ],
    },
    {
      title: "Unattached Volumes",
      headers: ["Type", "ID", "Region", "Size (GiB)", "State"],
      rows: [
        ["Volume", "vol-0c19...", "us-east-1", "3", "available"],
        ["Volume", "vol-098d...", "us-east-1", "8", "available"],
        ["Volume", "vol-093d...", "us-east-1", "10", "available"],
        ["Volume", "vol-0614...", "us-east-1", "3", "available"],
        ["Volume", "vol-0932...", "us-east-1", "5", "available"],
        ["Volume", "vol-0b95...", "us-east-1", "5", "available"],
        ["Volume", "vol-0b2a...", "us-east-1", "5", "available"],
        ["Volume", "vol-0834...", "us-east-1", "8", "available"],
        ["Volume", "vol-0962...", "us-east-1", "3", "available"],
        ["Volume", "vol-02d5...", "us-east-1", "35", "available"],
        ["Volume", "vol-0582...", "us-east-1", "5", "available"],
      ],
    },
    {
      title: "Old Snapshots",
      headers: ["Type", "ID", "Region", "Size (GiB)", "Creation Date", "Volume ID"],
      rows: [
        ["Snapshot", "snap-06f80e...", "us-east-1", "32", "2024-04-25", "vol-06d85c..."],
        ["Snapshot", "snap-015174...", "us-east-1", "32", "2024-04-03", "vol-06d85c..."],
        ["Snapshot", "snap-0c607f...", "us-east-1", "20", "2024-03-29", "vol-0b68d7..."],
        ["Snapshot", "snap-06becc...", "us-east-1", "5", "2023-11-20", "vol-0b2a69..."],
      ],
    },
  ];
  
  export const ec2Insights = [
    {
      title: "Rightsizing Opportunities",
      points: [
        "Several EC2 instances are running with low CPU utilization, indicating potential for cost savings through rightsizing.",
        "Instances `i-07eb4a32c817b1bac` (c5.large) and `i-0d87347d6d4fbdcd9` (t2.nano) are mostly idle.",
        "Scheduling or rightsizing them could save approximately $45.62 and $3.21 respectively.",
      ],
    },
    {
      title: "Removing Unattached and Idle Resources",
      points: [
        "Multiple stopped instances (`i-0f97cfc23a7c638e4`, `i-09a0502f0e313d03b`, `i-004970cfe2ec607ef`) have been idle for extended periods.",
        "These resources should be reviewed for termination to avoid unnecessary costs.",
      ],
    },
    {
      title: "Optimizing CloudWatch Usage",
      points: [
        "Review and optimize CloudWatch metrics collection to ensure that only necessary metrics are being monitored.",
        "This can help reduce costs associated with excessive monitoring.",
      ],
    },
  ];
  
  export const rdsNgInsights = [
    {
      title: "Rightsizing Opportunities",
      points: [
        "The `rmmanagement` RDS instance in `us-east-1` can be rightsized from `db.t3.medium` to `aurora-serverless`, saving about $70.00/month.",
      ],
    },
    {
      title: "Unattached and Idle Resources",
      points: [
        "Unattached Elastic IPs (EIPs) and idle VPC resources are present.",
        "Removing these resources will save costs and improve hygiene.",
      ],
    },
    {
      title: "CloudWatch Optimization",
      points: [
        "Review and reduce metric intervals and alarm volume to reduce CloudWatch cost.",
        "Focus alarms on only critical metrics.",
      ],
    },
  ];
  
  export const vpcInsights = [
    {
      title: "Cost Savings Opportunities",
      points: [
        "Investigate and potentially remove unattached resources and unused Elastic IPs (EIPs) in the `us-east-1` region.",
        "Consider rightsizing EC2 and RDS instances based on actual usage to avoid over-provisioning.",
      ],
    },
    {
      title: "Budget Overruns",
      points: [
        "VPC `vpc-085f0e455c1e8080c` incurs a monthly cost of $32.4.",
        "Evaluate if the NAT Gateway is necessary and if associated services justify the cost.",
      ],
    },
  ];
  
  export const rdsInsights = [
    {
      title: "VPC Endpoint and NAT Gateway Usage",
      points: [
        "The dataset highlights unused VPC endpoints and suboptimal NAT Gateway usage.",
        "Removing these and optimizing NAT Gateway instances can boost cost efficiency.",
      ],
    },
    {
      title: "Budget Oversight and Monitoring",
      points: [
        "Continuous monitoring of budget utilization is recommended.",
        "Proactive alerts for anomalies will help ensure adherence to budgets.",
      ],
    },
  ];
  