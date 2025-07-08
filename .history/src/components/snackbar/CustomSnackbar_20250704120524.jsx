import { Icon } from '@iconify/react';
import { useMemo, useState, useEffect, useContext, createContext } from 'react';

import CloseIcon from '@mui/icons-material/Close';

const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export function CustomSnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState(null);

  const showSnackbar = (msg, type = 'success') => {
    setSnackbar({ msg, type });
  };

  useEffect(() => {
    if (snackbar) {
      const timer = setTimeout(() => setSnackbar(null), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
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
            borderRadius: '12px',
            boxShadow: '0px 8px 16px rgba(145, 158, 171, 0.24)',
            padding: '12px 16px',
            minWidth: '320px',
            maxWidth: '400px',
            zIndex: 9999,
            border: '1px solid #D1D5DB',
          }}
        >
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

          <div style={{ flexGrow: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#212B36' }}>{snackbar.msg}</div>
          </div>

          <CloseIcon
            onClick={() => setSnackbar(null)}
            sx={{
              cursor: 'pointer',
              fontSize: 20,
              color: '#637381',
              marginLeft: 8,
              '&:hover': { color: '#000' },
            }}
          />
        </div>
      )}
    </SnackbarContext.Provider>
  );
}
