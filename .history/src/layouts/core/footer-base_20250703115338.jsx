import React from 'react';
import { useTheme } from '@emotion/react';
import { useLocation } from 'react-router';

import { varAlpha } from 'src/theme/styles';

import { FooterSection } from './footer-section';

export function FooterBase({ sx, className }) {
  const theme = useTheme();
  const location = useLocation();

  return (
    <FooterSection
      sx={{
        backgroundColor: 'common.white',
        border: '1px dashed',
        height: '40px',
        borderColor: varAlpha(theme.vars.palette.grey['500Channel'], 0.3),
        ...sx,
      }}
    />
  );
}
//footerbase