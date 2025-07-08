import { Toaster } from 'react-hot-toast';
import Portal from '@mui/material/Portal';
import { Iconify } from '../iconify';

// ✅ If you’re styling without StyledToaster
export function CustomSnackbar() {
  return (
    <Portal>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            padding: '12px 16px',
            borderRadius: 8,
            boxShadow: '0px 8px 16px rgba(0,0,0,0.08)',
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            fontSize: 14,
            maxWidth: 400,
            minWidth: 280,
          },
          iconTheme: {
            primary: '#078DEE',
            secondary: '#fff',
          },
        }}
      />
    </Portal>
  );
}
