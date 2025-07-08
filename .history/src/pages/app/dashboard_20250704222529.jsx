import { useState } from 'react';

import Box from '@mui/material/Box';

import { StatsCard } from 'src/components/stats-cards/stats-cards';
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

      <Box
        sx={{
          gap: 3,
          mt: 5,
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(1, 1fr)', md: 'repeat(3, 1fr)' },
        }}
      >
        <StatsCard
          title="Email Credits Consumed"
          total={32}
          icon_name="consumed 1.svg"
          bg_gradient="#10CBF3"
          tooltip_title='Number of emails consumed by your account.'
        />

        <StatsCard
          title="Email Credits Remaining"
          total={9968}
          icon_name="Renaming.svg"
          bg_gradient="#1D88FA"
          tooltip_title='Number of emails credits remaining in your account.'
        />

        <StatsCard
          title="Total Number of Email Lists"
          total={100}
          icon_name="email.svg"
          bg_gradient="#28A745"
          tooltip_title='Total number of email lists uploaded in your account.'
        />
      </Box>
    </Box>
  );
}
