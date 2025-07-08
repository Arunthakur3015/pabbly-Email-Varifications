import { useState } from 'react';

import { Dialog, DialogTitle, DialogContent } from '@mui/material';

import { DashboardContent } from 'src/layouts/dashboard';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailTitleForm from 'src/components/ve/VerifySingleEmailTitleForm'; // change path if needed

export default function Page() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  const handleOpenSingleEmail = () => setOpenSingleEmailModal(true);
  const handleCloseSingleEmail = () => setOpenSingleEmailModal(false);

  return (
    <DashboardContent maxWidth="xl">
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={handleOpenSingleEmail}
      />

      <Dialog open={openSingleEmailModal} onClose={handleCloseSingleEmail} maxWidth="sm" fullWidth>
        <DialogTitle>Verify Single Email</DialogTitle>
        <DialogContent>
          <VerifySingleEmailTitleForm />
        </DialogContent>
      </Dialog>
    </DashboardContent>
  );
}
