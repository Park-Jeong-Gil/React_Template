import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Router from './routes';

import './style/common/common.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <HelmetProvider>
        <Router />
      </HelmetProvider>
    </RecoilRoot>
  </StrictMode>,
);
