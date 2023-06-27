import { LayoutProps } from '@/models/common';
import { Box, Container, Stack } from '@mui/material';
import Link from 'next/link';
import Footer from '../common/Footer';
import Header from '../common/header';

export interface MainLayoutProps {}

export function MainLayout({ children }: LayoutProps) {
  return (
    <Stack minHeight={'100vh'}>
      <Header></Header>
      <Box component={'main'} flexGrow={1}>
        {children}
      </Box>

      <Footer></Footer>
    </Stack>
  );
}
