import React, { useState } from 'react';

import { Box, Modal, Button, Tooltip, Typography } from '@mui/material';

import { Iconify } from '../iconify';

export default function DownloadModal({ open, onClose }) {
  const [active, setActive] = useState(null);

  const boxes = [
    {
      key: 'all',
      label: 'All Emails Result',
      tooltip: 'Select to download the list of all emails.',
      icon: 'eva:checkmark-circle-2-fill',
    },
    {
      key: 'deliverable',
      label: 'Deliverable Emails',
      tooltip: 'Select to download the list of emails verified as valid and deliverable.',
      icon: 'eva:file-text-outline',
    },
    {
      key: 'undeliverable',
      label: 'Undeliverable Emails',
      tooltip: 'Select to download the list of emails that are invalid or undeliverable.',
      icon: 'eva:close-circle-outline',
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 600,
          bgcolor: 'background.paper',
          p: 2,
          mx: 'auto',
          my: '10%',
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          Download Verification Report
        </Typography>

        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
          {boxes.map((b) => {
            const isActive = active === b.key;
            return (
              <Tooltip title={b.tooltip} placement="top" arrow key={b.key}>
                <Box
                  component="button"
                  type="button"
                  onClick={() => setActive(b.key)}
                  sx={{
                    cursor: 'pointer',
                    width: '178px',
                    height: '178px',
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

        <Typography
          sx={{
            fontSize: '13px',
            color: '#666',
            lineHeight: 1.6,
            maxWidth: '90%',
            mb: 2,
          }}
        >
          You can download email verification results by selecting one of the three tabs: All
          Emails, Deliverable Emails, or Undeliverable Emails. Simply choose a tab and click
          “Download CSV” to obtain the report.
          <br />
          Note: The verified list and verification reports will be automatically deleted after 15
          days.{' '}
          <Box
            component="span"
            sx={{
              color: '#1976d2',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Learn more
          </Box>
        </Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1,
          }}
        >
          <Button variant="outlined" color="primary">
            Download CSV
          </Button>
          <Button variant="outlined" sx={{ color: '#000' }} onClick={onClose}>
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
