import { useState } from 'react';

import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Box, Modal, Button, Tooltip, Typography } from '@mui/material';

export default function DownloadModal({ open, onClose }) {
  const [selectedBox, setSelectedBox] = useState(null);

  const boxes = [
    {
      id: 1,
      label: 'All Emails Result',
      icon: <CheckCircleIcon fontSize="medium" />,
      tooltip: 'Select to download all verified emails.',
    },
    {
      id: 2,
      label: 'Deliverable Emails',
      icon: <ListIcon fontSize="medium" />,
      tooltip: 'Select to download only deliverable emails.',
    },
    {
      id: 3,
      label: 'Undeliverable Emails',
      icon: <CloseIcon fontSize="medium" />,
      tooltip: 'Select to download undeliverable emails.',
    },
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: '600px',
          height: '513.36px',
          bgcolor: 'white',
          borderRadius: 2,
          pl:1,
          pt: 1, // 16px
          mx: 'auto',
          mt: '8%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box width="600" height="60" px="8px" py="8px" borderBottom='1px soli>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Download Verification Report
          </Typography>
        </Box>

        {/* 3 Boxes */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mb: 2,
            px: 1,
          }}
        >
          {boxes.map((box) => (
            <Tooltip key={box.id} title={box.tooltip} placement="top" arrow>
              <Box
                onClick={() => setSelectedBox(box.id)}
                sx={{
                  width: '178.68px',
                  height: '178.67px',
                  borderRadius: '8px',
                  border: selectedBox === box.id ? '2px solid #078DEE' : '1px solid #e0e0e0',
                  backgroundColor: selectedBox === box.id ? '#E6F7FF' : 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    border: selectedBox === box.id ? '2px solid #078DEE' : '1px solid black',
                    backgroundColor: selectedBox ? undefined : '#f9f9f9',
                  },
                }}
              >
                <Box
                  sx={{
                    color: selectedBox === box.id ? '#078DEE' : '#637381',
                    mb: 1,
                  }}
                >
                  {box.icon}
                </Box>
                <Typography
                  sx={{
                    color: selectedBox === box.id ? '#078DEE' : '#637381',
                    fontWeight: 700,
                    fontSize: '14px',
                  }}
                >
                  {box.label}
                </Typography>
              </Box>
            </Tooltip>
          ))}
        </Box>

        {/* Info text */}
        <Typography
          variant="body2"
          sx={{
            color: '#637381',
            fontSize: '13px',
            lineHeight: '20px',
            px: 1,
            mb: 2,
          }}
        >
          You can download email verification results by selecting one of the three tabs: All
          Emails, Deliverable Emails, or Undeliverable Emails. Simply choose a tab and click
          Download CSV to obtain the report.
          <br />
          <br />
          Note: The verified list and verification reports will be automatically deleted after 15
          days.{' '}
          <a
            href="#"
            style={{
              color: '#1976d2',
              textDecoration: 'underline',
              cursor: 'pointer',
            }}
          >
            Learn more
          </a>
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 2,
            px: 1,
          }}
        >
          <Button
            variant="outlined"
            color="primary"
            onClick={() => console.log('Download CSV clicked')}
          >
            Download CSV
          </Button>
          <Button
            variant="outlined"
            sx={{ color: 'black', borderColor: 'black' }}
            onClick={onClose}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
