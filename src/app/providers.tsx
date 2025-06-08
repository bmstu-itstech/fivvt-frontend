'use client';
import {useEffect, type ReactNode} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const Providers = ({children}: {children: ReactNode}) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
