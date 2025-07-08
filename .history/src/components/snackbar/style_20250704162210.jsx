import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { StyledSnackbar, StyledIconButton } from './SnackbarStyle';

<Snackbar open={open} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
  <StyledSnackbar
    message={
      <>
        <CheckCircleIcon sx={{ color: '#22C55E', width: 20, height: 20, marginRight: 8 }} />
        <span style={{ fontSize: 14, fontWeight: 500 }}>Successfully uploaded</span>
      </>
    }
    action={
      <StyledIconButton onClick={handleClose}>
        <CloseIcon />
      </StyledIconButton>
    }
  />
</Snackbar>
