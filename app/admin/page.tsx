import { getAllPosts } from '@/lib/blog';
import { PostCard } from '@/components/blog/post-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Admin - AI-Powered Blog Platform',
  description: 'Content management for the AI blog platform',
};

export default async function AdminPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link href="/">
          <Button>
            Back to Blog
          </Button>
        </Link>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Content Management</h2>
        <p className="text-muted-foreground mb-6">
          This is the admin section where you can manage your blog content. 
          Add new posts by creating markdown files in the <code className="bg-background px-1 rounded">content/posts</code> directory.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.slug} className="border rounded-lg p-4">
              <h3 className="font-semibold mb-2">{post.frontmatter.title}</h3>
              <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                {post.frontmatter.description}
              </p>
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>{post.frontmatter.author}</span>
                <span>{new Date(post.frontmatter.date).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-muted p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">How to Add New Posts</h2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Create a new markdown file in the <code className="bg-background px-1 rounded">content/posts</code> directory</li>
          <li>Include frontmatter with title, date, description, tags, and author</li>
          <li>Write your content in Markdown format</li>
          <li>The post will automatically appear on the blog</li>
        </ol>
        
        <div className="mt-4 p-4 bg-background rounded-md font-mono text-sm">
          <pre>{`---
title: "Your Post Title"
date: "2024-01-01"
description: "Brief description of your post"
tags: ["tag1", "tag2"]
author: "Your Name"
---

# Your Post Title

Write your content here using Markdown...

## Section Header

Content goes here...`}</pre>
        </div>
      </div>
    </div>
  );
}