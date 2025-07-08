import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

const StyledLegend = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
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
    <Box sx={{ pl: '24px', pr: '24px', width: '100%' }} {...other}>
      <Stack direction="column" spacing={2}>
        {labels?.map((label, index) => (
          <Box key={label}>
            <StyledLegend>
              {icons?.length ? (
                <Box
                  component="span"
                  sx={{
                    color: colors[index],
                    '& svg, & img': { width: 20, height: 20 },
                  }}
                >
                  {icons[index]}
                </Box>
              ) : (
                <StyledDot sx={{ color: colors[index] }} />
              )}

              <Box component="span">
                {label}
                {sublabels && ` (${sublabels[index]})`}
              </Box>
            </StyledLegend>

            {values && (
              <Box
                sx={{
                  pl: '20px', // 12 (dot) + 8 (gap)
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'text.primary',
                  mt: '2px',
                }}
              >
                {values[index]}
              </Box>
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
