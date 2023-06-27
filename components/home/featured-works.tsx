import { Box, Container, Stack, Typography, Link as MuiLink } from '@mui/material';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './post-card';
import { Work } from '@/models';
import { WorkList } from '../work';

export function FeaturedWorks() {
  const workList: Work[] = [
    {
      id: '1',
      title: 'Designing Dashboards',
      createdAt: '1685767247204',
      updatedAt: '1685767247204',
      tagList: ['Dashboard'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dvzmltugy/image/upload/v1685775551/learn-nextjs/work1_jihsjy.jpg',
    },
    {
      id: '2',
      title: 'Vibrant Portraits of 2020',
      createdAt: '1685767247204',
      updatedAt: '1685767247204',
      tagList: ['Illustration'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dvzmltugy/image/upload/v1685775551/learn-nextjs/work2_p46xeq.jpg',
    },
    {
      id: '3',
      title: '36 Days of Malayalam type',
      createdAt: '1685767247204',
      updatedAt: '1685767247204',
      tagList: ['Typography'],
      shortDescription:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      fullDescription: '',
      thumbnailUrl:
        'https://res.cloudinary.com/dvzmltugy/image/upload/v1685775551/learn-nextjs/work3_fb5ezb.jpg',
    },
  ];

  return (
    <Box component={'section'}>
      <Container>
        <Typography variant="h5" mb={4} mt={2}>
          Featured Works
        </Typography>
        <WorkList workList={workList}></WorkList>
      </Container>
    </Box>
  );
}
