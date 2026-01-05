import { promises as fs } from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import highlight from 'rehype-highlight';
import readingTime from 'reading-time';

type FrontMatter = {
  title: string;
  date: string;
  description: string;
  tags: string[];
  author: string;
  image?: string;
};

export type PostData = {
  slug: string;
  content: string;
  frontmatter: FrontMatter & { readingTime: string };
  // Table of contents will be generated separately in the component
};

export async function getAllPosts(): Promise<PostData[]> {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const fileNames = await fs.readdir(postsDirectory);
  
  const posts = await Promise.all(
    fileNames
      .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
      .map(async (fileName) => {
        const slug = fileName.replace(/\.mdx?$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = await fs.readFile(fullPath, 'utf8');
        
        const { data, content } = matter(fileContents);
        
        // Process markdown content
        const processedContent = await remark()
          .use(gfm)
          .use(html)
          .process(content);
        
        const contentHtml = processedContent.toString();
        
        // Calculate reading time
        const readTime = readingTime(content);
        
        return {
          slug,
          content: contentHtml,
          frontmatter: {
            ...data as FrontMatter,
            readingTime: readTime.text,
          },
          // Table of contents will be generated separately in the component
        };
      })
  );
  
  // Sort posts by date
  return posts.sort((a, b) => 
    new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
  );
}

export async function getPostBySlug(slug: string): Promise<PostData | null> {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  
  try {
    const fileContents = await fs.readFile(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Process markdown content
    const processedContent = await remark()
      .use(gfm)
      .use(html)
      .process(content);
    
    const contentHtml = processedContent.toString();
    
    // Calculate reading time
    const readTime = readingTime(content);
    
    return {
      slug,
      content: contentHtml,
      frontmatter: {
        ...data as FrontMatter,
        readingTime: readTime.text,
      },
      // Table of contents will be generated separately in the component
    };
  } catch (error) {
    console.error(`Error reading post with slug ${slug}:`, error);
    return null;
  }
}

export async function getPostSlugs(): Promise<string[]> {
  const postsDirectory = path.join(process.cwd(), 'content', 'posts');
  const fileNames = await fs.readdir(postsDirectory);
  
  return fileNames
    .filter(fileName => fileName.endsWith('.md') || fileName.endsWith('.mdx'))
    .map(fileName => fileName.replace(/\.mdx?$/, ''));
}

export async function getPostsByTag(tag: string): Promise<PostData[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.frontmatter.tags.includes(tag));
}

export async function getAllTags(): Promise<string[]> {
  const allPosts = await getAllPosts();
  const allTags = allPosts.flatMap(post => post.frontmatter.tags);
  return Array.from(new Set(allTags));
}