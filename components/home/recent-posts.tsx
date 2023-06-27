import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Post } from '@/models';

export function RecentPosts() {
  const postList: Post[] = [
    {
      id: '1',
      slug: '',
      title: 'Making a design system from scratch',
      publicDate: '2023-06-25T03:00:00Z',
      tagList: ['Design', 'Pattern'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      mdContent: '',
    },
    {
      id: '2',
      slug: '',
      title: 'Creating pixel perfect icons in Figma',
      publicDate: '2023-06-25T03:00:00Z',
      tagList: ['Figma', 'Icon Design'],
      description:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      mdContent: '',
    },
  ];

  return (
    <Box component={'section'} bgcolor={'secondary.light'} py={4}>
      <Container>
        <Stack
          direction={'row'}
          mb={2}
          justifyContent={{ xs: 'center', md: 'space-between' }}
          alignItems={'center'}
        >
          <Typography variant="h5">Recent Posts</Typography>
          <Link legacyBehavior href={'/blog'} passHref>
            <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View all</MuiLink>
          </Link>
        </Stack>

        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={3}
          sx={{
            '& > div': {
              width: {
                xs: '100%',
                md: '50%',
              },
            },
          }}
        >
          {postList.map((post) => (
            <Box key={post.id}>
              <PostCard post={post}></PostCard>
            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}
