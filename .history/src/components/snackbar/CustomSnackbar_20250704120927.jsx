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
            boxShadow: '0px 8px 20px rgba(145, 158, 171, 0.24)',
            padding: '16px 20px',
            minWidth: '360px',
            zIndex: 9999,
            animation: 'dropDown 0.3s ease',
          }}
        >
          {/* ICON */}
          <div
            style={{
              backgroundColor: '#E9FCD4',
              color: '#229A16',
              borderRadius: '12px',
              width: 4,
              height: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 16,
              flexShrink: 0,
            }}
          >
            <Icon icon="solar:check-circle-bold" width={24} height={24} />
          </div>

          {/* TEXT */}
          <div style={{ flexGrow: 1, color: '#212B36', fontWeight: 600, fontSize: 14 }}>
            {snackbar.msg}
          </div>

          {/* CLOSE ICON */}
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

      {/* Animation */}
      <style>{`
        @keyframes dropDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </SnackbarContext.Provider>
  );
}
