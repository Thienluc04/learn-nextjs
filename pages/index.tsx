import { Seo } from '@/components/common';
import { FeaturedWorks, HeroSection, RecentPosts } from '@/components/home';
import { MainLayout } from '@/components/layout';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
  return (
    <Box>
      <Seo
        data={{
          title: 'This is the title',
          description: 'This is description',
          url: 'url',
          thumbnailUrl: 'thumbnailurl',
        }}
      ></Seo>

      <HeroSection></HeroSection>
      <RecentPosts></RecentPosts>
      <FeaturedWorks></FeaturedWorks>
    </Box>
  );
};

Home.Layout = MainLayout;

export default Home;
