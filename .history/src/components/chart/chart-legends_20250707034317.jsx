import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledLegend = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 10,
  fontSize: theme.typography.pxToRem(13),
  fontWeight: theme.typography.fontWeightMedium,
}));

const StyledDot = styled(Box)(() => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  backgroundColor: 'currentColor',
  flexShrink: 0,
}));

// ----------------------------------------------------------------------

export function ChartLegends({ labels = [], colors = [], values, sublabels, icons, ...other }) {
  return (
    <Stack
      direction="column"
      spacing={2}
      sx={{
        pl: 3, // 3 * 8 = 24px left padding
      }}
      {...other}
    >
      {labels?.map((label, index) => (
        <Stack key={label} spacing={0.5}>
          <StyledLegend>
            {icons?.length ? (
              <Box
                component="span"
                sx={{ color: colors[index], '& svg, & img': { width: 20, height: 20 } }}
              >
                {icons[index]}
              </Box>
            ) : (
              <StyledDot sx={{ color: colors[index] }} />
            )}

            <Box component="span">
              {label}
              {sublabels && <> {`(${sublabels[index]})`}</>}
            </Box>
          </StyledLegend>

          {values && (
            <Box sx={{ typography: 'h6', color: 'text.primary', pl: '22px' }}>
              {values[index]}
            </Box>
          )}
        </Stack>
      ))}
    </Stack>
  );
}
