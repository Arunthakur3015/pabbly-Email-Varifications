import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

export function StatsCard({
  sx,
  icon_name,
  tooltip_title,
  total,
  bg_gradient = '#FFA92E',
  heading,
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
          py: { xs: 2, md: 3 },
          pl: { xs: 2, md: 3 },
          pr: { xs: 2, md: 2.5 },
          position: 'relative',
          overflow: 'hidden',
          cursor: 'pointer',
          minWidth: { xs: '100%', sm: 0 }, // mobile full width
          ...sx,
        }}
        {...other}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              typography: { xs: 'h5', md: 'h3' },
              wordBreak: 'break-word',
            }}
          >
            {total}
          </Box>
          <Typography
            variant="subtitle2"
            component="div"
            sx={{
              color: 'text.secondary',
              whiteSpace: { xs: 'normal', md: 'nowrap' },
            }}
          >
            {heading}
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
