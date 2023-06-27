import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

export interface PostDetailProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailProps) {
  if (!post) return null;

  return (
    <div>
      <h1>Post Detail Page</h1>

      <p>{post.title}</p>
      <p>{post.author.name}</p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("\nGET STATIC PATHS");

  const response = await fetch("https://locofy-server.onrender.com/api/blogs");
  const data = await response.json();

  return {
    paths: data.map((post: any) => ({ params: { postId: post.id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("\nGET STATIC PROPS", context.params?.postId);
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };

  const response = await fetch(`https://locofy-server.onrender.com/api/blogs/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
};
