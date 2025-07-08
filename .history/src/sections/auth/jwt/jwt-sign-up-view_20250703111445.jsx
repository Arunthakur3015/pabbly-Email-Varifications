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
  CircularProgress,
} from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';

import { signUp } from 'src/auth/context/jwt';
import { useAuthContext } from 'src/auth/hooks';

// ✅ Updated Captcha Component
const CaptchaComponent = ({ onVerify }) => {
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      setLoading(true);
      setError(false);

      setTimeout(() => {
        const success = Math.random() > 0.2;
        if (success) {
          setChecked(true);
          setVerified(true);
          setLoading(false);
          onVerify?.(true);
        } else {
          setLoading(false);
          setError(true);
          setChecked(false);
          onVerify?.(false);
        }
      }, 2000);
    } else {
      setChecked(false);
      setVerified(false);
      setError(false);
      onVerify?.(false);
    }
  };

  return (
    <Box sx={{ width: '100%', maxWidth: '356px', mb: 2 }}>
      <Box
        sx={{
          width: '265px',
          height: '65px',
          padding: '8px 12px 4px',
          border: '2px solid #d3d3d3',
          borderRadius: '4px',
          backgroundColor: '#f9f9f9',
          fontFamily: 'Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          position: 'relative',
          '&:hover': { borderColor: '#1976d2' },
        }}
      >
        <Box sx={{ position: 'relative' }}>
          {loading ? (
            <CircularProgress size={20} />
          ) : (
            <Checkbox
              checked={checked}
              onChange={handleCheckboxChange}
              disabled={verified}
              sx={{
                padding: 0,
                '& .MuiSvgIcon-root': { fontSize: 20 },
                '&.Mui-checked': { color: '#4caf50' },
              }}
            />
          )}
        </Box>

        <Typography sx={{ fontSize: '14px', color: '#333', fontWeight: 400 }}>
          {loading ? 'Verifying...' : verified ? 'Verified!' : "I'm not a robot"}
        </Typography>

        <Box sx={{ marginLeft: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Box
            component="img"
            src="/assets/icons/captcha-icon.jpg" // 👉 अपनी image का path यहाँ डालो
            alt="Captcha Icon"
            sx={{
              width: '28px',
              height: '28px',
              borderRadius: '2px',
              marginBottom: '2px',
              objectFit: 'cover',
            }}
          />
          <Box sx={{ fontSize: '8px', textAlign: 'center', lineHeight: 1 }}>reCAPTCHA</Box>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '2px',
            left: '12px',
            fontSize: '8px',
            color: '#666',
          }}
        >
          Privacy - Terms
        </Box>
      </Box>

      {error && (
        <Alert severity="error" sx={{ marginTop: '8px', fontSize: '12px' }}>
          ERROR for site owner: Invalid domain for site key
        </Alert>
      )}
    </Box>
  );
};

// --------------------------------------------------

export const SignUpSchema = zod.object({
  firstName: zod.string().min(1, { message: 'First name is required!' }),
  lastName: zod.string().min(1, { message: 'Last name is required!' }),
  email: zod.string().min(1, { message: 'Email is required!' }).email({ message: 'Enter a valid email!' }),
  password: zod.string().min(1, { message: 'Password is required!' }).min(8, { message: 'Password must be at least 8 characters!' }),
  confirmPassword: zod.string().min(1, { message: 'Confirm password is required!' }),
});

const textFieldStyles = {
  height: '54px',
  '& .MuiOutlinedInput-root': {
    height: '54px',
    borderRadius: 1,
    backgroundColor: 'white',
    '& fieldset': { borderColor: '#e0e0e0' },
    '&:hover fieldset': { borderColor: 'black' },
    '&.Mui-focused fieldset': { borderColor: '#1976d2' },
  },
  '& .MuiInputBase-root': { backgroundColor: 'white !important' },
  '& .MuiInputBase-input': { backgroundColor: 'white !important', fontSize: '0.95rem' },
};

export default function JwtSignUpView() {
  const router = useRouter();
  const { checkUserSession } = useAuthContext();
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
    defaultValues: { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' },
  });

  const { register, handleSubmit, formState: { errors, isSubmitting } } = methods;

  const onSubmit = async (data) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        firstName: data.firstName,
        lastName: data.lastName,
      });
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
        <Typography variant="h5" sx={{ width: '100%', fontWeight: 700, color: 'rgb(28, 37, 46)', mb: 0, textAlign: 'center' }}>
          Create Your Pabbly Account
        </Typography>

        <Typography sx={{ fontWeight: 400, fontSize: '14px', color: 'rgb(99, 115, 129)', mb: 2, textAlign: 'center' }}>
          Create an account in seconds. No credit card required.
        </Typography>
               <Button
          variant="outlined"
          sx={{
            width: '100%',
            maxWidth: '356px',
            height: '40px',
            mb: 2,
            border: '1px solid black', // black stroke
            color: 'rgb(28, 37, 46)',
            textTransform: 'none',
            fontSize: '14px',
            fontWeight: 700,
            lineHeight: '24px',
            '&:hover': {
              boxShadow: '0 0 10px rgba(0,0,0,0.2)', // shadow on hover
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

        {!!errorMsg && (
          <Alert severity="error" sx={{ width: '100%', maxWidth: '356px', mb: 2 }}>
            {errorMsg}
          </Alert>
        )}

        <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: '100%', maxWidth: '356px' }}>
          <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
            <TextField fullWidth label="First Name" {...register('firstName')} error={!!errors.firstName} helperText={errors.firstName?.message} sx={textFieldStyles} />
            <TextField fullWidth label="Last Name" {...register('lastName')} error={!!errors.lastName} helperText={errors.lastName?.message} sx={textFieldStyles} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField fullWidth type="email" label="Email Address" {...register('email')} error={!!errors.email} helperText={errors.email?.message} sx={textFieldStyles} />
          </Box>

          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              label="Password"
              type={showPassword ? 'text' : 'password'}
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={textFieldStyles}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)} edge="end" sx={{ color: '#666' }}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          <Box sx={{ mb: 1 }}>
            <TextField fullWidth label="Confirm Password" type={showPassword ? 'text' : 'password'} {...register('confirmPassword')} error={!!errors.confirmPassword} helperText={errors.confirmPassword?.message} sx={textFieldStyles} />
          </Box>

          <Typography variant="caption" sx={{ mb: 2, display: 'block', color: '#666' }}>
            Use 8 or more characters for password.
          </Typography>

          <CaptchaComponent onVerify={(verified) => console.log('Captcha verified:', verified)} />

          <Button type="submit" fullWidth variant="contained" disabled={isSubmitting} sx={{ width: '100%', height: '48px', mb: 2, backgroundColor: '#1976d2', fontSize: '1rem', fontWeight: 600, textTransform: 'none', borderRadius: 1, '&:hover': { backgroundColor: '#1565c0' } }}>
            {isSubmitting ? 'Creating account...' : 'Create Account'}
          </Button>

          <Typography variant="body2" sx={{ color: '#666', fontSize: '0.9rem', textAlign: 'center', mt: 0 }}>
            Already have a Pabbly Account?{' '}
            <Link href={paths.auth.jwt.signIn} sx={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
              Login
            </Link>
          </Typography>

          <Divider sx={{ my: 2, borderColor: '#e0e0e0' }} />

          <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem', textAlign: 'center', display: 'block' }}>
            By signing up, I agree to Pabbly&apos;s{' '}
            <Link href="#" sx={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="#" sx={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500, '&:hover': { textDecoration: 'underline' } }}>
              Privacy Policy
            </Link>.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
