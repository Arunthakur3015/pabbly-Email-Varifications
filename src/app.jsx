import 'src/global.css';

// ----------------------------------------------------------------------


import { Router } from 'src/routes/sections';

import { useScrollToTop } from 'src/hooks/use-scroll-to-top';

import { ThemeProvider } from 'src/theme/theme-provider';

import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { CustomSnackbarProvider } from 'src/components/snackbar/CustomSnackbar';
import { SettingsDrawer, defaultSettings, SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/jwt';

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <AuthProvider>
     
      <SettingsProvider settings={defaultSettings}>
        <ThemeProvider>
          <CustomSnackbarProvider>
            <MotionLazy>
              <ProgressBar />
              <SettingsDrawer />
              <Router />
            </MotionLazy>
          </CustomSnackbarProvider>
        </ThemeProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}
