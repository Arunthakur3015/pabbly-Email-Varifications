import { Box, Typography } from '@mui/material';

export default function DummyModalContent() {
  const boxSx = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    appearance: 'none',
    fontFamily: `"Public Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    fontWeight: 700,
    fontSize: '0.875rem',
    lineHeight: 1.71429,
    textTransform: 'unset',
    minWidth: '64px',
    color: 'inherit',
    boxShadow: 'none',
    backgroundColor: 'primary.lighter', // MUI theme color
    outline: 0,
    margin: 0,
    textDecoration: 'none',
    transition: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    padding: '16px',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'primary.main',
    borderRadius: '8px',
    width: '178.68px',
    height: '178.67px',
  };

  return (
    <Box
      sx={{
        width: 600,
        height: 513.46,
        bgcolor: 'background.paper',
        p: 2,
        borderRadius: 2,
      }}
    >
      {/* heading */}
      <Box
        sx={{
          height: 60,
          px: 2,
          display: 'flex',
          alignItems: 'center',
          borderBottom: '1px solid #e0e0e0',
        }}
      >
        <Typography variant="h6">Modal Heading</Typography>
      </Box>

      {/* 3 boxes below heading */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 2,
          px: 2,
        }}
      >
        <Box sx={boxSx}>Box 1</Box>
        <Box sx={boxSx}>Box 2</Box>
        <Box sx={boxSx}>Box 3</Box>
      </Box>
    </Box>
  );
}
