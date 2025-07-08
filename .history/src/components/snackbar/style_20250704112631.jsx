import toast, { Toaster } from 'react-hot-toast';

import { styled } from '@mui/material/styles';

// ----------------------------------------------------------------------

export const StyledToaster = styled(Toaster)(({ theme }) => {
  const isLight = theme.palette.mode === 'light';

  return {
    [`& .react-hot-toast`]: {
      padding: 0,
      backgroundColor: 'transparent',
    },

    [`& .react-hot-toast > div`]: {
      boxShadow: theme.customShadows.z24,
      backgroundColor: theme.palette.background.paper,
      color: theme.palette.text.primary,
      borderRadius: Number(theme.shape.borderRadius) * 2,
      fontSize: 14,
      padding: theme.spacing(1.5),
      minWidth: 240,
      maxWidth: 320,
      display: 'flex',
      alignItems: 'flex-start',
      gap: theme.spacing(1.5),
    },

    [`& .react-hot-toast-icon`]: {
      marginTop: 4,
    },

    [`& .react-hot-toast-close-button`]: {
      top: 6,
      right: 6,
      position: 'absolute',
      padding: theme.spacing(0.5),
      color: theme.palette.text.disabled,
    },

    // STATES
    [`& .react-hot-toast-success`]: {
      borderLeft: `4px solid ${theme.palette.success.main}`,
    },

    [`& .react-hot-toast-error`]: {
      borderLeft: `4px solid ${theme.palette.error.main}`,
    },

    [`& .react-hot-toast-warning`]: {
      borderLeft: `4px solid ${theme.palette.warning.main}`,
    },

    [`& .react-hot-toast-info`]: {
      borderLeft: `4px solid ${theme.palette.info.main}`,
    },
  };
});
