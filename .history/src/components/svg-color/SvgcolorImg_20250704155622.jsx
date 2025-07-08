// components/svg-color/SvgColorImage.jsx
import Box from '@mui/material/Box';

export const SvgColorImage = ({ src, sx, ...other }) => (
  <Box
    component="img"
    src={src}
    alt="icon"
    sx={{
      width: 36,
      height: 36,
      position: 'absolute',
      top: 24,
      right: 20,
      ...sx,
    }}
    {...other}
  />
);
