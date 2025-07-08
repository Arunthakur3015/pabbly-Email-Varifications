// components/svg-color/SvgColorMasked.jsx
import Box from '@mui/material/Box';

export const SvgColorMasked = ({ src, sx, ...other }) => (
  <Box
    component="span"
    sx={{
      width: 24,
      height: 24,
      display: 'inline-flex',
      bgcolor: 'currentColor',
      mask: `url(${src}) no-repeat center / contain`,
      WebkitMask: `url(${src}) no-repeat center / contain`,
      ...sx,
    }}
    {...other}
  />
);
