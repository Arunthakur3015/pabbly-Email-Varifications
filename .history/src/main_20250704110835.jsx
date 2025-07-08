import ReactDOM from 'react-dom/client';
import { Suspense, StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import App from './app';
import { CONFIG } from './config-global';
import { CustomSnackbarProvider } from './custom-snackbar';


// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter basename={CONFIG.site.basePath}>
       <CustomSnackbarProvider> {/* ✅ Yeh add karo */}
          <Suspense>
            <App />
          </Suspense>
        </CustomSnackbarProvider>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
