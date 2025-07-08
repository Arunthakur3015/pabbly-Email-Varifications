import { useMemo, useState, useContext, createContext } from 'react';

import { StyledToaster } from './styles';

// Context Create
const SnackbarContext = createContext();

export const useSnackbar = () => useContext(SnackbarContext);

export function CustomSnackbarProvider({ children }) {
  const [snackbar, setSnackbar] = useState(null);

  const showSnackbar = (msg, type = 'success') => {
    setSnackbar({ msg, type });
    setTimeout(() => setSnackbar(null), 3000); // auto-hide after 3s
  };

  // ✅ FIX: useMemo to prevent re-creating object on every render
  const value = useMemo(() => ({ showSnackbar }), []);

  return (
    <SnackbarContext.Provider value={value}>
      {children}

      {/* Snackbar UI */}
      {snackbar && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            backgroundColor: snackbar.type === 'success' ? '#4caf50' : '#f44336',
            color: '#fff',
            padding: '12px 16px',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
            zIndex: 9999,
          }}
        >
          {snackbar.msg}
        </div>
      )}
    </SnackbarContext.Provider>
  );
}
