import { useState } from 'react';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ title, subheader, chart, ...other }) {
  const chartColors = ['#22C55E', '#FF5630', '#00B8D9', '#FFAB00'];

  const chartSeries = chart.series.map((item) => item.value);

  const total = chartSeries.reduce((a, b) => a + b, 0);

  const [hoverData, setHoverData] = useState(null);

  const chartOptions = useChart({
    chart: {
      sparkline: { enabled: true },
      events: {
        dataPointMouseEnter: function (event, chartContext, config) {
          const label = chart.series[config.dataPointIndex].label;
          const value = chart.series[config.dataPointIndex].value;
          setHoverData({ label, value });
        },
        mouseLeave: function () {
          setHoverData(null);
        },
      },
    },
    colors: chartColors,
    labels: chart.series.map((item) => item.label),
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
              formatter: () => (hoverData ? hoverData.label : 'Total Emails'),
            },
            value: {
              show: true,
              offsetY: 10,
              formatter: () => (hoverData ? fNumber(hoverData.value) : fNumber(total)),
            },
            total: {
              show: false,
            },
          },
        },
      },
    },
    ...chart.options,
  });

  return (
    <Card {...other} sx={{ width: 535.11, height: 652.56 }}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={260}
        height={260}
        sx={{ my: 6, mx: 'auto' }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          px: 3,
          pb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="subtitle2">Total Emails</Typography>
        <Typography variant="subtitle1">{fNumber(total)}</Typography>
      </Box>

      <ChartLegends
        labels={chart.series.map((s) => s.label)}
        colors={chartColors}
        values={chart.series.map((s) => fNumber(s.value))}
        sx={{ px: 3, pb: 3, alignItems: 'flex-start' }}
      />
    </Card>
  );
}
