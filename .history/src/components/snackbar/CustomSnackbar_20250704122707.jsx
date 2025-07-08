import { Icon } from '@iconify/react';
import { useMemo, useState, useEffect, useContext, createContext } from 'react';

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
            width: 450,
            height: 56,
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff',
            borderRadius: '12px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            padding: '4px 8px 4px 4px',
            zIndex: 9999,
          }}
        >
          {/* Icon Box */}
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: '12px',
              backgroundColor: 'hsl(143, 85%, 96%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
              flexShrink: 0,
            }}
          >
            <Icon icon="solar:check-circle-bold" width={24} height={24} color="#5BE49B" />
          </div>

          {/* Message */}
          <div style={{ flexGrow: 1, fontSize: 14, fontWeight: 500, color: '#212B36' }}>
            {snackbar.msg}
          </div>

          {/* Close Button */}
          <div
            onClick={() => setSnackbar(null)}
            style={{
              cursor: 'pointer',
              width: 20,
              height: 20,
              minWidth: 20,
              minHeight: 20,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              border: '1px solid #919EAB3D',
              color: '#637381',
              fontSize: 12,
            }}
          >
            ✕
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
}
