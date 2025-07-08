import { Icon } from '@iconify/react';
import { useMemo, useState, useEffect, useContext, createContext } from 'react';
import CloseIcon from '@mui/icons-material/Close';

// Create context
const SnackbarContext = createContext();

// Hook to use
export const useSnackbar = () => useContext(SnackbarContext);

// Provider Component
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

      {/* Inject slideDown CSS animation */}
      <style>
        {`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>

      {/* Snackbar UI */}
      {snackbar && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: 20,
            zIndex: 9999,
            animation: 'slideDown 300ms ease-in-out',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 12,
              boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
              padding: '4px 4px',
              minWidth: 450,
              height: 56,
              marginRight: 20,
              position: 'relative',
            }}
          >
            {/* Left Icon */}
            <div
              style={{
                backgroundColor: 'hsl(143, 85%, 96%)',
                color: '#22C55E',
                borderRadius: 'inherit',
                width: 48,
                height: 48,
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
            <div
              style={{
                flexGrow: 1,
                fontSize: 14,
                fontWeight: 500,
                color: '#212B36',
              }}
            >
              {snackbar.msg}
            </div>

            {/* Close Button */}
            <div
              role="button"
              tabIndex={0}
              onClick={() => setSnackbar(null)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setSnackbar(null);
              }}
              style={{
                position: 'absolute',
                top: 6,
                right: 6,
                cursor: 'pointer',
                width: 20,
                height: 20,
                border: '1px solid #ccc',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'transparent',
              }}
            >
              <CloseIcon sx={{ fontSize: 12, color: '#637381' }} />
            </div>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
}
