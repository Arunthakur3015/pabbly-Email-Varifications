import { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import FolderListBox from 'src/components/folder-box/folder-box';
import { StatsCard } from 'src/components/stats-cards/stats-cards';
import { PageHeader } from 'src/components/pageheader/page-header';
import BulkVerifyEmailModal from 'src/components/bulk-email/bulk-email';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single';

export default function Dashboard() {
  const [openSingleModal, setOpenSingleModal] = useState(false);
  const [openBulkModal, setOpenBulkModal] = useState(false);

  return (
    <Box sx={{ pt: 1 }}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={() => setOpenSingleModal(true)}
        onBulkEmailClick={() => setOpenBulkModal(true)}
      />

      <VerifySingleEmailModal open={openSingleModal} onClose={() => setOpenSingleModal(false)} />
      <BulkVerifyEmailModal open={openBulkModal} onClose={() => setOpenBulkModal(false)} />

      {/* Stats Cards */}
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} md={4}>
          <StatsCard
            heading="Email Credits Consumed"
            total={32}
            icon_name="consumed 1.svg"
            bg_gradient="#10CBF3"
            tooltip_title="Number of emails consumed by your account."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            heading="Email Credits Remaining"
            total={9968}
            icon_name="Renaming.svg"
            bg_gradient="#1D88FA"
            tooltip_title="Number of emails credits remaining in your account."
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <StatsCard
            heading="Total Number of Email Lists"
            total={100}
            icon_name="email.svg"
            bg_gradient="#28A745"
            tooltip_title="Number of email lists uploaded in your account."
          />
        </Grid>
      </Grid>

      {/* Folder Box - below cards & aligned left */}
      <Box sx={{ mt: 3.5 }}>
        <FolderListBox />
      </Box>
    </Box>
  );
}
