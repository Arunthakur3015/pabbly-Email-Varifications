import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';

import VerifyEmailBox from 'src/sections/email/verify-email-box'; // ✅ correct import

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
          buttonAction={handleToggle}
        />

        <Collapse in={open}>
          <Box sx={{ mt: 3 }}>
            <VerifyEmailBox />
          </Box>
        </Collapse>
      </Box>
    </DashboardContent>
  );
}
