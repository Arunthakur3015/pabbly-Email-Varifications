import React, { useState } from 'react';
import { useSnackbar } from 'src';

import { Box, Button, TextField, Typography, Autocomplete } from '@mui/material'; // ✅ Import snackbar
import { Iconify } from '../iconify';

const timezones = [
  'UTC',
  'America/New_York',
  'America/Chicago',
  'America/Denver',
  'America/Los_Angeles',
  'America/Argentina/Buenos_Aires',
  'Europe/London',
  'Europe/Paris',
  'Europe/Berlin',
  'Asia/Kolkata',
  'Asia/Tokyo',
  'Asia/Dubai',
  'Australia/Sydney',
  'Pacific/Auckland',
];

const TimeZoneCard = ({ sx, ...other }) => {
  const [selectedTimezone, setSelectedTimezone] = useState('UTC');
  const { enqueueSnackbar } = useSnackbar(); // ✅ Snackbar hook

  const handleSave = () => {
    enqueueSnackbar('Time zone applied successfully', {
      variant: 'success',
    });
  };

  return (
    <Box
      sx={{
        mt: 4,
        maxwidth: 'xl',
        backgroundColor: '#ffffff',
        borderRadius: 3,
        px: 4,
        py: 3,
        boxShadow: '0 2px 10px rgba(145, 158, 171, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...other}
    >
      <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
        Time Zone
      </Typography>

      <Autocomplete
        options={timezones}
        value={selectedTimezone}
        onChange={(e, newValue) => setSelectedTimezone(newValue)}
        popupIcon={<Iconify icon="icon-park-outline:down" width={18} height={18} />}
        renderInput={(params) => (
          <TextField
            {...params}
            fullWidth
            label="Select Time Zone"
            variant="outlined"
            sx={{
              mb: 1.5,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              },
              '& .MuiInputLabel-outlined': {
                color: '#637381',
              },
            }}
          />
        )}
      />

      <Typography variant="body2" sx={{ color: '#637381', mb: 2 }}>
        Select the time zone that matches your current location.&nbsp;
        <a href="#" style={{ color: '#078dee', textDecoration: 'none' }}>
          Learn more
        </a>
      </Typography>

      <Button
        variant="contained"
        onClick={handleSave}
        sx={{
          textTransform: 'none',
          borderRadius: 1,
          minWidth: 50,
          height: 36,
          backgroundColor: '#078dee',
          fontWeight: 600,
          fontSize: '0.875rem',
          alignSelf: 'flex-start',
          '&:hover': {
            backgroundColor: '#0077cc',
          },
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export default TimeZoneCard;
