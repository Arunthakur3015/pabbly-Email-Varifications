import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Tooltip, Typography, IconButton } from '@mui/material';

import CustomModal from './plus-modal'; // ✅ Import Modal

const folders = [
  'Home',
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billin...',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
];

export default function FolderListBox() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false); // ✅ Modal state

  return (
    <Box
      sx={{
        width: 320.2,
        height: 458.2,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Top Header */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 1,
          }}
        >
          <Typography fontWeight={600} fontSize={18} mt="10px">
            Folders
          </Typography>
          <IconButton
            onClick={() => setOpenModal(true)} 
            sx={{
              width: 36,
              height: 36,
              bgcolor: '#007BFF',
              color: '#fff',
              borderRadius: '8px',
              '&:hover': { bgcolor: '#0066cc' },
            }}
          >
            <AddIcon sx={{ fontSize: 24 }} />
          </IconButton>
        </Box>

        {/* Dashed Divider */}
        <Box
          sx={{
            color: 'grey',
            opacity: 0.5,
            borderBottom: '1px dashed #ccc',
            mt: '16px',
            mb: '16px',
          }}
        />

        {/* Folder List */}
        <Box display="flex" flexDirection="column" gap="4px">
          {folders.map((name, index) => (
            <Tooltip title="Number of lists in this folder" placement="top" arrow key={name}>
              <Box
                onClick={() => setSelectedIndex(index)}
                sx={{
                  width: 272.2,
                  height: 37.575,
                  px: '16px',
                  py: '12px',
                  borderRadius: '4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  bgcolor: selectedIndex === index ? '#D7EDFC' : 'transparent',
                  cursor: 'pointer',
                  '&:hover': {
                    bgcolor: selectedIndex === index ? '#D7EDFC' : '#F4F6F8',
                  },
                }}
              >
                <Typography fontSize="14px" fontWeight={700} noWrap>
                  {name}
                  <Typography fontSize="14px" color="grey" ml="4px" component="span">
                    {' '}
                    (0)
                  </Typography>
                </Typography>

                {name !== 'Home' && (
                  <IconButton size="small">
                    <MoreVertIcon sx={{ fontSize: 18 }} />
                  </IconButton>
                )}
              </Box>
            </Tooltip>
          ))}
        </Box>
      </Box>

      {/* Trash Section */}
      <Box>
        <Box
          sx={{
            borderTop: '1px dashed #ccc',
            mt: '16px',
            mb: '4px',
          }}
        />
        <Box
          sx={{
            width: 272.2,
            height: 37.575,
            px: 1,
            py: 0.5,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Typography fontSize="14px" fontWeight={800} pt="12px">
            Trash (0)
          </Typography>
        </Box>
      </Box>

      {/* Modal Component */}
      <CustomModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        title="Create Folder"
        inputLabel="Folder Name"
        placeholder="Enter folder name here."
        confirmText="Create Folder"
        cancelText="Cancel"
      />
    </Box>
  );
}
