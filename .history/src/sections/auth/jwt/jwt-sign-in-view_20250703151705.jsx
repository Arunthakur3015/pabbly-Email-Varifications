import { z as zod } from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useEffect } from 'react';
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

// Validation Schema
const SignInSchema = zod.object({
  email: zod.string().min(1, 'Email is required!').email('Enter a valid email!'),
  password: zod.string().min(1, 'Password is required!').min(8, 'Minimum 8 characters!'),
});

export default function JwtSignInView() {
  const router = useRouter();
  const { checkUserSession } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const methods = useForm({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: 'mohtirathor@gmail.com',
      password: 'Mohit003and',
    },
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = methods;

  // Auto-login attempt on first render
  useEffect(() => {
    const autoLogin = async () => {
      try {
        await signInWithPassword({
          email: 'mohtirathor@gmail.com',
          password: 'Mohit003and',
        });
        await checkUserSession?.();
        router.refresh();
      } catch (error) {
        setErrorMsg('Auto login failed. Try again manually.');
      }
    };

    autoLogin();
  }, []);

  const onSubmit = async (data) => {
    try {
      await signInWithPassword(data);
      await checkUserSession?.();
      router.refresh();
    } catch (error) {
      setErrorMsg('Invalid credentials!');
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
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Login to Pabbly Account
        </Typography>

        <Typography
          sx={{
            fontSize: '14px',
            color: 'rgb(99, 115, 129)',
            mb: 2,
            textAlign: 'center',
          }}
        >
          Login in seconds. No credit card required.
        </Typography>

        <Divider sx={{ width: '100%', mb: 2 }} />

        {errorMsg && (
          <Alert severity="error" sx={{ width: '100%', mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%' }}>
          <TextField
            fullWidth
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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
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
              height: '48px',
              backgroundColor: '#1976d2',
              fontWeight: 600,
              textTransform: 'none',
              '&:hover': { backgroundColor: '#1565c0' },
              mb: 2,
            }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>

          <Typography
            variant="body2"
            sx={{ color: '#666', fontSize: '0.9rem', textAlign: 'center' }}
          >
            Unable to login?{' '}
            <Link href="#" sx={{ color: '#1976d2', fontWeight: 500 }}>
              Forgot Password
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
