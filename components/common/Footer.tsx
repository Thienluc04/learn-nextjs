import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import { Box, Icon, Stack, Typography } from '@mui/material';
import * as React from 'react';

export interface FooterProps {}

export default function Footer(props: FooterProps) {
  const socialLinks = [
    {
      icon: Facebook,
      url: 'https://facebook.com',
    },
    {
      icon: Instagram,
      url: 'https://instagram.com',
    },
    {
      icon: Twitter,
      url: 'https://twitter.com',
    },
    {
      icon: LinkedIn,
      url: 'https://linkedin.com',
    },
  ];
  return (
    <Box component={'footer'} py={2} textAlign={'center'}>
      <Stack direction={'row'} justifyContent={'center'}>
        {socialLinks.map((item, index) => (
          <Box
            key={index}
            component={'a'}
            p={2}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon component={item.icon} fontSize="large" />
          </Box>
        ))}
      </Stack>

      <Typography>Copyright ©{new Date().getFullYear()} All rights reserved </Typography>
    </Box>
  );
}
