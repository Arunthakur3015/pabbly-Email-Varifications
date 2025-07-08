import React, { useState } from 'react';

import {
  Box,
  List,
  Popover,
  Divider,
  SvgIcon,
  ListItem,
  InputBase,
  Typography,
  IconButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';

import { Iconify } from './iconify'; // ✅ path updated according to src/components

const applications = [
  {
    name: 'View All Application',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/allapps.svg',
  },
  {
    name: 'Pabbly Connect',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/connect.svg',
  },
  {
    name: 'Pabbly Subscription Billing',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/billing%202.svg',
  },
  {
    name: 'Pabbly Email Marketing',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/pem%202.svg',
  },
  {
    name: 'Pabbly Form Builder',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/pfb%202.svg',
  },
  {
    name: 'Pabbly Email Verification',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/pev%202.svg',
  },
  {
    name: 'Pabbly Hook',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/hook%201.svg',
  },
  {
    name: 'Pabbly Chatflow',
    icon: 'https://pabbly-email-verification-frontend.vercel.app/assets/icons/appsicon/chatflow.svg',
  },
];

export default function DropHeaderAppsButton() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const open = Boolean(anchorEl);
  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    setAnchorEl(null);
    setSearchTerm('');
  };

  const filteredApps = applications.filter((app) =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <IconButton
        aria-label="Click here to access other apps from Pabbly."
        onClick={handleClick}
        sx={{
          width: '40px',
          height: '40px',
          pt: 2.4,
          pl: 2.4,
          color: '#637381',
          border: '1px solid #D9E0E7',
          borderRadius: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&:hover': {
            bgcolor: 'action.hover',
          },
        }}
      >
        <SvgIcon sx={{ width: '40px', height: '40px' }}>
          <path
            fill="currentColor"
            d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1z"
          />
        </SvgIcon>
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        PaperProps={{
          sx: {
            width: 300,
            p: 0,
            borderRadius: 2,
            boxShadow: (theme) => theme.customShadows?.z20 ?? theme.shadows[3],
          },
        }}
      >
        <Box sx={{ p: 2, px: 3 }}>
          <Typography fontSize={15} fontWeight={600} color="#637381">
            Search Application
          </Typography>
        </Box>

        <Box sx={{ px: 2, pb: 2 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              height: 40,
              px: 1.5,
              py: 1,
              borderRadius: 1,
              border: '1px solid #ccc',
              '&:hover': { borderColor: 'black' },
              '&:focus-within': { borderColor: 'black' },
            }}
          >
            <Iconify
              icon="iconamoon:search"
              width={18}
              height={18}
              style={{ color: '#637381', marginRight: 8 }}
            />
            <InputBase
              placeholder="Search..."
              fullWidth
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ fontSize: 14 }}
            />
          </Box>
        </Box>

        <Divider sx={{ mb: 2, borderColor: '#ccc' }} />

        <Box sx={{ px: 3, pb: 2 }}>
          <List dense sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            {filteredApps.map((app) => (
              <ListItem
                key={app.name}
                button
                sx={{
                  px: 1,
                  py: 1,
                  borderRadius: 1,
                  '&:hover': { backgroundColor: '#1C252E12' },
                }}
              >
                <ListItemIcon sx={{ minWidth: 32 }}>
                  <img
                    src={app.icon}
                    alt={app.name}
                    style={{
                      width: 25,
                      height: 25,
                      objectFit: 'contain',
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/20';
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={app.name}
                  primaryTypographyProps={{
                    fontSize: 14,
                    fontWeight: 600,
                    noWrap: true,
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Popover>
    </>
  );
}
