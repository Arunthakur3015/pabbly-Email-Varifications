import React, { useState } from 'react';

import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import CardHeader from '@mui/material/CardHeader';

import { fNumber } from 'src/utils/format-number';

import { Chart, useChart, ChartLegends } from 'src/components/chart';

// ----------------------------------------------------------------------

export function AppCurrentDownload({ title, subheader, chart, ...other }) {
  const chartColors = ['#FFAB00', '#22C55E', '#FF5630', '#00B8D9'];

  const chartSeries = chart.series.map((item) => item.value);
  const chartLabels = chart.series.map((item) => item.label);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const chartOptions = useChart({
    chart: {
      sparkline: { enabled: true },
      events: {
        dataPointMouseEnter: (event, chartContext, config) => {
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
      enabled: false, // tooltips off, kyunki beech me dikhayenge hover value
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
              formatter: () =>
                hoveredIndex !== null
                  ? chartLabels[hoveredIndex]
                  : 'Total Emails',
              style: {
                fontSize: '16px',
                fontWeight: '600',
              },
            },
            value: {
              show: true,
              offsetY: 16,
              formatter: () =>
                hoveredIndex !== null
                  ? fNumber(chartSeries[hoveredIndex])
                  : '188,245',
              style: {
                fontSize: '20px',
                fontWeight: '700',
              },
            },
            total: {
              show: true,
              showAlways: true,
              label: 'Total Emails',
              formatter: () => '188,245',
            },
          },
        },
      },
    },
    ...chart.options,
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

      <ChartLegends
        labels={chartLabels}
        colors={chartColors}
        sx={{
          p: 3,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
    </Card>
  );
}
