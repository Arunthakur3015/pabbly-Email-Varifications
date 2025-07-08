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
            padding: '8px 12px',
            width: 450,
            height: 56,
            zIndex: 9999,
            animation: 'dropDown 0.3s ease',
          }}
        >
          <div
            style={{
              backgroundColor: '#E9FCD4',
              color: '#229A16',
              borderRadius: '12px',
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
              flexShrink: 0,
              alignSelf: 'flex-start',
            }}
          >
            <Icon icon="solar:check-circle-bold" style={{ width: 24, height: 24, fontSize: 0 }} />
          </div>

          <div
            style={{
              flex: '1 1 auto',
              fontSize: 14,
              fontWeight: 600,
              color: '#EEFAF26',
            }}
          >
            {snackbar.msg}
          </div>

          <CloseIcon
            onClick={() => setSnackbar(null)}
            sx={{
              cursor: 'pointer',
              fontSize: 20,
              color: 'currentColor',
              backgroundColor: 'transparent',
              position: 'absolute',
              top: 0,
              right: 0,
              transform: 'translate(-6px, 6px)',
              borderColor: 'rgba(145, 158, 171, 0.16)',
              transition: 'background-color 0.3s, border-color 0.3s',
              '&:hover': {
                borderColor: 'rgba(145, 158, 171, 0.24)',
                backgroundColor: 'rgba(145, 158, 171, 0.08)',
              },
            }}
          />
        </div>
      )}

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
