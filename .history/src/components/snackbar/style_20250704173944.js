import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

import { toasterClasses } from './classes';

// ----------------------------------------------------------------------

export const StyledToaster = styled(Box)(({ theme }) => ({
  position: 'fixed',
  top: 16,
  right: 16,
  zIndex: 1300,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,

  [`& .${toasterClasses.toast}`]: {
    padding: '12px 16px',
    borderRadius: 8,
    boxShadow: theme.customShadows.z20,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    minWidth: 280,
    maxWidth: 400,
  },

  [`& .${toasterClasses.icon}`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    width: 32,
    height: 32,
    borderRadius: '50%',
    color: theme.palette.primary.main,
    backgroundColor: theme.palette.primary.lighter,
  },

  [`& .${toasterClasses.title}`]: {
    fontWeight: 600,
    fontSize: 14,
    marginBottom: 2,
  },

  [`& .${toasterClasses.description}`]: {
    fontSize: 13,
    color: theme.palette.text.secondary,
  },

  [`& .${toasterClasses.closeButton}`]: {
    marginLeft: 'auto',
    backgroundColor: theme.palette.action.hover,
    borderRadius: 6,
    padding: 6,
    color: theme.palette.text.primary,
    '&:hover': {
      backgroundColor: theme.palette.action.selected,
    },
  },
}));
