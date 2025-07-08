import { styled} from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

export const StyledToaster = styled(Toaster)(({ theme }) => ({
  [`& .snackbar__toast`]: {
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

  [`& .snackbar__icon`]: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  [`& .snackbar__icon > svg`]: {
    width: 24,
    height: 24,
  },

  [`& .snackbar__content`]: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },

  [`& .snackbar__title`]: {
    fontWeight: 600,
    fontSize: 14,
    color: theme.palette.text.primary,
  },

  [`& .snackbar__description`]: {
    fontSize: 13,
    color: theme.palette.text.secondary,
  },

  [`& .snackbar__close__button`]: {
    marginLeft: 'auto',
    color: theme.palette.text.disabled,
    cursor: 'pointer',
  },

  // Success, error, etc.
  [`& .snackbar__success`]: {
    borderLeft: `4px solid ${theme.palette.success.main}`,
  },
  [`& .snackbar__error`]: {
    borderLeft: `4px solid ${theme.palette.error.main}`,
  },
  [`& .snackbar__info`]: {
    borderLeft: `4px solid ${theme.palette.info.main}`,
  },
  [`& .snackbar__warning`]: {
    borderLeft: `4px solid ${theme.palette.warning.main}`,
  },
}));
