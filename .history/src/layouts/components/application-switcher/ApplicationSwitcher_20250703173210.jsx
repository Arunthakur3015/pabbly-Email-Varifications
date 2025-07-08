import { useRef, useState } from 'react';

import AppsIcon from '@mui/icons-material/Apps'; // Example icon for your trigger button

import { Box, List,Popover, Divider,ListItem,TextField,  ListItemIcon, ListItemText,  } from '@mui/material';




export default function ApplicationSwitcher() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const applications = [
    { name: 'View All Applications', icon: '🟥' },
    { name: 'Pabbly Connect', icon: '🔌' },
    { name: 'Pabbly Subscription Billing', icon: '💲' },
    { name: 'Pabbly Email Marketing', icon: '📧' },
    { name: 'Pabbly Form Builder', icon: '📒' },
    { name: 'Pabbly Email Verification', icon: '✅' },
    { name: 'Pabbly Hook', icon: '🪝' },
    { name: 'Pabbly Chatflow', icon: '💬' },
  ];

  return (
    <>
      {/* Ye tumhara button hai – isko header me laga lena */}
      <Box
        ref={anchorRef}
        sx={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
        onClick={handleOpen}
      >
        <AppsIcon sx={{ color: 'text.primary' }} />
      </Box>

      <Popover
        open={open}
        anchorEl={anchorRef.current}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{
          sx: {
            width: 280,
            p: 2,
            borderRadius: 2,
            boxShadow: 3,
          },
        }}
      >
        <TextField
          placeholder="Search Application"
          size="small"
          fullWidth
          sx={{ mb: 1 }}
        />

        <Divider sx={{ mb: 1 }} />

        <List sx={{ maxHeight: 400, overflowY: 'auto' }}>
          {applications.map((app) => (
            <ListItem
              button
              key={app.name}
              sx={{
                borderRadius: 1,
                mb: 0.5,
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              onClick={() => {
                console.log(Navigate to ${app.name}); // yahan navigation handle karo
                handleClose();
              }}
            >
              <ListItemIcon sx={{ minWidth: 32 }}>{app.icon}</ListItemIcon>
              <ListItemText primary={app.name} />
            </ListItem>
          ))}
        </List>
      </Popover>
    </>
  );
}