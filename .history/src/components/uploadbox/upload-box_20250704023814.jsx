import { Box, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';

export function UploadBox({ onFileSelect }) {
  const handleFileChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      onFileSelect?.(files);
    }
  };

  return (
    <Box
      sx={{
        border: '1px dashed #ccc',
        borderRadius: 2,
        px: 2,
        py: 3,
        textAlign: 'center',
        cursor: 'pointer',
        position: 'relative',
        width: '100%',
        height: 110,
        backgroundColor: '#FAFAFA',
      }}
      onClick={() => document.getElementById('upload-file-input').click()}
    >
      <input type="file" id="upload-file-input" hidden onChange={handleFileChange} />

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Iconify icon="eva:cloud-upload-fill" width={30} />
        <Typography variant="body2" sx={{ mt: 1 }}>
          Choose a file to upload
        </Typography>
      </Box>
    </Box>
  );
}
