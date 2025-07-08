import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ title, subheader, ...other }) {
  const chartColors = ['#22C55E', '#FF5630', '#00B8D9', '#FFAB00'];

  const chartSeries = [156454, 12244, 43313, 53345];

  const chartLabels = [
    'Deliverable Emails',
    'Undeliverable Emails',
    'Accept-all Emails',
    'Unknown Emails',
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chartOptions = useChart({
    chart: {
      sparkline: { enabled: true },
      events: {
        dataPointMouseEnter: (_, __, config) => {
          setHoveredIndex(config.dataPointIndex);
        },
        dataPointMouseLeave: () => {
          setHoveredIndex(null);
        },
      },
    },
    colors: chartColors,
    labels: chartLabels,
    stroke: { width: 0 },
    tooltip: {
      enabled: true,
      y: {
        formatter: (val) => fNumber(val),
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
            show: true,
            name: {
              show: true,
              offsetY: -10,
              formatter: () => (hoveredIndex !== null ? chartLabels[hoveredIndex] : 'Total Emails'),
              style: {
                fontSize: '15px',
                fontWeight: 600,
              },
            },
            value: {
              show: true,
              offsetY: 10,
              formatter: () =>
                hoveredIndex !== null
                  ? fNumber(chartSeries[hoveredIndex])
                  : fNumber(chartSeries.reduce((a, b) => a + b, 0)),
              style: {
                fontSize: '20px',
                fontWeight: 700,
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total Emails',
              formatter: () => fNumber(chartSeries.reduce((a, b) => a + b, 0)),
            },
          },
        },
      },
    },
    ...other.chart?.options,
  });

  return (
    <Card sx={{ width: 535.11, height: 652.56 }}>
      <CardHeader title={title} subheader={subheader} />

      <Chart
        type="donut"
        series={chartSeries}
        options={chartOptions}
        width={232}
        height={232}
        sx={{ my: 6, mx: 'auto' }}
      />

      <Divider sx={{ borderStyle: 'dashed' }} />

      <Box
        sx={{
          px: '24px',
          pb: 3,
        }}
      >
        <ChartLegends
          labels={chartLabels}
          colors={chartColors}
          values={chartSeries.map((val) => fNumber(val))}
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
