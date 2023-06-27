import { Box, Container, Link as MuiLink, Stack } from '@mui/material';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';

export function HeaderDesktop() {
  const router = useRouter();
  return (
    <Box display={{ xs: 'none', md: 'block' }} py={2}>
      <Container>
        <Stack direction={'row'} justifyContent={'flex-end'}>
          {ROUTE_LIST.map((route) => (
            <Link legacyBehavior key={route.path} href={`${route.path}`}>
              <MuiLink
                sx={{ ml: 2, cursor: 'pointer', fontWeight: 'medium' }}
                className={clsx({ active: router.pathname === route.path })}
              >
                {route.label}
              </MuiLink>
            </Link>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
