import Box from '@mui/material/Box'; 
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export function CreditCard({
  sx,
  icon_name,
  tooltip_title,
  total,
  bg_gradient = '#FFA92E',
  title,
  ...other
}) {
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
            backgroundColor: 'black',
            color: 'white',
            boxShadow: 3,
            borderRadius: 1,
            fontSize: 11,
          },
        },
        arrow: {
          sx: {
            color: 'black',
          },
        },
      }}
    >
      <Card
        sx={{
          py: 3,
          px: 2,
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          width: { xs: '100%', sm: 'auto' },
          minWidth: 0,
          ...sx,
        }}
        {...other}
      >
        {/* Content */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 22, sm: 'h3.fontSize' },
              fontWeight: 600,
              wordBreak: 'break-word',
            }}
          >
            {total}
          </Typography>

          <Typography
            noWrap
            variant="subtitle2"
            component="div"
            sx={{
              color: 'text.secondary',
              fontSize: { xs: 13, sm: 'subtitle2.fontSize' },
              mt: 0.5,
            }}
          >
            {title}
          </Typography>
        </Box>

        {/* Icon */}
        <Box
          component="img"
          src={`/logo/${icon_name}`}
          alt="icon"
          sx={{
            width: { xs: 28, sm: 36 },
            height: { xs: 28, sm: 36 },
            position: 'absolute',
            top: { xs: 12, sm: 24 },
            right: { xs: 12, sm: 20 },
          }}
        />

        {/* Gradient background decoration */}
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
