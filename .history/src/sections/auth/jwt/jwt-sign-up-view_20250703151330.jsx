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
    defaultValues: {
      email: 'mohtirathor@gmail.com',
      password: 'Mohit003and',
    },
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
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1 }}>
          Login to Pabbly Account
        </Typography>

        <Typography sx={{ color: 'text.secondary', mb: 2, textAlign: 'center' }}>
          Login in seconds. No credit card required.
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          sx={{
            height: 40,
            mb: 2,
            border: '1px solid black',
            textTransform: 'none',
            fontWeight: 700,
            '&:hover': {
              backgroundColor: '#f9f9f9',
            },
          }}
        >
          Login with Google
        </Button>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', mb: 2 }}>
          <Divider sx={{ flex: 1 }} />
          <Typography sx={{ mx: 2, color: 'text.disabled' }}>or</Typography>
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
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{ height: 48, fontWeight: 600, textTransform: 'none' }}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mt: 2 }}>
          Unable to login?{' '}
          <Link href="#" underline="hover">
            Forgot Password
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}
