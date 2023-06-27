import { GetStaticProps, GetStaticPropsContext } from "next";
import Link from "next/link";
import * as React from "react";

export interface PostListProps {
  posts: any[];
}

export default function PostList({ posts }: PostListProps) {
  console.log("PostList ~ posts:", posts);

  return (
    <div>
      <h1>Post List Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostListProps> = async (
  context: GetStaticPropsContext
) => {
  const response = await fetch("https://locofy-server.onrender.com/api/blogs");
  const data = await response.json();

  return {
    props: {
      posts: data.map((x: any) => ({ id: x.id, title: x.title })),
    },
  };
};
