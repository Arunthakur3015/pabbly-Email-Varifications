import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifyEmailBox from 'src/components/verifyemail/verify-email'; // agar chahiye to
import VerifySingleEmailModal from 'src/components/verifyemail/verify-single'; // modal component ka sahi import

const metadata = { title: `Page one | Dashboard - ${CONFIG.site.name}` };

export default function Page() {
  const [open, setOpen] = useState(false);
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleSingleEmail = () => {
    setOpenSingleEmailModal(true);
  };

  return (
    <DashboardContent maxWidth="xl">
      <Box>
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
          onSingleEmail={handleSingleEmail} // ye prop pass karo
        />

        <Collapse in={open}>
          <Box sx={{ mt: 3 }}>
            <VerifyEmailBox />
          </Box>
        </Collapse>
      </Box>

      <VerifySingleEmailModal
        open={openSingleEmailModal}
        onClose={() => setOpenSingleEmailModal(false)}
      />
    </DashboardContent>
  );
}
