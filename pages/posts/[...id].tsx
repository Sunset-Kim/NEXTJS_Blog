import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ParsedUrlQuery } from 'querystring';
import React from 'react';
import { getAllPosts } from '../../libs/posts-util';

const PostDetailPage: NextPage = () => {
  return <div>PostDetailPage</div>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const files = await getAllPosts();

  const paths = files.map((post) => {
    return {
      params: { id: post.slug.split('/').splice(1) },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  id: string[];
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params as Params;

  console.log(id);

  return {
    props: {},
  };
};

export default PostDetailPage;
