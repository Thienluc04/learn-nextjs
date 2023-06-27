import { PostItem } from '@/components/blog';
import { MainLayout } from '@/components/layout';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export interface BlogListPageProps {
  posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
  console.log('PostList ~ posts:', posts);

  return (
    <Box>
      <Container>
        <h1>Blog</h1>
        <Box component={'ul'} sx={{ listStyleType: 'none', p: 0 }}>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.slug}`}>
                <PostItem post={post}></PostItem>
              </Link>

              <Divider sx={{ my: 3 }}></Divider>
            </li>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
  const postList = await getPostList();

  return {
    props: {
      posts: postList,
    },
  };
};
