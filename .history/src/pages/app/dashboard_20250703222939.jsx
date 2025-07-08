import { useState } from 'react';

import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';

import { CONFIG } from 'src/config-global';
import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailModal from 'src/components/verifyemail/verify-single'; // apna modal component

export default function Page() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  return (
    <DashboardContent maxWidth="xl">
      <Box>
        <PageHeader
          title="Dashboard"
          description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
          buttonTitle="Verify Email"
          onSingleEmail={() => setOpenSingleEmailModal(true)}
        />
      </Box>

      <VerifySingleEmailModal
        open={openSingleEmailModal}
        onClose={() => setOpenSingleEmailModal(false)}
      />
    </DashboardContent>
  );
}
