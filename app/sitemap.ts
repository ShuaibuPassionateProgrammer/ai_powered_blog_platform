import { getAllPosts } from '@/lib/blog';

export default async function sitemap() {
  const posts = await getAllPosts();
  
  const postEntries = posts.map((post) => ({
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/posts/${post.slug}`, 
    lastModified: post.frontmatter.date,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));
  
  const routes = ['', '/posts', '/admin'].map((route) => ({ 
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily',
    priority: 1,
  }));
  
  return [...routes, ...postEntries];
}