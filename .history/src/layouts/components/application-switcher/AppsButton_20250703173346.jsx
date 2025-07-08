import { useRef, useState } from 'react';

import {SvgIcon, IconButton} from '@mui/material';

import {pplicationSwitcher}  from 'src/components/application-switcher/ApplicationSwitcher';

 // ✅ path sahi karo

export default function AppsButton() {
  const buttonRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <IconButton
        ref={buttonRef}
        aria-label="Click here to access other apps from Pabbly."
        onClick={handleOpen}
        sx={{
          width: 40,
          height: 40,
          color: '#637381',
          borderRadius: '8px',
          border: '0.1px solid rgb(217, 224, 231)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <SvgIcon sx={{ width: 40, height: 40, pt: '10px', pl: '10px' }}>
          <path
            fill="currentColor"
            d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
          />
        </SvgIcon>
      </IconButton>

      <ApplicationSwitcher
        anchorEl={buttonRef.current}
        open={open}
        onClose={handleClose}
      />
    </>
  );
}