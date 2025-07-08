import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

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
  InputAdornment,
} from '@mui/material';

import { useRouter } from 'src/routes/hooks';

import { useAuthContext } from 'src/auth/hooks';
import { signInWithPassword } from 'src/auth/context/jwt';

// --------------------------------------------------

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
        overflowX: 'hidden',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '420px',
          p: '32px',
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
            width: '100%',
            maxWidth: '356px',
            height: '30px',
            fontWeight: 700,
            color: 'rgb(28, 37, 46)',
            fontSize: '15px',
            lineHeight: '24px',
            mb: 0,
            textAlign: 'center',
          }}
        >
          Login to Pabbly Account
        </Typography>

        <Typography
          sx={{
            fontFamily: "Public Sans", sans-serif,
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '22px',
            color: 'rgb(99, 115, 129)',
            mb: 2,
            textAlign: 'center',
            maxWidth: '356px',
            width: '100%',
          }}
        >
          Login in seconds. No credit card required.
        </Typography>

        <Button
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: '356px',
            height: '40px',
            mb: 2,
            border: '1px solid black',
            color: 'rgb(28, 37, 46)',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '24px',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0,0,0,0.2)',
              borderColor: 'black',
              backgroundColor: '#f9f9f9',
            },
          }}
          startIcon={
            <Box sx={{ width: 20, height: 20 }}>
              <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#4285F4"
                  d="M533.5 278.4c0-17.8-1.6-35-4.6-51.6H272v97.8h147.5c-6.4 34.7-25.2 64-53.7 83.7v69.3h86.8c50.9-46.9 80.9-116.1 80.9-199.2z"
                />
                <path
                  fill="#34A853"
                  d="M272 544.3c72.6 0 133.5-24 178-65.3l-86.8-69.3c-24.1 16.2-54.8 25.8-91.2 25.8-70.1 0-129.5-47.2-150.7-110.7H30.4v69.6C74.8 484.4 166.7 544.3 272 544.3z"
                />
                <path
                  fill="#FBBC04"
                  d="M121.3 324.8c-10.5-31.3-10.5-64.9 0-96.2V159H30.4c-30.6 60.5-30.6 132 0 192.5l90.9-26.7z"
                />
                <path
                  fill="#EA4335"
                  d="M272 107.7c39.5-.6 77.2 14 105.8 40.7l79-78.9C419.7 24.4 346.6-2.1 272 0 166.7 0 74.8 59.9 30.4 159l90.9 69.6C142.5 154.8 201.9 107.7 272 107.7z"
                />
              </svg>
            </Box>
          }
        >
          Login with Google
        </Button>

        <Box
          sx={{ display: 'flex', alignItems: 'center', width: '100%', maxWidth: '356px', mb: 2 }}
        >
          <Divider sx={{ flex: 1, borderColor: '#e0e0e0' }} />
          <Typography variant="body2" sx={{ px: 2, color: '#666', fontSize: '0.9rem' }}>
            or
          </Typography>
          <Divider sx={{ flex: 1, borderColor: '#e0e0e0' }} />
        </Box>

        {!!errorMsg && (
          <Alert severity="error" sx={{ width: '100%', maxWidth: '356px', mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box
          component="form"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ width: '100%', maxWidth: '356px' }}
        >
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              type="email"
              label="Email Address"
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  backgroundColor: 'white',
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: 'black' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                },
                '& .MuiInputBase-root': {
                  backgroundColor: 'white !important',
                },
                '& .MuiInputBase-input': {
                  backgroundColor: 'white !important',
                  fontSize: '0.95rem',
                  padding: '12px 14px',
                },
              }}
            />
          </Box>

          <Box sx={{ mb: 2 }}>
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
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      sx={{ color: '#666' }}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  borderRadius: 1,
                  backgroundColor: 'white',
                  '& fieldset': { borderColor: '#e0e0e0' },
                  '&:hover fieldset': { borderColor: 'black' },
                  '&.Mui-focused fieldset': { borderColor: '#1976d2' },
                },
                '& .MuiInputBase-root': {
                  backgroundColor: 'white !important',
                },
                '& .MuiInputBase-input': {
                  backgroundColor: 'white !important',
                  fontSize: '0.95rem',
                  padding: '12px 14px',
                },
              }}
            />
          </Box>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isSubmitting}
            sx={{
              width: '100%',
              height: '48px',
              mb: 2,
              backgroundColor: '#1976d2',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              borderRadius: 1,
              '&:hover': { backgroundColor: '#1565c0' },
            }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

          <Box sx={{ textAlign: 'center', width: '100%' }}>
            <Typography variant="body2" sx={{ color: '#666', fontSize: '0.9rem' }}>
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
    </Box>
  );
}