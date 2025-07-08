import { useState } from 'react';

import Box from '@mui/material/Box'

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single';

export default function Dashboard() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  const handleOpenSingleEmailModal = () => {
    setOpenSingleEmailModal(true);
  };

  const handleCloseModal = () => {
    setOpenSingleEmailModal(false);
  };

  return (
    <Box sx={{ pt: 4, px: 5 }}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        onSingleEmailClick={handleOpenSingleEmailModal}
      />
      <VerifySingleEmailModal open={openSingleEmailModal} onClose={handleCloseModal} />
    </Box>
  );
}
