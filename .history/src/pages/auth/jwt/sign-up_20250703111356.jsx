import { Helmet } from 'react-helmet-async';

import { Box, Button, Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { CONFIG } from 'src/config-global';

import JwtSignUpView from 'src/sections/auth/jwt/jwt-sign-up-view';

// ----------------------------------------------------------------------

const metadata = { title: `Sign up | Jwt - ${CONFIG.site.name}` };

export default function Page() {
  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
      </Helmet>

      {/* Login button at top right */}
      <Box
        sx={{
          position: 'fixed',
          top: 20,
          right: 20,
          zIndex: 1300,
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'white', // optional: white bg for better visibility
          p: 1,
          borderRadius: 1,
        }}
      >
        <Typography variant="body2" sx={{ mr: 1 }}>
          Already have a Pabbly Account?
        </Typography>
        <Button
          variant="outlined"
          href={paths.auth.jwt.signIn}
          sx={{
            color: '#1976d2',
            border: '1px solid #1976d2',
            borderRadius: 1,
            textTransform: 'none',
            fontWeight: 500,
            '&:hover': {
              backgroundColor: '#ECF6FE',   // light blue hover background
              border: '2px solid blue',     // blue border on hover
            },
          }}
        >
          Login
        </Button>
      </Box>

      {/* Sign up view content */}
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          backgroundColor: 'white',
        }}
      >
        <JwtSignUpView />
      </Box>
    </>
  );
}
