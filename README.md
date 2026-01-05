# AI-Powered Blog Platform

A modern, SEO-optimized blogging platform with AI-powered features built using Next.js, TypeScript, and Tailwind CSS.

## Features

- **Dynamic Blog Routing**: SEO-friendly URLs with automatic slug generation
- **Markdown Content Management**: Simple content creation with frontmatter support
- **Syntax-Highlighted Code Blocks**: Beautiful code rendering with copy functionality
- **AI-Assisted Content Utilities**: Auto-generated summaries and suggested tags
- **SEO-Optimized**: Dynamic metadata, Open Graph tags, and sitemap generation
- **Responsive Design**: Mobile-first approach with Tailwind CSS v4
- **Performance Focused**: Static generation and optimized loading

## Tech Stack

- Next.js 16.1.1 (App Router)
- TypeScript
- Tailwind CSS v4
- Markdown/MDX content
- remark/rehype ecosystem
- Server Components + Client Components

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Adding New Blog Posts

1. Create a new markdown file in the `content/posts/` directory
2. Include frontmatter with required fields:

```markdown
---
title: "Your Post Title"
date: "2024-01-01"
description: "Brief description of your post"
tags: ["tag1", "tag2"]
author: "Your Name"
---

# Your Post Title

Write your content here using Markdown...
```

3. The post will automatically appear on the blog

## AI-Powered Features

The platform includes several AI-powered utilities:

- **Smart Summaries**: Automatically generated content summaries
- **Intelligent Tagging**: Suggested tags based on content analysis
- **Reading Time Estimation**: Accurate reading time calculations

## Project Structure

```
ai_powered_blog_platform/
├── app/
│   ├── (public)/          # Public-facing pages (home, about)
│   ├── (blog)/           # Blog-specific routes and layout
│   ├── (admin)/          # Admin/content management
│   └── api/              # API routes (OG images, etc.)
├── components/
│   ├── ui/               # Reusable UI components
│   └── blog/             # Blog-specific components
├── content/
│   └── posts/            # Markdown blog posts
├── lib/
│   ├── blog.ts           # Blog data utilities
│   ├── ai.ts             # AI-powered content utilities
│   └── utils.ts          # General utility functions
```

## Environment Variables

- `NEXT_PUBLIC_SITE_URL`: Your production site URL (for sitemap generation)

## Production

To build for production:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Contributing

Feel free to submit issues and pull requests to improve the platform.