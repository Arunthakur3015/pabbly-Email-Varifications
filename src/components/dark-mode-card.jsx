import React from 'react';

import { Box, Switch, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { useSettingsContext } from 'src/components/settings';

const DarkModeCard = () => {
  const { themeMode, onUpdateField } = useSettingsContext();
  const isDark = themeMode === 'dark';

  const handleToggle = () => {
    onUpdateField('themeMode', isDark ? 'light' : 'dark');
  };

  return (
    <Box
      sx={{
        width: 272,
        height: 107.6,
        px: 2,
        py: '20px',
        borderRadius: 2,
        border: '1px solid',
        borderColor: 'divider',
        position: 'relative',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease',
        bgcolor: 'transparent',
        '&:hover': {
          bgcolor: 'rgba(145, 158, 171, 0.1)',
        },
      }}
    >
      {/* Cloud Icon and Label */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          height: '100%',
          gap: 3,
        }}
      >
        <Iconify icon="ph:cloud-moon-bold" width={24} sx={{ color: '#637381' }} />
        <Typography variant="caption" color="text.secondary">
          Dark mode
        </Typography>
      </Box>

      {/* Toggle Switch positioned to top right */}
      <Switch
        size="small"
        checked={isDark}
        onChange={handleToggle}
        sx={{
          position: 'absolute',
          top: 20,
          right: 16,
        }}
      />
    </Box>
  );
};

export default DarkModeCard;