import { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';

// ----------------------------------------------------------------------

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box>
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
          buttonAction={handleToggle} // ✅ Important: pass the function
        />

        <Collapse in={open}>
          <Box
            sx={{
              mt: 3,
              p: 3,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Choose Verification Type
            </Typography>

            <Box sx={{ display: 'flex', gap: 2 }}>
              <Paper
                elevation={3}
                sx={{
                  flex: 1,
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Typography variant="subtitle1">Verify Single Email</Typography>
              </Paper>

              <Paper
                elevation={3}
                sx={{
                  flex: 1,
                  p: 2,
                  textAlign: 'center',
                  cursor: 'pointer',
                  '&:hover': { boxShadow: 6 },
                }}
              >
                <Typography variant="subtitle1">Verify Bulk Email</Typography>
              </Paper>
            </Box>
          </Box>
        </Collapse>
      </Box>
    </DashboardContent>
  );
}
