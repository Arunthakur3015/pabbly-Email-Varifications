import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';
import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ chart, ...other }) {
  const chartColors = ['#22C55E', '#FF5630', '#00B8D9', '#FFAB00'];

  const chartSeries = [156454, 12244, 43313, 53345];

  const chartLabels = [
    'Deliverable Emails',
    'Undeliverable Emails',
    'Accept-all Emails',
    'Unknown Emails',
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
          formatter: (seriesName) => seriesName,
        },
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
      <CardHeader title="List One" />

      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={232}
        height={231}
        sx={{ my: 6, mx: 'auto' }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box sx={{ px: '24px', py: 2 }}>
        {/* Dashed top divider */}
        <Divider sx={{ borderStyle: 'dashed', mb: 1 }} />

        {/* Total Emails - Extra Bold */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 1,
          }}
        >
          <Typography variant="subtitle2" fontWeight={800}>
            Total Emails
          </Typography>
          <Typography variant="subtitle2" fontWeight={800}>
            188,245
          </Typography>
        </Box>

        {/* Dashed below divider */}
        <Divider sx={{ borderStyle: 'dashed', mb: 2 }} />

        {/* Deliverable */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Deliverable Emails</Typography>
          <Typography variant="body2">156,454</Typography>
        </Box>

        {/* Undeliverable */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Undeliverable Emails</Typography>
          <Typography variant="body2">12,244</Typography>
        </Box>

        {/* Accept-all */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body2">Accept-all Emails</Typography>
          <Typography variant="body2">43,313</Typography>
        </Box>

        {/* Unknown */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="body2">Unknown Emails</Typography>
          <Typography variant="body2">53,345</Typography>
        </Box>
      </Box>
    </Card>
  );
}
