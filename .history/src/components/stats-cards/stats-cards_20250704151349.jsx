import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { varAlpha } from 'src/theme/styles';

import { SvgColor } from 'src/components/svg-color';

// ----------------------------------------------------------------------

export function StatsCard({ sx, icon_name, title, total, bg_gradient = '#FFA92E', ...other }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        py: 3,
        pl: 3,
        pr: 2.5,
        position: 'relative',
        overflow: 'hidden',
        ...sx,
      }}
      {...other}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Box sx={{ typography: 'h3' }}>{total}</Box>
        <Typography noWrap variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
          {title}
        </Typography>
      </Box>

      {/* ✅ ICON */}
      <SvgColor
        src={`${CONFIG.site.basePath}/assets/icons/stats-card/${icon_name}`}
        sx={{
          width: 36,
          height: 36,
          position: 'absolute',
          top: 24,
          right: 20,
          bgcolor: bg_gradient,
          maskSize: '100% 100%',
          WebkitMaskSize: '100% 100%',
        }}
      />

      {/* ✅ BACKGROUND GRADIENT EFFECT */}
      <Box
        sx={{
          top: -44,
          width: 160,
          height: 160,
          right: -104,
          zIndex: -1,
          opacity: 0.12,
          borderRadius: 3,
          position: 'absolute',
          transform: 'rotate(40deg)',
          background: `linear-gradient(to right, ${bg_gradient} 0%, ${varAlpha(
            theme.vars.palette.grey[500],
            0
          )} 100%)`,
        }}
      />
    </Card>
  );
}
