// src/components/folder-box/folder-box.jsx

import React from 'react';

import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const folders = [
  'Pabbly Connect',
  'Main Folder',
  'Pabbly Subscription Billing',
  'Pabbly Email Marketing',
  'Pabbly Form Builder',
  'Pabbly Hook',
];

export default function FolderListBox() {
  return (
    <Box
      sx={{
        width: 320.2,
        height: 458.2,
        p: 3,
        bgcolor: 'background.paper',
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: 1,
        }}
      >
        <Typography variant="subtitle1" fontWeight={600}>
          Folders
        </Typography>
        <IconButton size="small" sx={{ bgcolor: '#007AFF', color: 'white', width: 28, height: 28 }}>
          <AddIcon sx={{ fontSize: 20 }} />
        </IconButton>
      </Box>

      <Divider sx={{ mb: 1 }} />

      <Box
        sx={{
          px: 1,
          py: 0.5,
          borderRadius: 1,
          cursor: 'pointer',
          '&:hover': { bgcolor: 'action.hover' },
        }}
      >
        <Typography fontSize={14}>Home</Typography>
      </Box>

      {folders.map((name, index) => (
        <Tooltip key={name} title="Number of lists in this folder" placement="top" arrow>
          <Box
            sx={{
              mt: 1,
              px: 1,
              py: 0.8,
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              bgcolor: index === 1 ? 'action.selected' : 'transparent',
              '&:hover': { bgcolor: 'action.hover' },
            }}
          >
            <Typography
              sx={{
                fontSize: 14,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {name}{' '}
              <Typography component="span" sx={{ color: 'text.secondary', fontSize: 13 }}>
                {' '}
                (0)
              </Typography>
            </Typography>
            <IconButton size="small">
              <MoreVertIcon sx={{ fontSize: 18 }} />
            </IconButton>
          </Box>
        </Tooltip>
      ))}

      <Divider sx={{ mt: 1, mb: 0.5 }} />

      <Box
        sx={{
          px: 1,
          py: 0.5,
          borderRadius: 1,
          cursor: 'pointer',
          '&:hover': { bgcolor: 'action.hover' },
        }}
      >
        <Typography fontSize={14}>
          Trash{' '}
          <Typography component="span" sx={{ color: 'text.secondary', fontSize: 13 }}>
            (0)
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
}
