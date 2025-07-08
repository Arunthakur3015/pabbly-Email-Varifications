import { useState } from 'react';

import Box from '@mui/material/Box';

import { PageHeader } from 'src/components/pageheader/page-header';
import VerifySingleEmailModal from 'src/components/verifysingleemail/verify-single'; // Apne path ke hisaab se check kar lena

export default function Dashboard() {
  const [openSingleEmailModal, setOpenSingleEmailModal] = useState(false);

  const handleOpenModal = () => {
    setOpenSingleEmailModal(true);
  };

  const handleCloseModal = () => {
    setOpenSingleEmailModal(false);
  };

  return (
    <Box sx={{ maxWidth: 'xl'}}>
      <PageHeader
        title="Dashboard"
        description="Verify and manage all your email lists in one place with the Pabbly Email Verification Dashboard."
        buttonTitle="Verify Email"
        buttonAction={handleOpenModal}
      />

      <VerifySingleEmailModal open={openSingleEmailModal} onClose={handleCloseModal} />
    </Box>
  );
}
