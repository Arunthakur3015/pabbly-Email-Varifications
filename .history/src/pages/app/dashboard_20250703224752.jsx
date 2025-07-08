import React, { useState } from 'react';

import { Box } from '@mui/material';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single'; // path check kar lena

export default function Dashboard() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  const handleSingleEmailClick = () => {
    setOpenSingleEmailModal(true);
  };

  const handleCloseModal = () => {
    setOpenSingleEmailModal(false);
  };

  return (
    <Box>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        buttonAction={handleSingleEmailClick}
      />

      <VerifySingleEmailModal open={openSingleEmailModal} onClose={handleCloseModal} />
    </Box>
  );
}
