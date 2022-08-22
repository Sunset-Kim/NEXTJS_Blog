import React from 'react';
import { PostType } from '../../libs/posts-util';
import Post from './Post';

interface P {
  posts: PostType[];
}

const PostList: React.FC<P> = ({ posts }) => {
  return (
    <ul>
      {posts?.map((post) => (
        <Post key={post.date} data={post} />
      ))}
    </ul>
  );
};

export default PostList;
