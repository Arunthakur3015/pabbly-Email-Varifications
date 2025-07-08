// styles.jsx
import { styled } from '@mui/material/styles';
import { Toaster } from 'react-hot-toast';

export const StyledToaster = styled(Toaster)(({ theme }) => ({
  [`& .toaster-root`]: {
    zIndex: 1400,
  },

  [`& .toaster-toast`]: {
    minWidth: 320,
    maxWidth: 360,
    boxShadow: theme.customShadows.z24,
    borderRadius: theme.shape.borderRadius * 2,
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1.5, 1.5, 1.5, 1),
  },

  [`& .toaster-icon`]: {
    width: 36,
    height: 36,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing(1.5),
    borderRadius: '50%',
    backgroundColor: theme.palette.grey[200],
    flexShrink: 0,
  },

  [`& .toaster-iconSvg`]: {
    width: 20,
    height: 20,
    color: theme.palette.text.primary,
  },

  [`& .toaster-content`]: {
    flex: 1,
    overflow: 'hidden',
  },

  [`& .toaster-title`]: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.text.primary,
    lineHeight: 1.4,
  },

  [`& .toaster-description`]: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },

  [`& .toaster-closeButton`]: {
    width: 24,
    height: 24,
    marginLeft: theme.spacing(1),
    color: theme.palette.text.disabled,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },

  // Toast state colors
  [`& .toaster-success .toaster-icon`]: {
    backgroundColor: theme.palette.success.light,
  },
  [`& .toaster-error .toaster-icon`]: {
    backgroundColor: theme.palette.error.light,
  },
  [`& .toaster-warning .toaster-icon`]: {
    backgroundColor: theme.palette.warning.light,
  },
  [`& .toaster-info .toaster-icon`]: {
    backgroundColor: theme.palette.info.light,
  },
}));
