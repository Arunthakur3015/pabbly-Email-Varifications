import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { useTheme } from '@mui/material/styles';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Link,
  Alert,
  Button,
  Divider,
  TextField,
  IconButton,
  Typography,
  useMediaQuery,
  InputAdornment,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { useAuthContext } from 'src/auth/hooks';
import { signInWithPassword } from 'src/auth/context/jwt';

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: 'Email is required!' })
    .email({ message: 'Enter a valid email!' }),
  password: zod
    .string()
    .min(1, { message: 'Password is required!' })
    .min(6, { message: 'Password must be at least 6 characters!' }),
});

export default function JwtSignInView() {
  const router = useRouter();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const { checkUserSession } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: { email: '', password: '' },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();
      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(error instanceof Error ? error.message : String(error));
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: 4,
        px: 2,
        backgroundColor: '#f8f8f8',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 420,
          p: isSmall ? 2 : 4,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          border: '1px solid #f0f0f0',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: 700,
            fontSize: isSmall ? '14px' : '16px',
            lineHeight: '24px',
            mb: 1,
            textAlign: 'center',
          }}
        >
          Login to Pabbly Account
        </Typography>

        <Typography
          sx={{
            fontSize: isSmall ? '13px' : '14px',
            lineHeight: '20px',
            color: 'rgb(99, 115, 129)',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Login in seconds. No credit card required.
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            height: 40,
            mb: 2,
            border: '1px solid black',
            color: 'rgb(28, 37, 46)',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 700,
            '&:hover': {
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              borderColor: 'black',
              backgroundColor: '#f9f9f9',
            },
          }}
          startIcon={
            <Box sx={{ width: 20, height: 20 }}>
              <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4285F4" d="M533.5 278.4c0-17.8-1.6-35-4.6-51.6H272v97.8h147.5..." />
                <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24 178-65.3l-86.8-69.3..." />
                <path fill="#FBBC04" d="M121.3 324.8c-10.5-31.3-10.5-64.9 0-96.2V159H30.4..." />
                <path fill="#EA4335" d="M272 107.7c39.5-.6 77.2 14 105.8 40.7l79-78.9..." />
              </svg>
            </Box>
          }
        >
          Login with Google
        </Button>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            mb: 2,
          }}
        >
          <Divider sx={{ flex: 1 }} />
          <Typography variant="body2" sx={{ px: 2, color: '#666', fontSize: '0.9rem' }}>
            or
          </Typography>
          <Divider sx={{ flex: 1 }} />
        </Box>

        {!!errorMsg && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
          <TextField
            fullWidth
            type="email"
            label="Email Address"
            {...register('email')}
            error={!!errors.email}
            helperText={errors.email?.message}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            {...register('password')}
            error={!!errors.password}
            helperText={errors.password?.message}
            placeholder="6+ characters"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{
              height: 48,
              mb: 2,
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
            }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

          <Typography variant="body2" align="center" sx={{ color: '#666', fontSize: '0.9rem' }}>
            Unable to login?{' '}
            <Link
              href="#"
              sx={{
                color: '#1976d2',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              Forgot Password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
