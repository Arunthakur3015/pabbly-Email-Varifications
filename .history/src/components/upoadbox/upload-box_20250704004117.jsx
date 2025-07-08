import { useDropzone } from 'react-dropzone';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Iconify } from '../iconify';

export function UploadBox({ onDrop }) {
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Box
      {...getRootProps()}
      sx={{
        border: '1px dashed #ccc',
        padding: '24px',
        borderRadius: '8px',
        textAlign: 'center',
        cursor: 'pointer',
        width: '100%',
        height: '107.6px', // same as the one you mentioned
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <input {...getInputProps()} />
      <Iconify icon="eva:cloud-upload-fill" width={40} />
      <Typography variant="body2" sx={{ mt: 1 }}>
        Upload file
      </Typography>
    </Box>
  );
}
