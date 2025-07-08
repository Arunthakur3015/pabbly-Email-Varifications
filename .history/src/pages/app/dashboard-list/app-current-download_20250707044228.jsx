import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ chart, ...other }) {
  const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

  const chartSeries = [14523, 54896, 53345, 12245];

  const chartLabels = [
    'Unknown Emails',
    'Accept-all Emails',
    'Undeliverable Emails',
    'Deliverable Emails',
  ];

  const chartOptions = useChart({
    chart: { sparkline: { enabled: true } },
    colors: chartColors,
    labels: chartLabels,
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
              label: 'Total Emails',
              formatter: () => '188,245',
            },
          },
        },
      },
    },
    ...chart?.options,
  });

  return (
    <Card {...other}>
      <CardHeader title="List 1" sx={{ mb: 2 }} />
      <Divider />

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

      {/* summary section added here, like your screenshot */}

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          px: 3,
          pb: 3,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
            fontWeight: 'bold',
          }}
        >
          <Box>Total Emails</Box>
          <Box>188,245</Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
            mb: 0.5,
          }}
        >
          <Box>Unknown Emails</Box>
          <Box>53,345</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
            mb: 0.5,
          }}
        >
          <Box>Deliverable Emails</Box>
          <Box>156,454</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
            mb: 0.5,
          }}
        >
          <Box>Undeliverable Emails</Box>
          <Box>12,244</Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Box>Accept-all Emails</Box>
          <Box>43,313</Box>
        </Box>
      </Box>
    </Card>
  );
}
