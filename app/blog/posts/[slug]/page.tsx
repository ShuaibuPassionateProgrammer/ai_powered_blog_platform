import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { formatDate } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { TableOfContents } from '@/components/blog/table-of-contents';
import { generateSummary, suggestTags } from '@/lib/ai';

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.frontmatter.title} - AI-Powered Blog`,
    description: post.frontmatter.description,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      publishedTime: post.frontmatter.date,
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await getPostBySlug(params.slug);
  
  if (!post) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground">The requested post could not be found.</p>
      </div>
    );
  }

  // Generate AI-powered content
  const aiSummary = generateSummary(post.content);
  const aiSuggestedTags = suggestTags(post.content, post.frontmatter.tags);

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <div className="mb-4">
          {post.frontmatter.tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="mr-2">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          {post.frontmatter.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <span>By {post.frontmatter.author}</span>
          <span>•</span>
          <time dateTime={post.frontmatter.date}>
            {formatDate(post.frontmatter.date)}
          </time>
          <span>•</span>
          <span>{post.frontmatter.readingTime}</span>
        </div>
        
        <p className="text-xl text-muted-foreground mb-6">
          {post.frontmatter.description}
        </p>
      </header>
      
      <div className="prose prose-lg max-w-none">
        <TableOfContents htmlContent={post.content} />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      
      <footer className="mt-12 pt-8 border-t">
        <div className="mb-6">
          <h3 className="font-semibold mb-3">AI-Generated Summary</h3>
          <p className="text-muted-foreground">{aiSummary}</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-3">Suggested Tags</h3>
          <div className="flex flex-wrap gap-2">
            {aiSuggestedTags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </footer>
    </article>
  );
}