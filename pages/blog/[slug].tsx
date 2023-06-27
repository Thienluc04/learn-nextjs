import { Seo } from '@/components/common';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container, Divider } from '@mui/material';
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from 'next';
import Script from 'next/script';
import rehypeAutolinkHeadings from 'rehype-autolink-headings/lib';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype/lib';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

export interface BlogDetailProps {
  post: Post;
}

export default function PostDetailPage({ post }: BlogDetailProps) {
  if (!post) return null;

  return (
    <Box>
      <Seo
        data={{
          title: `${post.title} | Blog Details`,
          description: post.description,
          url: `${process.env.HOST_URL}/blog/${post.slug}`,
          thumbnailUrl:
            post.thumbnailUrl ||
            'https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        }}
      ></Seo>

      <Container>
        <p>{post.title}</p>
        <p>{post.author?.name}</p>
        <p>{post.description}</p>

        <p>{post.mdContent}</p>

        <Divider></Divider>

        <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
      </Container>

      <Script src="/prism.js" strategy="afterInteractive"></Script>
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const postList = await getPostList();

  return {
    paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<BlogDetailProps> = async (
  context: GetStaticPropsContext
) => {
  const postList = await getPostList();
  const slug = context.params?.slug;
  if (!slug) return { notFound: true };

  const post = postList.find((x) => x.slug === slug);
  if (!post) return { notFound: true };

  // convert markdown to html
  const file = await unified()
    .use(remarkParse)
    .use(remarkToc, { heading: 'agenda.*' })
    .use(remarkPrism)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeDocument, { title: 'Blog details page' })
    .use(rehypeFormat)
    .use(rehypeStringify)
    .process(post.mdContent || '');

  post.htmlContent = file.toString();

  return {
    props: {
      post,
    },
  };
};
