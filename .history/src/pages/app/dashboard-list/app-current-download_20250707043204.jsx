import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ title, subheader, chart, ...other }) {
  const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

  const chartSeries = chart.series.map((item) => item.value);

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    labels: chart.series.map((item) => item.label),
    stroke: { width: 0 },
    tooltip: {
      y: {
        formatter: (value) => fNumber(value),
        title: { formatter: (seriesName) => `${seriesName}` },
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: '72%',
          labels: {
            value: { formatter: (value) => fNumber(value) },
            total: {
              show: false, // Hide default center text
            },
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other}>
      {/* Optional Header */}
      <CardHeader title={title} subheader={subheader} />

      {/* Total Emails Box on Top */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          px: 3,
          pt: 2,
          fontWeight: 700,
        }}
      >
        <Typography variant="subtitle2">Total Emails</Typography>
        <Typography variant="subtitle2">245,869</Typography>
      </Box>

      {/* Donut Chart */}
      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={232}
        height={231}
        sx={{ my: 6, mx: 'auto' }}
      />

      {/* Dashed Divider */}
      <Divider sx={{ borderStyle: 'dashed' }} />

      {/* Legends Section */}
      <Box
        sx={{
          width: '535.11px',
          height: '240px',
          px: '24px',
          boxSizing: 'border-box',
        }}
      >
        <ChartLegends
          labels={chartOptions?.labels}
          colors={chartColors}
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
          }}
        />
      </Box>
    </Card>
  );
}
