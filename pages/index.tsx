import type { GetStaticProps, NextPage, InferGetStaticPropsType } from 'next';
import Contents from '../components/Contents/Contents';
import Hero from '../components/Hero/Hero';
import { getAllPosts, PostType } from '../libs/posts-util';
import Image from 'next/image';
import PostList from '../components/Post/PostList';

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  data,
}) => {
  return (
    <div>
      <Hero />
      <PostList posts={data} />
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  data: PostType[];
}> = async (context) => {
  const data = await getAllPosts();

  return {
    props: {
      data,
    },
  };
};

export default Home;
