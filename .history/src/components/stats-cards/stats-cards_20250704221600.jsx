import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export function StatsCard({ sx, icon_name, tooltip_titlet, total, bg_gradient = '#FFA92E', ...other }) {
  const theme = useTheme();

  return (
    <Tooltip
      title={tooltip_title}
      placement="top"
      arrow
      enterDelay={300}
      leaveDelay={100}
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: 'background.paper',
            color: 'text.primary',
            boxShadow: 3,
            borderRadius: 1,
            px: 1.5,
            py: 1,
            fontSize: 13,
          },
        },
        arrow: {
          sx: {
            color: 'background.paper',
          },
        },
      }}
    >
      <Card
        sx={{
          py: 3,
          pl: 3,
          pr: 2.5,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
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

        <Box
          component="img"
          src={`/logo/${icon_name}`}
          alt="icon"
          sx={{
            width: 36,
            height: 36,
            position: 'absolute',
            top: 24,
            right: 20,
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
    </Tooltip>
  );
}
