import React, { useState } from 'react';

import { Box, Tooltip, Typography } from '@mui/material';

import { Iconify } from '../iconify'; // ya jo tera icon path ho
// agar default import nahi hai to => import { Iconify } from 'src/components/iconify';

export default function DownloadModal() {
  const [active, setActive] = useState('all');

  const boxes = [
    {
      key: 'all',
      label: 'All Emails Result',
      tooltip: 'Select to download the list of all emails.',
      icon: 'ic:baseline-check-circle',
    },
    {
      key: 'deliverable',
      label: 'Deliverable Emails',
      tooltip: 'Select to download the list of emails verified as valid and deliverable.',
      icon: 'ic:baseline-list-alt',
    },
    {
      key: 'undeliverable',
      label: 'Undeliverable Emails',
      tooltip: 'Select to download the list of emails that are invalid or undeliverable.',
      icon: 'ic:baseline-cancel',
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h6" sx={{ mb: 2 }}>
        Download Verification Report
      </Typography>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
        }}
      >
        {boxes.map((b) => {
          const isActive = active === b.key;
          return (
            <Tooltip title={b.tooltip} arrow placement="top" key={b.key}>
              <Box
                onClick={() => setActive(b.key)}
                sx={{
                  cursor: 'pointer',
                  width: '178.68px',
                  height: '178.67px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: isActive ? '2px solid #078DEE' : '1px solid #e0e0e0',
                  borderRadius: '8px',
                  backgroundColor: isActive ? '#E0F7FF' : '#fff',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: isActive ? '2px solid #078DEE' : '1px solid black',
                    backgroundColor: isActive ? '#E0F7FF' : '#f5f5f5',
                  },
                }}
              >
                <Iconify
                  icon={b.icon}
                  width={30}
                  color={isActive ? '#078DEE' : '#666'}
                  style={{ marginBottom: 8 }}
                />
                <Typography
                  sx={{
                    color: isActive ? '#078DEE' : '#666',
                    fontWeight: 600,
                    fontSize: '14px',
                    textAlign: 'center',
                  }}
                >
                  {b.label}
                </Typography>
              </Box>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}
