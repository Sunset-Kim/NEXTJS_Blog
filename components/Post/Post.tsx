import React from 'react';
import Image from 'next/image';
import { PostType } from '../../libs/posts-util';
import Link from 'next/link';

interface P {
  data: PostType;
}
const Post: React.FC<P> = ({ data }) => {
  const { date, image, title, excerpt, slug } = data;
  return (
    <li>
      <Link href={'posts/' + slug}>
        <a>
          <div>
            <Image
              src={'/assets/posts/' + image}
              alt={title}
              width={100}
              height={100}
            />
          </div>
          <div>
            <p>{date}</p>
            <h5>{title}</h5>
            <div>{excerpt}</div>
          </div>
        </a>
      </Link>
    </li>
  );
};

export default Post;
