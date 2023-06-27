import { Post } from '@/models';
import { Card, CardContent } from '@mui/material';
import format from 'date-fns/format';
import { PostItem } from '../blog';

export interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  if (!post) return null;
  format;
  return (
    <Card>
      <CardContent>
        <PostItem post={post}></PostItem>
      </CardContent>
    </Card>
  );
}
