import { useState } from 'react';

import { Select, MenuItem } from '@mui/material';

export default function TimeframeDropdown() {
  const [timeframe, setTimeframe] = useState('Weekly');

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <Select value={timeframe} onChange={handleChange} size="small" sx={{ minWidth: 120 }}>
      <MenuItem value="Weekly">Weekly</MenuItem>
      <MenuItem value="Monthly">Monthly</MenuItem>
      <MenuItem value="Yearly">Yearly</MenuItem>
    </Select>
  );
}
