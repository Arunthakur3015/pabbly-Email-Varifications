import React, { useState, useEffect } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import {
  Box,
  Slide,
  Button,
  Dialog,
  Divider,
  TextField,
  Typography,
  IconButton,
  DialogContent,
  DialogActions,
} from '@mui/material';

export default function ApiKeyBox({ sx }) {
  const [snackbar, setSnackbar] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const dummyPassword = '••••••••••••••••••';

  const handleCopy = (value) => {
    navigator.clipboard.writeText(value);
    setSnackbar('Copied to clipboard');
  };

  const handleGenerate = () => {
    setDialogOpen(true);
  };

  const handleDialogConfirm = () => {
    setDialogOpen(false);
    setSnackbar('API Key generated successfully!');
  };

  useEffect(() => {
    if (snackbar) {
      const timer = setTimeout(() => setSnackbar(null), 3000);
      return () => clearTimeout(timer);
    }
    return undefined;
  }, [snackbar]);

  return (
    <Box
      sx={{
        borderRadius: 2,
        bgcolor: 'background.paper',
        boxShadow: 3,
        p: 3,
        mt: 3,
        maxWidth: 'xl',
        width: '100%',
        ...sx,
      }}
    >
      {/* Heading */}
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        API
      </Typography>

      <Divider sx={{ bgcolor: '#F4F6F7', mb: 3 }} />

      {/* Key fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {[
          { label: 'API Key', key: 'your-api-key' },
          { label: 'Secret Key', key: 'your-secret-key' },
        ].map((item, i) => (
          <Box key={i}>
            <TextField
              fullWidth
              type="password"
              label={item.label}
              value={dummyPassword}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              InputProps={{
                endAdornment: (
                  <IconButton
                    onClick={() => handleCopy(item.key)}
                    sx={{ p: 0, width: 22, height: 22 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.24 2h-3.894c-1.764 0-3.162 0-4.255.148c-1.126.152-2.037.472-2.755 1.193c-.719.721-1.038 1.636-1.189 2.766C3 7.205 3 8.608 3 10.379v5.838c0 1.508.92 2.8 2.227 3.342-.067-.91-.067-2.185-.067-3.247v-5.01c0-1.281 0-2.386.118-3.27c.127-.948.413-1.856 1.147-2.593s1.639-1.024 2.583-1.152c.88-.118 1.98-.118 3.257-.118h3.07c1.276 0 2.374 0 3.255.118A3.6 3.6 0 0 0 15.24 2" />
                      <path d="M6.6 11.397c0-2.726 0-4.089.844-4.936c.843-.847 2.2-.847 4.916-.847h2.88c2.715 0 4.073 0 4.917.847S21 8.671 21 11.397v4.82c0 2.726 0 4.089-.843 4.936c-.844.847-2.202.847-4.917.847h-2.88c-2.715 0-4.073 0-4.916-.847c-.844-.847-.844-2.21-.844-4.936z" />
                    </svg>
                  </IconButton>
                ),
                style: { fontSize: '15px' },
              }}
              sx={{ height: 80 }}
            />
            <Typography variant="body2" sx={{ mt: '-12px' }}>
              Use the copy button to securely copy it. Keep it private and do not share with others.{' '}
              <a href="#" style={{ color: '#1976d2', textDecoration: 'underline' }}>
                Learn more
              </a>
            </Typography>
          </Box>
        ))}

        {/* Generate Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: 1 }}>
          <Button
            variant="contained"
            onClick={handleGenerate}
            sx={{
              width: 160,
              height: 36,
              textTransform: 'none',
              fontSize: '13px',
              fontWeight: 500,
            }}
          >
            Generate API Keys
          </Button>
        </Box>
      </Box>

      {/* Confirmation Dialog */}
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: 2,
            maxWidth: 500,
            width: '100%',
            p: 3,
          },
        }}
      >
        <Typography variant="h6" sx={{ mb: 1 }}>
          Generate API Keys
        </Typography>
        <DialogContent sx={{ p: 0, pb: 2 }}>
          <Typography variant="body2">
            Generating new API keys will invalidate your current API keys. Do you want to continue?
          </Typography>
        </DialogContent>
        <DialogActions sx={{ justifyContent: 'flex-end', gap: 1 }}>
          <Button onClick={handleDialogConfirm} variant="contained" sx={{ textTransform: 'none' }}>
            Generate
          </Button>
          <Button onClick={() => setDialogOpen(false)} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar Slide */}
      {snackbar && (
        <Slide direction="down" in={Boolean(snackbar)} mountOnEnter unmountOnExit>
          <Box
            sx={{
              position: 'fixed',
              top: 20,
              right: 20,
              display: 'flex',
              alignItems: 'center',
              backgroundColor: '#fff',
              borderRadius: 2,
              boxShadow: 3,
              px: 2,
              py: 1,
              minWidth: 320,
              height: 56,
              zIndex: 9999,
            }}
          >
            <Box
              sx={{
                backgroundColor: 'hsl(143, 85%, 96%)',
                color: '#22C55E',
                borderRadius: '50%',
                width: 40,
                height: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 1.5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.375 0 0 5.375 0 12c0 6.623 5.375 12 12 12s12-5.377 12-12C24 5.375 18.625 0 12 0zm6.422 9.125l-7.171 7.172c-.244.244-.56.366-.878.366s-.634-.122-.878-.366l-3.585-3.585c-.488-.488-.488-1.268 0-1.757s1.269-.488 1.757 0l2.707 2.707 6.293-6.293c.488-.488 1.269-.488 1.757 0s.488 1.27 0 1.758z" />
              </svg>
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: 500 }}>{snackbar}</Typography>
            <IconButton
              onClick={() => setSnackbar(null)}
              size="small"
              sx={{
                position: 'absolute',
                top: 6,
                right: 6,
                color: 'text.secondary',
              }}
            >
              <CloseIcon sx={{ fontSize: 14 }} />
            </IconButton>
          </Box>
        </Slide>
      )}
    </Box>
  );
}
