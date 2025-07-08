import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ chart, ...other }) {
  const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

  const chartSeries = [53345, 156454, 12244, 43313];

  const chartLabels = [
    'Unknown Emails',
    'Deliverable Emails',
    'Undeliverable Emails',
    'Accept-all Emails',
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
          size: '73%',
          labels: {
            show: true,
            total: {
              show: true,
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

      {/* chart first */}
      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={230}
        height={230}
        sx={{ my: 7, mx: 'auto' }}
      />

      <Divider sx={{ borderStyle: 'dashed' ,mt:3}} />

      {/* summary below */}
      <Box
        sx={{
          px: 3,
          py: 2,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
            mt:2.5,
            fontWeight: 'bold',
          }}
        >
          <Box sx={{fontSize:'14px'}}>Total Emails</Box>
          <Box sx={{fontSize:'14px'}}>188,245</Box>
        </Box>
        <Divider sx={{ borderStyle: 'dashed' }} />
        {/* colored bullets with text */}
        {[
          { color: '#FFAB00', label: 'Unknown Emails', value: 53345 },
          { color: '#22C55E', label: 'Deliverable Emails', value: 156454 },
          { color: '#FF5630', label: 'Undeliverable Emails', value: 12244 },
          { color: '#00B8D9', label: 'Accept-all Emails', value: 43313 },
        ].map((item) => (
          <Box
            key={item.label}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              color: 'text.secondary',
              mb: 1.5,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box
                sx={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  bgcolor: item.color,
                }}
              />
              {item.label}
            </Box>
            <Box>{fNumber(item.value)}</Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
