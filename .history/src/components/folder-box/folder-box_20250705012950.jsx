import { useState } from 'react';

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
      {/* Top Header with Folders title and + icon */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            pr: 1,
          }}
        >
          <Typography fontWeight="600" fontSize='18px' mt='10px'>
            Folders
          </Typography>
          <IconButton
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
        <Box display="flex" flexDirection="column" gap="4px" p>
          {folders.map((name, index) => (
            <Tooltip title="Number of lists in this folder" placement="top" arrow key={name}>
              <Box
                onClick={() => setSelectedIndex(index)}
                sx={{
                  width: 272.2,
                  height: 37.575,
                  px: 1,
                  py: 0.8,
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
                <Typography variant="body2" noWrap>
                  {name}{' '}
                  <Typography variant="caption" component="span">
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

      {/* Trash Section with Dashed Divider */}
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
            py: 0.8,
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            color: 'text.secondary',
          }}
        >
          <Typography variant="body2">Trash (0)</Typography>
        </Box>
      </Box>
    </Box>
  );
}
