// import Header from "@/components/common/Header";
import { AdminLayout, MainLayout } from '@/components/layout';
import { Box, Button, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// const Header = dynamic(() => import('@/components/common/Header'), { ssr: true });

export interface IAboutPageProps {}

export default function AboutPage(props: IAboutPageProps) {
  const [postList, setPostList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const response = await fetch('https://locofy-server.onrender.com/api/blogs');
      const data = await response.json();
      setPostList(data);
    })();
  }, []);

  const hanldeNextClick = () => {
    router.push(
      {
        pathname: '/about',
        query: {
          page: (Number(router.query?.page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <Box>
      <Typography component="h1" variant="h3" color={'primary.main'}>
        About Page
      </Typography>

      <Button variant="contained" color="success">
        Testing
      </Button>

      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>

      <button onClick={hanldeNextClick}>Next</button>
    </Box>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log('Get Static Props');

  return {
    props: {},
  };
}

// export async function getServerSideProps() {
//   return {
//     props: {},
//   };
// }
