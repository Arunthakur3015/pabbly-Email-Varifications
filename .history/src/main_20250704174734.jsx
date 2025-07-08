import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Snackbar } from 'src/components/snackbar/CustomSnackbar';

import App from './app';
import { CONFIG } from './config-global';

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={CONFIG.site.basePath}>
        <Snackbar>
          <Suspense>
            <App />
          </Suspense>
        </CustomSnackbarProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
