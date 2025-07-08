import { useState } from 'react';

import Box from '@mui/material/Box';

import StatsCard from 'src/components/stats-cards/stats-cards';
import { PageHeader } from 'src/components/pageheader/page-header';
import BulkVerifyEmailModal from 'src/components/bulk-email/bulk-email';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single';
 

export default function Dashboard() {
  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBulkModal, setOpenBulkModal] = useState(false);

  return (
    <Box sx={{ pt: 1.5, px: 5 }}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={() => setOpenSingleModal(true)}
        onBulkEmailClick={() => setOpenBulkModal(true)}
      />
      <VerifySingleEmailModal open={openSingleModal} onClose={() => setOpenSingleModal(false)} />
      <BulkVerifyEmailModal open={openBulkModal} onClose={() => setOpenBulkModal(false)} />
        <StatsCard total='32' title=''/> 
    </Box>
  );
}
