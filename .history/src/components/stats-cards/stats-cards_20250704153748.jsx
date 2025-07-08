import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { SvgColor } from 'src/components/svg-color';

export function StatsCard({ sx, icon_name, title, total, bg_gradient = '#FFA92E', ...other }) {
  const theme = useTheme();

  return (
    <Card sx={{ py: 3, pl: 3, pr: 2.5, position: 'relative', overflow: 'hidden', ...sx }} {...other}>
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'h3' }}>{total}</Box>
        <Typography noWrap variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Box>

      <SvgColor
        src={`/assets/icons/stats-card/${icon_name}`}
        sx={{
          position: 'absolute',
          top: 24,
          right: 20,
          color: '#fff',
        }}
      />

      <Box
        sx={{
          position: 'absolute',
          top: -44,
          right: -104,
          width: 160,
          height: 160,
          borderRadius: 3,
          opacity: 0.12,
          transform: 'rotate(40deg)',
          background: `linear-gradient(to right, ${bg_gradient} 0%, transparent 100%)`,
        }}
      />
    </Card>
  );
}