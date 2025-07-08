import { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import CustomModal from 'src/components/verifysingleemail/verify-single'; 

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
  const [openModal, setOpenModal] = useState(false); 
  const handleModalOpen = () => setOpenModal(true);
  const handleModalClose = () => setOpenModal(false);

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
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 1,
          }}
        >
          <Typography fontWeight="600" fontSize="18px" mt="10px">
            Folders
          </Typography>
          <IconButton
            onClick={handleModalOpen}
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

        {/* Dashed Divider Below Header */}
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
                <Typography fontSize="14px" fontWeight="600" noWrap>
                  {name}{' '}
                  <Typography fontSize="14px" color="grey" ml="4px" component="span">
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
          <Typography fontSize="14px" fontWeight="600" pt="12px">
            Trash (0)
          </Typography>
        </Box>
      </Box>

      {/* ✅ Modal */}
      <CustomModal
        open={openModal}
        onClose={handleModalClose}
        title="Create Folder"
        inputLabel="Folder Name"
        placeholder="Enter folder name here."
        confirmText="Create Folder"
        cancelText="Cancel"
      />
    </Box>
  );
}
