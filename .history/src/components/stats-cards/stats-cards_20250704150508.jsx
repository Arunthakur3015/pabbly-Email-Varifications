import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

// ----------------------------------------------------------------------

export function StatsCard({
  sx,
  icon_color,
  icon_name,
  title,
  total,
  color = 'warning',
  ...other
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{ py: 3, pl: 3, pr: 2.5, position: 'relative', overflow: 'hidden', ...sx }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'h3' }}>{total}</Box>
        <Typography noWrap variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Box>

      <Box
        component="img"
        src={`${CONFIG.site.basePath}/logo/${icon_name}`}
        sx={{
          top: 24,
          right: 20,
          width: 36,
          height: 36,
          position: 'absolute',
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />

      <Box
        sx={{
          top: -44,
          width: 160,
          zIndex: -1,
          height: 160,
          right: -104,
          opacity: 0.12,
          borderRadius: 3,
          position: 'absolute',
          transform: 'rotate(40deg)',
          background: `linear-gradient(120deg,$bg)`,
        }}
      />
    </Card>
  );
}
