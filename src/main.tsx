import { StrictMode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from './api/queryClient.ts';
import Router from './routes';

import './style/common/common.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <HelmetProvider>
          <Router />
        </HelmetProvider>
      </RecoilRoot>
    </QueryClientProvider>
  </StrictMode>,
);
