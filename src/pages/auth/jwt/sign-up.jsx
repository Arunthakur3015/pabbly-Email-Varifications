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

      {/* ✅ Responsive Login button */}
      <Box
        sx={{
          position: { xs: 'static', sm: 'fixed' }, // mobile me static, desktop me fixed
          top: 20,
          right: 20,
          zIndex: 1300,
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' }, // mobile me vertical
          alignItems: 'center',
          justifyContent: { xs: 'center', sm: 'flex-end' },
          backgroundColor: 'white',
          p: { xs: 1, sm: 1.5 },
          borderRadius: 1,
          mt: { xs: 2, sm: 0 },
          gap: 1,
          mx: { xs: 2, sm: 0 },
          textAlign: { xs: 'center', sm: 'left' },
        }}
      >
        <Typography
          variant="body2"
          sx={{
            mr: { xs: 0, sm: 1 },
            fontSize: { xs: '13px', sm: '14px' },
          }}
        >
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
            fontSize: { xs: '13px', sm: '14px' },
            px: { xs: 2, sm: 3 },
            '&:hover': {
              backgroundColor: '#ECF6FE',
              border: '2px solid blue',
            },
          }}
        >
          Login
        </Button>
      </Box>

      {/* ✅ Sign-up form (already responsive) */}
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
