import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

const chartConfigs = [
  {
    id: 'serviceCostPieChart',
    title: 'Service Cost Distribution',
    config: {
      type: 'pie',
      data: {
        labels: [
          'Amazon Elastic Compute Cloud - Compute',
          'Amazon Elastic Container Service for Kubernetes',
          'EC2 - Other',
          'Amazon Virtual Private Cloud',
          'Amazon Relational Database Service'
        ],
        datasets: [
          {
            data: [414.44, 201.73, 168.58, 167.08, 166.76],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top', labels: { color: '#e2e8f0' } },
          title: {
            display: true,
            text: 'Top 5 Service Costs ($)',
            color: '#f1f5f9',
            font: { size: 16 }
          },
          datalabels: {
            color: '#fff',
            formatter: (value) => value + '$',
            font: { weight: 'bold' }
          }
        }
      }
    }
  },
  {
    id: 'monthlyCostBarChart',
    title: 'Monthly Cost Trends',
    config: {
      type: 'bar',
      data: {
        labels: ['Last Month', 'Current Month'],
        datasets: [
          {
            label: 'Cost ($)',
            data: [1314.86, 1220.29],
            backgroundColor: ['#36A2EB', '#FF6384'],
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Cost ($)',
              color: '#f1f5f9'
            },
            ticks: { color: '#e2e8f0' }
          },
          x: { ticks: { color: '#e2e8f0' } }
        },
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
          title: {
            display: true,
            text: 'Monthly Cost Comparison',
            color: '#f1f5f9',
            font: { size: 16 }
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#fff',
            formatter: (value) => value + '$',
            font: { weight: 'bold' }
          }
        }
      }
    }
  },
  {
    id: 'ec2CpuUsageChart',
    title: 'EC2 CPU Usage',
    config: {
      type: 'bar',
      data: {
        labels: [
          'i-07eb4a32c817b1bac',
          'i-0d87347d6d4fbdcd9',
          'i-04d635044fc685584',
          'i-0609aa0276c3366bf',
          'i-0662085c5de4f4f67',
          'i-0c8c7b5e584f60657',
          'i-037b6ff3777e40a6e'
        ],
        datasets: [
          {
            label: 'CPU Usage (%)',
            data: [1.34, 0.67, 5.56, 5.69, 4.28, 5.36, 2.96],
            backgroundColor: '#36A2EB',
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'CPU Usage (%)', color: '#f1f5f9' },
            ticks: { color: '#e2e8f0' }
          },
          x: { ticks: { color: '#e2e8f0' } }
        },
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
          title: {
            display: true,
            text: 'EC2 Instances CPU Usage',
            color: '#f1f5f9',
            font: { size: 16 }
          },
          datalabels: {
            anchor: 'end',
            align: 'top',
            color: '#fff',
            formatter: (value) => value + '%',
            font: { weight: 'bold' }
          }
        }
      }
    }
  },
  {
    id: 'unattachedVolumesChart',
    title: 'Unattached Volumes by Size',
    config: {
      type: 'pie',
      data: {
        labels: [
          'vol-0c19ad6f5240c08c8', 'vol-098d97fd4ba05718a', 'vol-093d26b84eb65b82f',
          'vol-0614af76e17a36c63', 'vol-093278c3b410182d1', 'vol-0b9558de5f58bbd6c',
          'vol-0b2a69079403e713e', 'vol-0834565249396d5b5', 'vol-09624880f48f24d0f',
          'vol-02d54706560b985df', 'vol-0582fa0e418cc1259'
        ],
        datasets: [
          {
            data: [3.0, 8.0, 10.0, 3.0, 5.0, 5.0, 5.0, 8.0, 3.0, 35.0, 5.0],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top', labels: { color: '#e2e8f0' } },
          title: { display: true, text: 'Unattached Volumes by Size (GiB)', color: '#f1f5f9', font: { size: 16 } },
          datalabels: { color: '#fff', formatter: (value) => value + ' GiB', font: { weight: 'bold' } }
        }
      }
    }
  },
  {
    id: 'oldSnapshotsAgeChart',
    title: 'Old Snapshots Age Distribution',
    config: {
      type: 'bar',
      data: {
        labels: ['<6 months', '6-12 months', '>12 months'],
        datasets: [
          {
            label: 'Number of Snapshots',
            data: [0, 2, 18],
            backgroundColor: '#FFCE56',
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            title: { display: true, text: 'Number of Snapshots', color: '#f1f5f9' },
            ticks: { color: '#e2e8f0' }
          },
          x: { ticks: { color: '#e2e8f0' } }
        },
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
          title: { display: true, text: 'Old Snapshots Age Distribution', color: '#f1f5f9', font: { size: 16 } },
          datalabels: { anchor: 'end', align: 'top', color: '#fff', formatter: (value) => value, font: { weight: 'bold' } }
        }
      }
    }
  },
  {
    id: 'estimatedSavingsChart',
    title: 'Estimated Savings by Service',
    config: {
      type: 'bar',
      data: {
        labels: ['Estimated Savings'],
        datasets: [
          {
            label: 'EC2',
            data: [107.56],
            backgroundColor: '#36A2EB',
            borderColor: '#ffffff',
            borderWidth: 1
          },
          {
            label: 'RDS',
            data: [70.0],
            backgroundColor: '#FF6384',
            borderColor: '#ffffff',
            borderWidth: 1
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: { stacked: true, ticks: { color: '#e2e8f0' } },
          y: {
            stacked: true,
            beginAtZero: true,
            title: { display: true, text: 'Savings ($/month)', color: '#f1f5f9' },
            ticks: { color: '#e2e8f0' }
          }
        },
        plugins: {
          legend: { labels: { color: '#e2e8f0' } },
          title: { display: true, text: 'Estimated Savings by Service ($/month)', color: '#f1f5f9', font: { size: 16 } },
          datalabels: { anchor: 'center', align: 'center', color: '#fff', formatter: (value) => value > 0 ? value + '$' : '', font: { weight: 'bold' } }
        }
      }
    }
  }
];

const ChartCard = ({ id, title, config }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
      chartRef.current = new Chart(canvasRef.current, config);
    }

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [config]);

  return (
    <div className="card p-6">
      <h3 className="text-xl font-semibold text-teal-400 mb-3">{title}</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
};

const CostVisualizations = () => {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-semibold text-white mb-4">Cost Visualizations</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {chartConfigs.map(({ id, title, config }) => (
          <ChartCard key={id} id={id} title={title} config={config} />
        ))}
      </div>
    </div>
  );
};

export default CostVisualizations;
