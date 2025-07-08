import { Icon } from '@iconify/react';
import { useMemo, useState, useContext, createContext, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export function CustomSnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState(null);

  const showSnackbar = (msg, type = 'success') => {
    setSnackbar({ msg, type });
  };

  useEffect((){
    if (snackbar) {
      const timer = setTimeout(() => setSnackbar(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [snackbar]);

  const value = useMemo(() => ({ showSnackbar }), []);

  return (
    <SnackbarContext.Provider value={value}>
      {children}

      {snackbar && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '16px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '12px 16px',
            minWidth: '280px',
            zIndex: 9999,
            transition: 'transform 0.3s ease-in-out',
          }}
        >
          {/* Left Icon */}
          <div
            style={{
              backgroundColor: '#E9FCD4',
              color: '#229A16',
              borderRadius: '12px',
              width: 40,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
              flexShrink: 0,
            }}
          >
            <Icon icon="solar:check-circle-bold" width={24} height={24} />
          </div>

          {/* Message */}
          <div style={{ flexGrow: 1, fontSize: 14, fontWeight: 500, color: '#212B36' }}>
            {snackbar.msg}
          </div>

          {/* Close Button */}
          <CloseIcon
            onClick={() => setSnackbar(null)}
            sx={{
              cursor: 'pointer',
              fontSize: 18,
              color: '#637381',
              marginLeft: 12,
              '&:hover': { color: '#000' },
            }}
          />
        </div>
      )}
    </SnackbarContext.Provider>
  );
}
