import { Box, Typography, Select, MenuItem } from '@mui/material';
import { useState } from 'react';

export default function VerifyEmailBox() {
  const [timeframe, setTimeframe] = useState('Weekly');

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 3,
        border: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6">Email Verification Stats</Typography>

        <Select
          value={timeframe}
          onChange={handleChange}
          size="small"
          sx={{ minWidth: 120 }}
        >
          <MenuItem value="Weekly">Weekly</MenuItem>
          <MenuItem value="Monthly">Monthly</MenuItem>
          <MenuItem value="Yearly">Yearly</MenuItem>
        </Select>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="body2" color="text.secondary">
            {timeframe}
          </Typography>
          <Typography variant="subtitle1">
            {timeframe === 'Weekly' && '151'}
            {timeframe === 'Monthly' && '1,038'}
            {timeframe === 'Yearly' && '6,243'}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
