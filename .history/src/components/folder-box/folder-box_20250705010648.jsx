import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const folders = [
  'Home',
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billing',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
];

export default function FolderListBox() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  return (
    <Box
      sx={{
        width: 320.2,
        height: 458.2,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Header and folder list container */}
      <Box>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="subtitle1" fontWeight="600" fontSize='18px'>
            Folders
          </Typography>
          <IconButton
            size="small"
            sx={{
              width: 36,
              height: 36,
              backgroundColor: '#007FFF',
              color: 'white',
              '&:hover': { backgroundColor: '#005FCC' },
            }}
          >
            <AddIcon fontSize="small" />
          </IconButton>
        </Box>

        {/* Folder List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {folders.map((name, index) => (
            <Box
              key={name}
              onClick={() => handleClick(index)}
              sx={{
                width: 272.2,
                height: 37.575,
                px: '8px',
                py: '6.4px',
                borderRadius: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                cursor: 'pointer',
                bgcolor: selectedIndex === index ? '#D7EDFC' : 'transparent',
                '&:hover': {
                  bgcolor: selectedIndex === index ? '#D7EDFC' : '#f4f6f8',
                },
              }}
            >
              <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>
                {name} <span style={{ color: '#9e9e9e' }}>(0)</span>
              </Typography>

              {name !== 'Home' && (
                <Tooltip title="Number of lists in this folder" arrow placement="top">
                  <IconButton size="small">
                    <MoreVertIcon fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Trash at bottom */}
      <Box
        onClick={() => handleClick(folders.length)}
        sx={{
          width: 272.2,
          height: 37.575,
          px: 1,
          py: '6.4px',
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          mt: 2,
          bgcolor: selectedIndex === folders.length ? '#D7EDFC' : 'transparent',
          '&:hover': {
            bgcolor: selectedIndex === folders.length ? '#D7EDFC' : '#f4f6f8',
          },
        }}
      >
        <Typography variant="body2" noWrap sx={{ flexGrow: 1 }}>
          Trash <span style={{ color: '#9e9e9e' }}>(0)</span>
        </Typography>
      </Box>
    </Box>
  );
}
