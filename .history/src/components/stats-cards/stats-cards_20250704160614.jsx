// ✅ StatsCard.jsx (Updated)
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { SvgColorImage } from 'src/components/svg-color/SvgColorImage';

export function StatsCard({ sx, icon_name, title, total, bg_gradient = '#FFA92E', ...other, Box}) {
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

      <SvgColorImage
        src={`/logo/${icon_name}`}
        sx={{
          position: 'absolute',
          top: 24,
          right: 20,
          width: 36,
          height: 36,
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

// ✅ SvgColorImage.jsx (new component)
import Box from '@mui/material/Box';

export const SvgColorImage = ({ src, sx, ...other }) => (
  <Box
    component="img"
    src={src}
    alt="icon"
    sx={{
      width: 36,
      height: 36,
      ...sx,
    }}
    {...other}
  />
);

// ✅ Keep SvgColor.jsx as-is (masked SVG for nav only)
// ✅ Your NavItem component remains untouched and still uses SvgColor.jsx
