  import Box from '@mui/material/Box';
  import Card from '@mui/material/Card';
  import Divider from '@mui/material/Divider';
  import CardHeader from '@mui/material/CardHeader';

  import { fNumber } from 'src/utils/format-number';

  import { Chart, useChart, ChartLegends } from 'src/components/chart';

  // ----------------------------------------------------------------------

  export function AppCurrentDownload({ title, subheader, ...other }) {
    const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

    const chartSeries = [78323, 40352, 56787, 40000];

    const chartLabels = [
      'Unknown Emails',
      'Delivered Emails',
      'Undelivered Emails',
      'Accept All Emails',
    ];

    const chartOptions = useChart({
      chart: { sparkline: { enabled: true } },
      colors: chartColors,
      labels: chartLabels,
      stroke: { width: 0 },
      tooltip: {
        y: {
          formatter: (value) => fNumber(value),
          title: {
            formatter: (seriesName) => `${seriesName}`,
          },
        },
      },
      plotOptions: {
        pie: {
          donut: {
            size: '72%',
            labels: {
              show: true,
              name: {
                show: true,
                offsetY: -10,
              },
              value: {
                show: true,
                offsetY: 16,
                formatter: () => '188,245',
              },
              total: {
                show: true,
                label: 'Total Emails',
                formatter: () => '188,245',
              },
            },
          },
        },
      },
    });

    return (
      <Card {...other}>
        <CardHeader title={title} subheader={subheader} />

        <Chart
          type="donut"
          series={chartSeries}
          options={chartOptions}
          width={232}
          height={231}
          sx={{ my: 6, mx: 'auto' }}
        />

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Box
          sx={{
            width: '535.11px',
            height: '652.56px',
            px: '24px',
            boxSizing: 'border-box',
          }}
        >
          <ChartLegends
            labels={chartLabels}
            colors={chartColors}
            values={chartSeries.map((value) => fNumber(value))}
            sx={{
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              width: '100%',
              gap: 2,
            }}
          />
        </Box>
      </Card>
    );
  }
