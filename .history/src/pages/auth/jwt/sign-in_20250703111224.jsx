import { Helmet } from 'react-helmet-async';

import { Box, Button, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';

import JwtSignInView from 'src/sections/auth/jwt/jwt-sign-in-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign in | Jwt - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Button absolutely positioned relative to viewport, outside of sign-in container */}
      <Box
        sx={{
          position: 'fixed', // 👉 fixed instead of absolute so it's always relative to viewport
          top: 20,
          right: 20,
          zIndex: 1300, // 👉 make sure it's on top of everything (higher than MUI drawers etc.)
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white', // optional: white bg for better visibility
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" sx={{ mr: 1 }}>
          Don’t have a Pabbly Account yet?
        </Typography>
        <Button
          variant="outlined"
          href={paths.auth.jwt.signUp}
          sx={{
            color: '#1976d2',
            border: '1px solid #1976d2',
            borderRadius: 1,
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': { backgroundColor: '#ECF6FE',   // light blue hover background
              border: '2px solid blue',  },
          }}
        >
          Create Account
        </Button>
      </Box>

      {/* Existing sign-in view content */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: 'white', // make sure background is white as per your last request
        }}
      >
        <JwtSignInView />
      </Box>
    </>
  );
}
