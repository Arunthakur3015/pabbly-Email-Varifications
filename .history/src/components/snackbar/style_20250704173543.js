import { Toaster } from 'react-hot-toast';

import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledToaster = styled(Toaster)(({ theme }) => ({
  [`& .snackbar__toast`]: {
    padding: '12px 16px',
    borderRadius: 8,
    boxShadow: theme.customShadows?.z20 || theme.shadows[20],
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    minWidth: 280,
    maxWidth: 400,
  },

  // Icon
  [`& .snackbar__icon`]: {
    width: 24,
    height: 24,
    flexShrink: 0,
  },

  // Text Content
  [`& .snackbar__content`]: {
    flexGrow: 1,
  },
  [`& .snackbar__title`]: {
    fontWeight: 600,
    marginBottom: 2,
  },
  [`& .snackbar__description`]: {
    fontSize: 13,
    color: theme.palette.text.secondary,
  },

  // Close Button
  [`& .snackbar__close-button`]: {
    padding: 4,
    marginLeft: 8,
    width: 24,
    height: 24,
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },

  // Different states (colors)
  [`& .snackbar__default`]: {
    backgroundColor: theme.palette.background.paper,
  },
  [`& .snackbar__info`]: {
    backgroundColor: theme.palette.info.light,
  },
  [`& .snackbar__success`]: {
    backgroundColor: theme.palette.success.light,
  },
  [`& .snackbar__warning`]: {
    backgroundColor: theme.palette.warning.light,
  },
  [`& .snackbar__error`]: {
    backgroundColor: theme.palette.error.light,
  },

  // Loading spinner (optional)
  [`& .snackbar__loading-icon`]: {
    width: 18,
    height: 18,
    border: '2px solid currentColor',
    borderRadius: '50%',
    borderTopColor: 'transparent',
    animation: 'spin 1s linear infinite',
  },

  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
}));
