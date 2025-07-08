import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ chart, ...other }) {
  const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

  const chartSeries = [53345, 43313, 12244, 156454];

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
        },
      },
    },
    ...chart?.options,
  });

  return (
    <Card {...other}>
      <CardHeader title="List 1" sx={{ mb: 2 }} />
      <Divider />

      {/* Total Emails summary at top */}
      <Box
        sx={{
          px: 3,
          pt: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="subtitle2" color="text.secondary">
          Total Emails
        </Typography>
        <Typography variant="h4">188,245</Typography>
      </Box>

      {/* chart */}
      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={232}
        height={231}
        sx={{ my: 4, mx: 'auto' }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      {/* legends */}
      <Box
        sx={{
          width: '100%',
          px: 3,
          boxSizing: 'border-box',
        }}
      >
        <ChartLegends
          labels={chartOptions.labels}
          colors={chartColors}
          sx={{
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            width: '100%',
          }}
        />
      </Box>

      <Divider sx={{ borderStyle: 'dashed', my: 2 }} />

      {/* details */}
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
