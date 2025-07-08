import { useState } from 'react';
import {
  Modal,
  Box,
  Typography,
  Tooltip,
} from '@mui/material';
import { Iconify } from '../iconify';

// style constants
const boxSize = {
  width: 178.68,
  height: 178.67,
};

const DownloadModal = ({ open, onClose }) => {
  const [selected, setSelected] = useState(null);

  const handleBoxClick = (index) => {
    setSelected(index);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: 600,
          height: 513.46,
          backgroundColor: '#fff',
          borderRadius: 2,
          p: 2,
          mx: 'auto',
          my: '10%',
          outline: 'none',
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* heading */}
        <Box
          sx={{
            height: 60,
            px: 2,
            borderBottom: '1px solid #ddd',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="subtitle1" fontWeight="bold">
            Download Verification Report
          </Typography>
        </Box>

        {/* 3 boxes */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            mt: 2,
          }}
        >
          {[
            { label: 'All Emails', icon: 'mdi:email' },
            { label: 'Deliverable', icon: 'mdi:check-circle' },
            { label: 'Undeliverable', icon: 'mdi:close-circle' },
          ].map((item, index) => (
            <Tooltip title={item.label} arrow key={item.label}>
              <Box
                onClick={() => handleBoxClick(index)}
                sx={{
                  ...boxSize,
                  border:
                    selected === index
                      ? '2px solid #61F3F3'
                      : '1px solid transparent',
                  borderRadius: '8px',
                  backgroundColor:
                    selected === index ? '#E0F7F7' : '#fff',
                  color:
                    selected === index ? '#078DEE' : '#000',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  '&:hover': {
                    border: selected === index
                      ? '2px solid #61F3F3'
                      : '1px solid black',
                    backgroundColor:
                      selected === index
                        ? '#E0F7F7'
                        : '#f4f4f4',
                  },
                }}
              >
                <Icon
                  icon={item.icon}
                  width={36}
                  height={36}
                  style={{
                    color:
                      selected === index
                        ? '#078DEE'
                        : '#000',
                  }}
                />
                <Typography fontWeight={700} fontSize="14px">
                  {item.label}
                </Typography>
              </Box>
            </Tooltip>
          ))}
        </Box>

        {/* info text */}
        <Box sx={{ mt: 3, px: 2 }}>
          <Typography variant="body2" color="text.secondary">
            You can download email verification results by selecting one of the
            three tabs: All Emails, Deliverable Emails, or Undeliverable Emails.
            Simply choose a tab and click Download CSV to obtain the report.
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 1, color: '#1976d2', textDecoration: 'underline', cursor: 'pointer' }}
          >
            Learn more
          </Typography>
        </Box>

        {/* bottom buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            mt: 'auto',
            gap: 2,
            pr: 2,
            pb: 2,
          }}
        >
          <button
            type="button"
            style={{
              border: '1px solid #000',
              background: '#fff',
              color: '#000',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
          <button
            type="button"
            style={{
              border: '1px solid #1976d2',
              background: '#1976d2',
              color: '#fff',
              padding: '8px 16px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Download CSV
          </button>
        </Box>
      </Box>
    </Modal>
  );
};

export default DownloadModal;
