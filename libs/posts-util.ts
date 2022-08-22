import { readFileSync } from 'fs';
import { readdir } from 'fs/promises';
import matter from 'gray-matter';
import path, { resolve } from 'path';

export interface PostType {
  title: string;
  date: string;
  image: string;
  excerpt: string;
  isFeatured: boolean;
  slug: string;
  content: string;
}

const postDirectory = path.join(process.cwd(), 'data', 'posts');

export const getAllPosts = async () => {
  const files = await getFiles(postDirectory);

  return files.map((path) => {
    const fileContents = readFileSync(path, 'utf-8');
    const { data, content } = matter(fileContents);
    const slug = path.split('/posts')[1].replace(/.md/, '');

    return {
      ...data,
      slug,
      content,
    } as PostType;
  });
};

async function getFiles(dir: string) {
  const dirents = await readdir(dir, { withFileTypes: true });
  const files: any[] = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(dir, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    })
  );
  return Array.prototype.concat(...files);
}
