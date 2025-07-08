import { m } from 'framer-motion';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const features = [
  {
    icon: '/assets/icons/components/Pabbly-Connect-1 1.png',
    title: 'Pabbly Connect',
    desc: 'Automate tasks & save 100X time.',
  },
  {
    icon: '/assets/icons/components/Pabbly-Subscription-Billing-2 1.png',
    title: 'Subscription Billing',
    desc: 'Sell online & collect payments.',
  },
  {
    icon: '/assets/icons/components/Pabbly-Connect-1 1.png',
    title: 'Pabbly Email Marketing',
    desc: 'Send emails to subscribers.',
  },
  {
    icon: '/assets/icons/components/pabbly-hook.png',
    title: 'Pabbly Hook',
    desc: 'Webhook event handling for scalable applications.',
  },
  {
    icon: '/assets/icons/components/pabbly-chatflow.png',
    title: 'Pabbly ChatFlow',
    desc: 'Automate WhatsApp conversation effortlessly.',
  },
  {
    icon: '/assets/icons/components/Pabbly-Form-Builder 1.png',
    title: 'Pabbly Form Builder',
    desc: 'Create forms and gather leads.',
  },
  {
    icon: '/assets/icons/components/Pabbly-Email-Marketing-2 1.png',
    title: 'Pabbly Email Verification',
    desc: 'Verify and remove bad emails.',
  },
];

const slides = [features.slice(0, 5), features.slice(5)];

export default function FeatureSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        px: 3,
        pt: 20,
        pb: 6,
        maxWidth: 480,
        minHeight: 660,
        mx: 'auto',
        background: 'linear-gradient(rgba(236, 255, 247, 0.5), rgba(163, 228, 201, 0.65))',
        textAlign: 'left',
        position: 'relative',
        display: { xs: 'none', sm: 'block' }, // ✅ Hide on small screens only
      }}
    >
      {/* Top Left Logo */}
      <Box
        component="img"
        src="/logo/auth.svg"
        alt="Logo"
        sx={{
          position: 'absolute',
          top: 24,
          left: 24,
          width: 150,
          height: 42.65,
          objectFit: 'contain',
        }}
      />

      <Typography variant="h3" fontWeight="700" textAlign="center" fontSize="30px">
        No Restrictions on Features!
      </Typography>
      <Typography variant="body2" color="text.secondary" textAlign="center" fontSize="16px" mt={1}>
        Scale & Grow Your Business with Pabbly.
      </Typography>

      <Box
        mt={4}
        width={432}
        height={396}
        mx="auto"
        overflow="hidden"
        position="relative"
        borderRadius={2}
      >
        <Box
          key={currentIndex}
          component={m.div}
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          position="absolute"
          width={432}
          height={396}
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
        >
          {slides[currentIndex].map((feature, index) => (
            <Box key={index} display="flex" alignItems="center" gap={2} height={66} px={2} py={1}>
              <Box
                sx={{
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 20,
                  backgroundColor: 'rgba(0,0,0,0.05)',
                  borderRadius: '50%',
                }}
              >
                {feature.icon.startsWith('/') ? (
                  <Box
                    component="img"
                    src={feature.icon}
                    alt={feature.title}
                    sx={{ width: 36, height: 36, objectFit: 'contain' }}
                  />
                ) : (
                  feature.icon
                )}
              </Box>
              <Box>
                <Typography variant="subtitle1" fontWeight="bold" fontSize="18px">
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" fontSize="14px">
                  {feature.desc}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Dots */}
        <Box
          position="absolute"
          bottom={8}
          left="50%"
          sx={{ transform: 'translateX(-50%)' }}
          display="flex"
          gap={1.5}
        >
          {slides.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                backgroundColor: currentIndex === index ? 'black' : 'grey.400',
                cursor: 'pointer',
                transition: 'all 0.2s ease-in-out',
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Logos at bottom */}
      <Box
        width={200}
        height={80}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 4, mx: 'auto' }}
      >
        <Box
          component="img"
          src="/logo/Aicpa.svg"
          alt="AICPA Logo"
          sx={{ width: 80, height: 80, objectFit: 'contain' }}
        />
        <Box
          component="img"
          src="/logo/ISO.svg"
          alt="ISO Logo"
          sx={{ width: 80, height: 80, objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
}
